import { useParams } from "react-router-dom";

function ArticleDetailsPage() {

    const {id} = useParams();

    return (
        <>
            <h1>Dettagli articolo {id}</h1>
        </>
    )
}

export default ArticleDetailsPage;