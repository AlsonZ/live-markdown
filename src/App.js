import { useState } from "react";
import GrowContainer from "./components/GrowContainer";
import StickyContainer from "./components/StickyContainer";
import "./App.css";

function App() {
  // const arrayContent = Array(100).fill(0);
  const [colWidth] = useState({ left: "1", right: "1" });
  const [startCords, setStartCords] = useState({ x: 0, y: 0 });
  const [movingCords, setMovingCords] = useState({ x: 0, y: 0 });

  // const reduce = (number) => {

  // };
  const handleResize = (e) => {
    setMovingCords({
      x: e.screenX,
      y: e.screenY,
    });
  };
  const startResize = (e) => {
    setStartCords({
      x: e.screenX,
      y: e.screenY,
    });
  };

  return (
    <div className="live-markdown">
      <div
        className="lm-container"
        style={{
          gridTemplateColumns: `${colWidth.left}fr 28px ${colWidth.right}fr`,
        }}
      >
        {/* update sticky and grow widths here using some sort of js method or library so it equals 100%? */}
        <StickyContainer>
          {movingCords.x},{movingCords.y}
          <br />
          {movingCords.x - startCords.x},{movingCords.y}
        </StickyContainer>
        <div
          className="lm-resize-bar"
          onDrag={handleResize}
          onDragStart={startResize}
        />
        <GrowContainer>
          {startCords.x},{startCords.y}
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
