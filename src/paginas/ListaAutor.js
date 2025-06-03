import CabecalhoCategoria from "../componentes/CabecalhoCategoria";
import axios from "axios";
import { useState, useEffect, } from "react";


export default function ListaAutor(){

    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:6969/autor`);
        setDados(data);

    }

    useEffect(() => {
        listar()
    }, []);

    return(
        <div>
            <CabecalhoCategoria 
            titulo="Autores" 
            descricao="Gerenciador de criação de autores da biblioteca" 
            rota="/cadastroautor"
            />
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Ação</th>
                            <th scope="col">Foto</th>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nascimento</th>
                            <th scope="col">Nacionalidade</th>
                        </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary" href={`/cadastroautor/${d.idautor}`}>Alterar</a>
                                    </td>
                                    <td><img class="img-thumbnail" src={d.foto} style={{width: '100px'}}></img></td>
                                    <td>{d.idautor}</td>
                                    <td>{d.nomeautor}</td>
                                    <td>{d.nascimento}</td>
                                    <td>{d.nacionalidade}</td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};