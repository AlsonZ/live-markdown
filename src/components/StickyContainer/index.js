import PropTypes from "prop-types";
import "./StickyContainer.css";
import { Card } from "rixun-ui";

export const StickyContainer = ({ children, className, onClick, width }) => {
  return (
    <Card
      className={`sc-container ${className}`}
      onClick={onClick}
      style={{ width: width }}
      type="border"
    >
      {children}
    </Card>
  );
};

StickyContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
};

export default StickyContainer;
