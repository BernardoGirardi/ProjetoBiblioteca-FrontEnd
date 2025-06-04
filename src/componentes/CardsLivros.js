export default function CardsLivros(props){
    return(
        <div>
          <div>
            <div className="row"></div>      
             <div className="col col-md-4 col-lg-4">
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img
                        src="./assets/book.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                        <p className="card-text">{props.publicacao}</p>
                        <p className="card-text">
                        <small className="text-muted">{props.paginas}</small>
                        </p>
                        <p className="card-text">
                        <small className="text-muted">{props.nomeeditora}</small>
                        <small className="text-muted">{props.edicao}</small>
                        </p>
                        <a href="#" className="btn btn-primary">
                        Emprestar
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
};