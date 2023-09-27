import PropTypes from "prop-types";

export const SliderNavlinks = ({ title, products }) => {
  return (
    <div>
      <h6 className="slider-navlink__list-title">{title}</h6>
      <ul className="slider-navlink__list">
        {products.map((product) => {
          return (
            <li key={product.id} className="slider__item">
              <button
                className={`slider-navlink__btn--${product.color}`}
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
