import axios from "axios";
import { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import { Link } from "react-router-dom";

function ArticlesPage() {

  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [filter]);
  
  useEffect(() => {
    getTags();
  }, []);

  const loadData = () => {

    let url = `http://localhost:3001/posts`;
    if (filter !== "all") {
      url+= `?tag=${filter}`;
    }
  
    axios.get(url).then((resp) => {      
      setArticles(resp.data.ricette);
    });
  };

  const getTags = () => {
    axios.get(`http://localhost:3001/tags`).then((resp) => {
      setTags(resp.data);
    });
  };

  // al click su Elimina, cancellare articolo stampato
  // badElement = elemento corrente da cancellare
  const removeElem = (badElement) => {
    
    axios.delete(`http://localhost:3001/posts/${badElement}`).then((resp) => {
      
      // creare nuovo array e impostarlo come predefinito
      const newArray = articles.filter((curArticle) => curArticle.id !== badElement);

      setArticles(newArray);
    });        
  };

  return (
    <main>
      <div className="container">
        <section>
          <div className="row2">
            <select name="tag" id="" value={filter} onChange={(event) => setFilter(event.target.value)}>
              <option value="all">Tutte</option>
                {tags.map((curTag, index) => <option key={index} value={curTag}>{curTag}</option>)}
            </select>
            <div>
              <Link className="add" to="/posts/create">Aggiungi Articolo</Link>
            </div>
          </div>
        </section>

        <h2>Lista degli articoli</h2>
        
        <div className="added-articles">
          <h3>Articoli aggiunti</h3>

          {/* stampare articoli */}
          {articles.length > 0 ? (
            <div className="list-articles">
              {articles.map((curArticle) => (
                  <AppCard 
                  key={curArticle.id}
                  article={curArticle}
                  onCancel={() => removeElem(curArticle.id)}
                />
              ))}
            </div>
          ) : (
            <p>Non è presente nessun articolo</p>
          )}
        </div>
      </div>
    </main>
  )
};

export default ArticlesPage;