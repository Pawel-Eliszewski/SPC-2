import PropTypes from "prop-types";
/**
 * @param {{ product: { id: string, img_desktop: string,
 * img_mobile: string, alt: string } }} props
 */
export const Slider = ({ product }) => {
  return (
    <div className="slider">
      <div className="slider__slide">
        <picture>
          <source
            srcSet={`/public/assets/${product.img_desktop}`}
            media="(min-width: 768px)"
          />
          <img
            className="slider__img"
            src={`/public/assets/${product.img_mobile}`}
            alt={product.alt}
          />
        </picture>
      </div>
    </div>
  );
};

Slider.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img_desktop: PropTypes.string.isRequired,
    img_mobile: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
