import { useEffect, useState } from "react";
import GrowContainer from "./components/GrowContainer";
import StickyContainer from "./components/StickyContainer";
import "./App.css";

function App() {
  // const arrayContent = Array(100).fill(0);
  const [colWidth] = useState({ left: "1", right: "1" });
  const [startCords, setStartCords] = useState({ x: 0, y: 0 });
  const [movingCords, setMovingCords] = useState({ x: 0, y: 0 });
  const [calculatedCords, setCalculatedCords] = useState(0);
  const [track, setTrack] = useState(false);

  useEffect(() => {}, []);

  const startResize = (e) => {
    setStartCords({
      x: e.screenX,
      y: e.screenY,
    });
  };

  const resizeContainers = (e) => {
    setMovingCords(() => ({ x: e.screenX, y: e.screenY }));
    if (track) {
      setCalculatedCords(movingCords.x - startCords.x);
    }
  };

  const handleStopTracking = () => {
    setTrack(false);
  };

  return (
    <div className="live-markdown">
      <div
        className="lm-container"
        style={{
          gridTemplateColumns: `${colWidth.left}fr 50px ${colWidth.right}fr`,
        }}
        onMouseMove={resizeContainers}
        onMouseUp={handleStopTracking}
        onMouseLeave={handleStopTracking}
      >
        {/* update sticky and grow widths here using some sort of js method or library so it equals 100%? */}
        <StickyContainer>
          moveCoords: {movingCords.x}
          <br />
          {calculatedCords}
        </StickyContainer>
        <div
          className="lm-resize-bar"
          onMouseDown={(e) => {
            startResize(e);
            setTrack(true);
          }}
        ></div>
        <GrowContainer>
          startCords: {startCords.x}
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
