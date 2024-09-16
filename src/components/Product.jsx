import PropTypes from 'prop-types';
import '../styles/Product.css';

const Product = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Preço: R$ {price.toFixed(2)}</p>
      <p>{description ? description : 'Descrição não disponível'}</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
};

Product.defaultProps = {
  description: null,
};

export default Product;