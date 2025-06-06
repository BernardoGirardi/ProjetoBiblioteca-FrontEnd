import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import FormCategoria from './paginas/FormCategoria';
import Home from './paginas/Home';
import ListaCategoria from './paginas/ListaCategoria';
import ListaAutor from './paginas/ListaAutor';
import FormAutor from './paginas/FormAutor';
import FormEditora from './paginas/FormEditora';
import ListaEditora from './paginas/ListaEditora';
import ListaLivro from './paginas/ListaLivro';
import FormLivro from './paginas/FormLivro';
import ListaUsuario from './paginas/ListaUsuario';
import FormUsuario from './paginas/FormUsuario';
import ListaEmprestimo from './paginas/ListaEmprestimo';
import FormEmprestimo from './paginas/FormEmprestimo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/listaCategoria' element={<ListaCategoria/>}/>
            <Route path='/cadastroCategoria' element={<FormCategoria/>}/>
            <Route path='/cadastroCategoria/:id' element={<FormCategoria/>}/>
            <Route path='/listaautor' element={<ListaAutor/>}/>
            <Route path='/cadastroautor' element={<FormAutor/>}/>
            <Route path='/cadastroautor/:id' element={<FormAutor/>}/>
            <Route path='/listaeditora' element={<ListaEditora/>}/>
            <Route path='/cadastroeditora' element={<FormEditora/>}/>
            <Route path='/cadastroeditora/:id' element={<FormEditora/>}/>
            <Route path='/listalivro' element={<ListaLivro/>}/>
            <Route path='/cadastrolivro' element={<FormLivro/>}/>
            <Route path='/cadastrolivro/:id' element={<FormLivro/>}/>
            <Route path='/listausuario' element={<ListaUsuario/>}/>
            <Route path='/cadastrousuario' element={<FormUsuario/>}/>
            <Route path='/cadastrousuario/:id' element={<FormUsuario/>}/>
            <Route path='/listaemprestimo' element={<ListaEmprestimo/>}/>
            <Route path='/cadastroemprestimo' element={<FormEmprestimo/>}/>
            <Route path='/cadastroemprestimo/:id' element={<FormEmprestimo/>}/>
            <Route path='*' element={<Home/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
