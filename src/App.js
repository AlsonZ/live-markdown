import React, { useEffect, useRef, useState } from "react";
import GrowContainer from "./components/GrowContainer";
import StickyContainer from "./components/StickyContainer";
import "./App.css";
import { Button } from "rixun-ui";

function App() {
  // const arrayContent = Array(100).fill(0);
  const RESIZE_BAR_WIDTH = 28;
  const MIN_COL_FR_WIDTH = 0.1;

  const [colWidth, setColWidth] = useState({ left: 1, right: 1 });
  const [startCord, setStartCord] = useState(null);
  const [mouseCord, setMouseCord] = useState(0);
  const [track, setTrack] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {}, []);

  const resizeContainers = (e) => {
    setMouseCord(() => getCurrentMousePosition(e));
    if (track) {
      const calculatedPosition = calculateSliderPosition(
        getCurrentMousePosition(e)
      );
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
    const convertedToDecimal =
      currentMousePos / containerRef.current.offsetWidth;
    return convertedToDecimal;
  };

  const handleStopTracking = () => {
    setTrack(false);
  };
  const getCurrentMousePosition = (e) => {
    const col = containerRef.current.getBoundingClientRect();
    const currentMousePos = e.clientX - col.left;
    return currentMousePos;
  };

  const handleClickSliderBar = (e) => {
    setStartCord(getCurrentMousePosition(e));
    setTrack(true);
  };

  return (
    <div className="live-markdown">
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
        <StickyContainer>
          mcds: {mouseCord}
          <br />
          <br />
          <Button
            name="log width"
            onClick={() => {
              console.log(containerRef.current.offsetWidth);
            }}
          />
        </StickyContainer>
        <div className="lm-resize-bar" onMouseDown={handleClickSliderBar}></div>
        <GrowContainer>
          startCords: {startCord}
          {/* {arrayContent.map((content, index) => (
            <p key={index + content}>ye</p>
          ))} */}
        </GrowContainer>
      </div>
      <div className="lm-container-border" />
    </div>
  );
}

export default App;
