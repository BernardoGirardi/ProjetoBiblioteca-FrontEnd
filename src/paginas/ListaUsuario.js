import CabecalhoCategoria from "../componentes/CabecalhoCategoria";
import axios from "axios";
import { useState, useEffect, } from "react";


export default function ListaUsuario(){

    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:6969/usuario`);
        setDados(data);

    }

    useEffect(() => {
        listar()
    }, []);

    return(
        <div>
            <CabecalhoCategoria 
            titulo="Usuários" 
            descricao="Gerenciador de criação de usuários da biblioteca" 
            rota="/cadastrousuario"
            />
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Ação</th>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Email</th>
                            <th scope="col">Nascimento</th>
                            <th scope="col">Telefone</th>
                        </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary" href={`/cadastrousuario/${d.idusuario}`}>Alterar</a>
                                    </td>
                                    <td>{d.idusuario}</td>
                                    <td>{d.nome}</td>
                                    <td>{d.cpf}</td>
                                    <td>{d.email}</td>
                                    <td>{d.nascimento}</td>
                                    <td>{d.telefone}</td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};