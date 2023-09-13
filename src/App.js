import axios from 'axios'
import './App.css';
import {useEffect,useState} from 'react';
import Produto from './Produto';
import NavBar from './NavBar';
function App() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products')
    .then((resposta )=>{
      setProdutos(resposta.data);
    });
  },[]);
  const Eletronicos = produtos.filter(categoria => (categoria.category == 'electronics'))
  const Joias = produtos.filter(categoria => (categoria.category == 'jewelery'))
  const RoupaHomem = produtos.filter(categoria => (categoria.category == "men's clothing"))
  const RoupaMulher = produtos.filter(categoria => (categoria.category == "women's clothing"))
  

  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then((resposta)=>{
      setCategorias(resposta.data);
      console.log(categorias)
    });
  },[]);
  
 

  return (
    
      <div>
        <NavBar/>
        <h3>Eletronicos</h3>
      {Eletronicos.map((produto) => (<Produto key={produto.id} nome={produto.title} imagem={produto.image} />
      ))}
      <div>
      <h3>Joias</h3>
      {Joias.map((produto) => (<Produto key={produto.id} nome={produto.title} imagem={produto.image} />
      ))}
      </div>

      <div>
      <h3>Roupas de Homem</h3>
      {RoupaHomem.map((produto) => (<Produto key={produto.id} nome={produto.title} imagem={produto.image} />
      ))}
      </div>

      <div>
      <h3>Roupas de Mulher</h3>
      {RoupaHomem.map((produto) => (<Produto key={produto.id} nome={produto.title} imagem={produto.image} />
      ))}
      </div>

      </div>
    
  );
  }


export default App;
