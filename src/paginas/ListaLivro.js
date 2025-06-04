import CabecalhoCategoria from "../componentes/CabecalhoCategoria";
import axios from "axios";
import { useState, useEffect, } from "react";


export default function ListaLivro(){

    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:6969/livro`);
        setDados(data);

    }

    useEffect(() => {
        listar()
    }, []);

    return(
        <div>
            <CabecalhoCategoria 
            titulo="Livros" 
            descricao="Gerenciador de criação de livros da biblioteca" 
            rota="/cadastrolivro"
            />
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Ação</th>
                            <th scope="col">Foto</th>
                            <th scope="col">ID</th>
                            <th scope="col">Edição</th>
                            <th scope="col">Páginas</th>
                            <th scope="col">Publicação</th>
                            <th scope="col">Localização</th>
                            <th scope="col">Resumo</th>
                            <th scope="col">Ativo</th>
                            <th scope="col">Condição Física</th>
                            <th scope="col">Emprestado</th>
                            <th scope="col">ID Editora</th>
                            <th scope="col">ID Categoria</th>
                        </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary" href={`/cadastrolivro/${d.idlivro}`}>Alterar</a>
                                    </td>
                                    <td><img class="img-thumbnail" src={d.foto} style={{width: '100px'}}></img></td>
                                    <td>{d.idlivro}</td>
                                    <td>{d.titulo}</td>
                                    <td>{d.edicao}</td>
                                    <td>{d.paginas}</td>
                                    <td>{d.publicacao}</td>
                                    <td>{d.localizacao}</td>
                                    <td>{d.resumo}</td>
                                    <td>{d.ativo}</td>
                                    <td>{d.condicaofisica}</td>
                                    <td>{d.emprestado}</td>
                                    <td>{d.ideditora}</td>
                                    <td>{d.idcategoria}</td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};