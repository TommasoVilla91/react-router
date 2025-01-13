import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArticleDetailsPage() {

    const [article, setArticles] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`).then((resp) => {            
            setArticles(resp.data);
        });
    }, [id]);

    return (
        <>
            {article && (
                <div className="container">
                    <h1>{article.titolo}</h1>
                    <img className="img-det" src={`http://localhost:3001/${article.immagine}`} />
                    <p>{article.contenuto}</p>
                </div>
            )}
        </>
    );
};

export default ArticleDetailsPage;