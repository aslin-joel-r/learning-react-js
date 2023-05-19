import './App.css';
import MyButton from './MyButton.js';
import MyInput from './MyInput.js';

function App() {
  const a=true;
  let content;
  
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  return (
    
   
    <div>
    
      <ul>{listItems}</ul>
    
    </div>
  );
}

export default App;
