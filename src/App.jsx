import Product from './components/Product';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Lista de Produtos</h1>
      <Product name="Smartphone" price={1999.99} description="Celular de última geração com 128GB de memória." />
      <Product name="Notebook" price={3999.99} />
    </div>
  );
};

export default App;