import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormEmprestimo(){
    
    const navegacao =  useNavigate();
    const { id } = useParams();
    const [idlivro, setIdlivro] = useState('');
    const [idusuario, setIdusuario] = useState('');
    const [emprestimo, setEmprestimo] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [devolucao, setDevolucao] = useState('');
    const [observacao, setObservacao] = useState('');
    const [ativo, setAtivo] = useState('');
        const voltar = () => {
        navegacao('/listaemprestimo');
    };

    const devolver = async () => {
        await axios.put(`http://localhost:6969/devolver/${id}`);
        voltar();
    };
    
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:6969/emprestimo/${id}`);
        setIdlivro(data.idlivro);
        setIdusuario(data.idusuario);
        setEmprestimo(data.emprestimo);
        setVencimento(data.vencimento);
        setDevolucao(data.devolucao);
        setObservacao(data.observacao);
        setAtivo(data.ativo);
    };

    const alterar = async () => {
        let body = {
            "idlivro": idlivro,
            "idusuario": idusuario,
            "emprestimo": emprestimo,
            "vencimento": vencimento,
            "devolucao": devolucao,
            "observacao": observacao,
            "ativo": ativo
        };

        await axios.put(`http://localhost:6969/emprestimo/${id}`, body);
        voltar();
    };

    const inserir = async () => {
        let body = {
           "idlivro": idlivro,
            "idusuario": idusuario,
            "emprestimo": emprestimo,
            "vencimento": vencimento,
            "devolucao": devolucao,
            "observacao": observacao,
            "ativo": ativo
        };

        await axios.post(`http://localhost:6969/emprestimo`, body);
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
            <TituloCadastro id={id} titulo="emprestimo"/>
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
                    ID Livro
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={idlivro}
                    onChange={(event) => setIdlivro(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    ID Usuário
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={idusuario}
                    onChange={(event) => setIdusuario(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Empréstimo
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={emprestimo}
                    onChange={(event) => setEmprestimo(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Vencimento
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    value={vencimento}
                    onChange={(event) => setVencimento(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Devolução
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={devolucao}
                    onChange={(event) => setDevolucao(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Observção
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={observacao}
                    onChange={(event) => setObservacao(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Ativo
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={ativo}
                    onChange={(event) => setAtivo(event.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => salvar()}>
                    Salvar
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => voltar()}>
                    Cancelar
                </button>
                { id && (
                    <button type="button" className="btn btn-danger" onClick={() => devolver()}>
                        Devolver
                    </button>
                )}
            </form>
        </div>
    )
};