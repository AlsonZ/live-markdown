import { Card } from "rixun-ui";
import PropTypes from "prop-types";
import "./GrowContainer.css";
import { forwardRef } from "react";

const GrowContainer = forwardRef(({ children, width }, ref) => {
  return (
    <Card
      type="border"
      style={{ width: width }}
      className="gc-container"
      extraProps={{ ref: ref }}
    >
      {children}
    </Card>
  );
});
GrowContainer.displayName = "GrowContainer";
GrowContainer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
};
export default GrowContainer;
