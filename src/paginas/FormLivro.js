import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormLivro(){
    
    const navegacao =  useNavigate();
    const { id } = useParams();
    const [titulo, setTitulo] = useState('');
    const [edicao, setEdicao] = useState('');
    const [paginas, setPaginas] = useState('');
        const [publicacao, setPublicacao] = useState('');
    const [foto, setFoto] = useState('');
    const [localizacao, setLocalizacao] = useState('');    
    const [resumo, setResumo] = useState('');
    const [ativo, setAtivo] = useState('');
    const [condicaofisica, setCnpj] = useState('');
    const [emprestado, setEndereco] = useState('');    
    const [ideditora, setNomeEditora] = useState('');
    const [idcategoria, setCnpj] = useState('');

    const voltar = () => {
        navegacao('/listaeditora');
    };

    const excluir = async () => {
        await axios.delete(`http://localhost:6969/editora/${id}`);
        voltar();
    };
    
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:6969/editora/${id}`);
        setNomeEditora(data.nomeeditora);
        setCnpj(data.cnpj);
        setEndereco(data.endereco);
    };

    const alterar = async () => {
        let body = {
            "nomeeditora": nomeeditora,
            "cnpj": cnpj,
            "endereco": endereco
        };

        await axios.put(`http://localhost:6969/editora/${id}`, body);
        voltar();
    };

    const inserir = async () => {
        let body = {
            "nomeeditora": nomeeditora,
            "cnpj": cnpj,
            "endereco": endereco
        };

        await axios.post(`http://localhost:6969/editora`, body);
        voltar();
    };

    const salvar = async () => {
        if (id){
            alterar();
        }
        else {
            inserir();
        }
    }
    
    useEffect(() => {
        if (id){
            selecionar();
        }
    }, []);
    
    return(
        <div>
            <TituloCadastro id={id} titulo="editora"/>
           <form>
                {id && (
                <div className="mb-3">
                    <label className="form-label">
                    Código
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={id}
                    />
                </div>
                )};
                <div className="mb-3">
                    <label className="form-label">
                    Nome da Editora
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={nomeeditora}
                    onChange={(event) => setNomeEditora(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    CNPJ
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={cnpj}
                    onChange={(event) => setCnpj(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Endereço
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={endereco}
                    onChange={(event) => setEndereco(event.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => salvar()}>
                    Salvar
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => voltar()}>
                    Cancelar
                </button>
                { id && (
                    <button type="button" className="btn btn-danger" onClick={() => excluir()}>
                        Excluir
                    </button>
                )}
            </form>
        </div>
    )
};