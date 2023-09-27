import PropTypes from "prop-types";
/**
 * @param {{ title: string, colors: string[],
 * onClick?: (ev?: import('react').MouseEvent) => void,
 * activeColor: string }} props
 */
export const SliderNavlinks = ({ title, colors, onClick, activeColor }) => {
  return (
    <div>
      <h6 className="slider-navlink__list-title">{title}</h6>
      <ul className="slider-navlink__list">
        {colors.map((color) => {
          return (
            <li key={color} className="slider-navlink__item">
              <button
                onClick={() => onClick(color)}
                className={`slider-navlink__btn slider-navlink__btn--color-${color} ${
                  color === activeColor ? "isActive" : ""
                }`}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SliderNavlinks.propTypes = {
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  activeColor: PropTypes.string.isRequired,
};
