import PropTypes from "prop-types";
/**
 * @param {{ title: string, icon?: {}, onClick: (ev?: import('react').MouseEvent) => void,
 *  styles: 'product-card' | '', type: 'submit' | 'button' }} props
 */
export const Button = ({ title, icon, onClick, styles, type }) => {
  return (
    <button
      id={title}
      onClick={onClick}
      className={"btn " + styles + "__btn"}
      type={type}
    >
      {title}
      {icon}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  styles: PropTypes.string,
  type: PropTypes.string.isRequired,
};
