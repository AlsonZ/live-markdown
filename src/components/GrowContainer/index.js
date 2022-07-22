import { Card } from "rixun-ui";
import PropTypes from "prop-types";
import "./GrowContainer.css";

const GrowContainer = ({ children, width }) => {
  return (
    <Card type="border" style={{ width: width }} className="gc-container">
      {children}
    </Card>
  );
};
GrowContainer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
};
export default GrowContainer;
