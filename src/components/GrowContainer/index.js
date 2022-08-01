import { Card } from "rixun-ui";
import PropTypes from "prop-types";
import "./GrowContainer.css";
import { forwardRef } from "react";

const GrowContainer = forwardRef(({ children, lmTheme, width }, ref) => {
  return (
    <Card
      style={{ width: width }}
      className="gc-container"
      type={lmTheme === "light" ? "shadow" : "border"}
      extraProps={{ ref: ref }}
    >
      {children}
    </Card>
  );
});
GrowContainer.displayName = "GrowContainer";
GrowContainer.propTypes = {
  children: PropTypes.node,
  lmTheme: PropTypes.string,
  width: PropTypes.string,
};
export default GrowContainer;
