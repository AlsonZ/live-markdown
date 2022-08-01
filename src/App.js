import React, { useEffect, useRef, useState } from "react";
import GrowContainer from "./components/GrowContainer";
import StickyContainer from "./components/StickyContainer";
import "./App.css";
import "./Theme/theme.css";
import ResizeBar from "./components/ResizeBar";
import CodeEditor from "@uiw/react-textarea-code-editor";
import ReactMarkdown from "react-markdown";

function App() {
  // const arrayContent = Array(100).fill(0);
  const RESIZE_BAR_WIDTH = 28;
  const MIN_COL_FR_WIDTH = 0.1;
  const [lmTheme] = useState("dark");
  const [colWidth, setColWidth] = useState({ left: 1, right: 1 });
  const [track, setTrack] = useState(false);
  const [codeValue, setCodeValue] = useState();
  const containerRef = useRef(null);

  // need to update lmTheme on prop.theme change for future package stuff
  useEffect(() => {}, []);

  const resizeContainers = (e) => {
    if (track) {
      const calculatedPosition = calculateSliderPosition(
        getCurrentMousePosition(e)
      );
      // console.log(getCurrentMousePosition(e), calculatedPosition);
      if (
        calculatedPosition > MIN_COL_FR_WIDTH &&
        1 - calculatedPosition > MIN_COL_FR_WIDTH
      ) {
        setColWidth(() => {
          return {
            left: calculatedPosition,
            right: 1 - calculatedPosition,
          };
        });
      }
    }
  };
  const calculateSliderPosition = (currentMousePos) => {
    // this is not accounting for the width of the resizeBar
    // as i am actually resizing based off the resize bar position instead of column
    // - makes it more left, + makes it more right
    const convertedToDecimal =
      currentMousePos / containerRef.current.offsetWidth;
    return convertedToDecimal;
  };

  const getCurrentMousePosition = (e) => {
    const col = containerRef.current.getBoundingClientRect();
    let currentMousePos = e.clientX - col.left;
    return currentMousePos;
  };

  const handleStopTracking = () => {
    setTrack(false);
  };

  const handleClickSliderBar = () => {
    setTrack(true);
  };

  const handleCodeChange = (e) => {
    setCodeValue(e.target.value);
    console.log(codeValue);
  };

  return (
    <div className={`live-markdown lm-${lmTheme}-theme`}>
      <div
        className="lm-container"
        style={{
          gridTemplateColumns: `${colWidth.left}fr ${RESIZE_BAR_WIDTH}px ${colWidth.right}fr`,
        }}
        onMouseMove={resizeContainers}
        onMouseUp={handleStopTracking}
        onMouseLeave={handleStopTracking}
        ref={containerRef}
      >
        <StickyContainer lmTheme={lmTheme}>
          <CodeEditor
            value={codeValue}
            language="markdown"
            onChange={handleCodeChange}
            placeholder="Enter markdown here"
            style={{
              backgroundColor: "var(--primary-background)",
              fontSize: 16,
              height: "100%",
              width: "100%",
            }}
          />
        </StickyContainer>
        <ResizeBar lmTheme={lmTheme} onMouseDown={handleClickSliderBar} />
        <GrowContainer lmTheme={lmTheme}>
          <ReactMarkdown>{codeValue}</ReactMarkdown>
        </GrowContainer>
      </div>
      <div className="lm-container-border" />
    </div>
  );
}

export default App;
