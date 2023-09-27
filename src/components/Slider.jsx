import PropTypes from "prop-types";
/**
 * @param {{ products }} props
 */
export const Slider = ({ products }) => {
  return (
    <div className="slider">
      <ul className="slider__list">
        {products.map((product) => {
          return (
            <li key={product.id} className="slider__item">
              <div className="slider__slide">
                <picture className="slider__img">
                  <source
                    srcSet={`/public/assets/${product.img_desktop}`}
                    media="(min-width: 768px)"
                  />
                  <img
                    // className="slide__img"
                    src={`/public/assets/${product.img_mobile}`}
                    alt={product.alt}
                  />
                </picture>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Slider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img_desktop: PropTypes.string.isRequired,
      img_mobile: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
