import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormUsuario(){
    
    const navegacao =  useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
        const voltar = () => {
        navegacao('/listausuario');
    };

    const excluir = async () => {
        await axios.delete(`http://localhost:6969/usuario/${id}`);
        voltar();
    };
    
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:6969/usuario/${id}`);
        setNome(data.nome);
        setCpf(data.cpf);
        setEmail(data.email);
        setSenha(data.senha);
        setNascimento(data.nascimento);
        setTelefone(data.telefone);
    };

    const alterar = async () => {
        let body = {
            "nome": nome,
            "cpf": cpf,
            "email": email,
            "senha": senha,
            "nascimento": nascimento,
            "telefone": telefone
        };

        await axios.put(`http://localhost:6969/usuario/${id}`, body);
        voltar();
    };

    const inserir = async () => {
        let body = {
           "nome": nome,
            "cpf": cpf,
            "email": email,
            "senha": senha,
            "nascimento": nascimento,
            "telefone": telefone
        };

        await axios.post(`http://localhost:6969/usuario`, body);
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
            <TituloCadastro id={id} titulo="usuario"/>
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
                    Nome
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    CPF
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Email
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Senha
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Nascimento
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={nascimento}
                    onChange={(event) => setNascimento(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Telefone
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
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