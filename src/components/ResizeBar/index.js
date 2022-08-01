import PropTypes from "prop-types";
import { Card } from "rixun-ui";
import "./ResizeBar.css";

const ResizeBar = ({ children, className, onMouseDown, lmTheme }) => {
  return (
    <Card
      className={`lm-resize-bar ${className}`}
      type={lmTheme === "light" ? "shadow" : "border"}
      extraProps={{
        onMouseDown: onMouseDown,
      }}
    >
      {children}
    </Card>
  );
};

ResizeBar.displayName = "ResizeBar";

ResizeBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  lmTheme: PropTypes.string,
};
export default ResizeBar;
