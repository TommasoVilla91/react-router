import { Link } from "react-router-dom";

function AppCard({article, onCancel}) {


    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={`http://localhost:3001/${article.immagine}`} alt={article.titolo} />
                </div>
                <div className="card-text">
                    <h3>{article.titolo}</h3>
                    <p>{article.contenuto}</p>
                    <div className="list-tags">
                        {article.tags.map((curArticle, curIndex) => (
                            <span className="tag" key={curIndex}>{curArticle}</span>
                        ))}
                    </div>
                    <div className="row2">
                        {/* tasto Elimina in cui nell'onClick metto la funzione removeElem */}
                        <button className="bnt-erase" onClick={onCancel}>Elimina</button>
                        <Link className="info" to={`/posts/${article.id}`}>Info</Link>
                    </div>                    
                </div>                
            </div>
        </>
    );
};

export default AppCard;