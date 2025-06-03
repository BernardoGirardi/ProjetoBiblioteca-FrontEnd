export default function TituloCadastro(props){
    
    const titulo = (props.id) ? `Alterando` : `Inserindo`;
    
    return(
        <div>
            <h1>{titulo} {props.titulo}</h1>
        </div>
    );
};