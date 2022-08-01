import PropTypes from "prop-types";
import "./StickyContainer.css";
import { Card } from "rixun-ui";
import { forwardRef } from "react";

export const StickyContainer = forwardRef(
  ({ children, className, onClick, lmTheme, width }, ref) => {
    return (
      <Card
        className={`sc-container ${className}`}
        onClick={onClick}
        style={{ width: width }}
        type={lmTheme === "light" ? "shadow" : "border"}
        extraProps={{ ref: ref }}
      >
        {children}
      </Card>
    );
  }
);

StickyContainer.displayName = "StickyContainer";

StickyContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  lmTheme: PropTypes.string,
  width: PropTypes.string,
};

export default StickyContainer;
