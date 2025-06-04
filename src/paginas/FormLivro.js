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
    const [condicaofisica, setCondicaofisica] = useState('');
    const [emprestado, setEmprestado] = useState('');    
    const [ideditora, setIdeditora] = useState('');
    const [idcategoria, setIdcategoria] = useState('');

    const voltar = () => {
        navegacao('/listalivro');
    };

    const excluir = async () => {
        await axios.delete(`http://localhost:6969/livro/${id}`);
        voltar();
    };
    
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:6969/livro/${id}`);
        setTitulo(data.titulo);
        setEdicao(data.edicao);
        setPaginas(data.paginas);
        setPublicacao(data.publicacao);
        setFoto(data.foto);
        setLocalizacao(data.localizacao);
        setResumo(data.resumo);
        setAtivo(data.ativo);
        setCondicaofisica(data.condicaofisica);
        setEmprestado(data.emprestado);
        setIdeditora(data.ideditora);
        setIdcategoria(data.idcategoria);
    };

    const alterar = async () => {
        let body = {
        "titulo": titulo,
        "edicao": edicao,
        "paginas": paginas,
        "publicacao": publicacao,
        "foto": foto,
        "localizacao": localizacao,
        "resumo": resumo,
        "ativo": ativo,
        "condicaofisica": condicaofisica,
        "emprestado": emprestado,
        "ideditora": ideditora,
        "idcategoria": idcategoria 
        };

        await axios.put(`http://localhost:6969/livro/${id}`, body);
        voltar();
    };

    const inserir = async () => {
        let body = {
        "titulo": titulo,
        "edicao": edicao,
        "paginas": paginas,
        "publicacao": publicacao,
        "foto": foto,
        "localizacao": localizacao,
        "resumo": resumo,
        "ativo": ativo,
        "condicaofisica": condicaofisica,
        "emprestado": emprestado,
        "ideditora": ideditora,
        "idcategoria": idcategoria
        };

        await axios.post(`http://localhost:6969/livro`, body);
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
            <TituloCadastro id={id} titulo="livro"/>
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
                )}
                <div className="mb-3">
                    <label className="form-label">
                    Titulo
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Edição
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={edicao}
                    onChange={(event) => setEdicao(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Páginas
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={paginas}
                    onChange={(event) => setPaginas(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Publicação
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={publicacao}
                    onChange={(event) => setPublicacao(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Foto (Url da foto)
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={foto}
                    onChange={(event) => setFoto(event.target.value)}
                    />
                <img src={foto} className="img-thumbnail" style={{width: '250px'}}></img>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Localização
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={localizacao}
                    onChange={(event) => setLocalizacao(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Resumo
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={resumo}
                    onChange={(event) => setResumo(event.target.value)}
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
                <div className="mb-3">
                    <label className="form-label">
                    Condição física
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={condicaofisica}
                    onChange={(event) => setCondicaofisica(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                    Emprestado
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={emprestado}
                    onChange={(event) => setEmprestado(event.target.value)}
                    />
                </div>
                {ideditora && (
                <div className="mb-3">
                    <label className="form-label">
                    ID Editora
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={ideditora}
                    onChange={(event) => setIdeditora(event.target.value)}
                    />
                </div>
                )}
                {idcategoria && (
                <div className="mb-3">
                    <label className="form-label">
                    ID Categoria
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    value={idcategoria}
                    onChange={(event) => setIdcategoria(event.target.value)}
                    />
                </div>
                )}
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