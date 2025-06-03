import CabecalhoCategoria from "../componentes/CabecalhoCategoria";
import axios from "axios";
import { useState, useEffect, } from "react";


export default function ListaEditora(){

    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:6969/editora`);
        setDados(data);

    }

    useEffect(() => {
        listar()
    }, []);

    return(
        <div>
            <CabecalhoCategoria 
            titulo="Editoras" 
            descricao="Gerenciador de criação de editoras da biblioteca" 
            rota="/cadastroeditora"
            />
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Ação</th>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CNPJ</th>
                            <th scope="col">Endereço</th>
                        </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary" href={`/cadastroeditora/${d.ideditora}`}>Alterar</a>
                                    </td>
                                    <td>{d.ideditora}</td>
                                    <td>{d.nomeeditora}</td>
                                    <td>{d.cnpj}</td>
                                    <td>{d.endereco}</td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};