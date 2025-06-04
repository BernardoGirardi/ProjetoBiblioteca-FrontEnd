import CabecalhoCategoria from "../componentes/CabecalhoCategoria";
import axios from "axios";
import { useState, useEffect, } from "react";


export default function ListaEmprestimo(){

    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:6969/emprestimo`);
        setDados(data);

    }

    useEffect(() => {
        listar()
    }, []);

    return(
        <div>
            <CabecalhoCategoria 
            titulo="Empréstimo" 
            descricao="Gerenciador de criação de empréstimos da biblioteca" 
            rota="/cadastroemprestimo"
            />
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Ação</th>
                            <th scope="col">ID</th>
                            <th scope="col">ID Livro</th>
                            <th scope="col">Emprestimo</th>
                            <th scope="col">Vencimento</th>
                            <th scope="col">Devolucao</th>
                            <th scope="col">Observacao</th>
                            <th scope="col">Ativo</th>
                        </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary" href={`/cadastroemprestimo/${d.idemprestimo}`}>Alterar</a>
                                    </td>
                                    <td>{d.idemprestimo}</td>
                                    <td>{d.idlivro}</td>
                                    <td>{d.idusuario}</td>
                                    <td>{d.emprestimo}</td>
                                    <td>{d.vencimento}</td>
                                    <td>{d.devolucao}</td>
                                    <td>{d.observacao}</td>
                                    <td>{d.ativo}</td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};