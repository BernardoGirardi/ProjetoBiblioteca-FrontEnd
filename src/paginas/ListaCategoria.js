import CabecalhoCategoria from "../componentes/CabecalhoCategoria";
import axios from "axios";
import { useState, useEffect, } from "react";


export default function ListaCategoria(){

    const [dados, setDados] = useState([]);

    const listar = async () => {
        let {data} = await axios.get(`http://localhost:6969/categoria`);
        console.log(data);
        setDados(data);

    }

    useEffect(() => {listar()}, []);

    return(
        <div>
            <CabecalhoCategoria 
            titulo="Categorias" 
            descricao="Gerenciador de criação de categorias da biblioteca" 
            rota="/cadastroCategoria"
            />
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Ação</th>
                            <th scope="col">ID</th>
                            <th scope="col">Categoria</th>
                        </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary" href={`/cadastroCategoria/${d.idcategoria}`}>Alterar</a>
                                    </td>
                                    <td>{d.idcategoria}</td>
                                    <td>{d.nomecategoria}</td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};