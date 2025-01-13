import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    immagine: "",
    titolo: "",
    contenuto: "",
    tags: [],
};

function ArticleCreatorPage() {

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate()

    // al click su Submit, aggiornare array creando copia e aggiungendo nuovo articolo
    const handleForm = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:3001/posts`, formData)
            .then((resp) => {
                
                // quando finisce riporta alla pagina degli articoli
                navigate('/posts');
            });
    };

    const handleInputOnChange = (event) => {

        // identificare la chiave da cambiare
        const keyToChange = event.target.name;

        // impostare nuovo valore e ricreare oggetto
        let newValue;

        if (event.target.type === "checkbox") {
            newValue = event.target.checked;
        } else {
            newValue = event.target.value;
        };

        const newData = {
            ...formData,
            [keyToChange]: newValue
        };

        // aggiorno l'oggetto 
        setFormData(newData);
    };

    return (
        <>
            <div className="container">
                {/* riportare sul form con onSubmit la funzione per l'evento Submit */}
                <form action="" className="row" onSubmit={handleForm}>
                    <h3>Aggiungi un articolo</h3>
                    <div className="row">

                        {/* input per aggiungere nuovo articolo con onChange */}
                        <div>
                            <label className="text-label" htmlFor="artImage">Immagine</label>
                            <input
                                className="text-input"
                                type="text"
                                placeholder="Incolla il link dell'immagine dell'articolo"
                                name="immagine"
                                id="artImage"
                                value={formData.immagine}
                                onChange={handleInputOnChange}
                            />
                        </div>

                        <div>
                            <label className="text-label" htmlFor="artTitle">Titolo</label>
                            <input
                                className="text-input"
                                type="text"
                                placeholder="Scrivi il titolo dell'articolo"
                                name="titolo"
                                id="artTitle"
                                value={formData.titolo}
                                onChange={handleInputOnChange}
                            />
                        </div>

                        <div>
                            <label className="text-label" htmlFor="artContent">Descrizione</label>
                            <input
                                className="text-input"
                                type="text"
                                placeholder="Scrivi il contenuto dell'articolo"
                                name="contenuto"
                                id="artContent"
                                value={formData.contenuto}
                                onChange={handleInputOnChange}
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn-submit">Aggiungi</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ArticleCreatorPage;