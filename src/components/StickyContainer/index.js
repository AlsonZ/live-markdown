import PropTypes from "prop-types";
import "./StickyContainer.css";
import { Card } from "rixun-ui";
import { forwardRef } from "react";

export const StickyContainer = forwardRef(
  ({ children, className, onClick, width }, ref) => {
    return (
      <Card
        className={`sc-container ${className}`}
        onClick={onClick}
        style={{ width: width }}
        type="border"
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
  width: PropTypes.string,
};

export default StickyContainer;
