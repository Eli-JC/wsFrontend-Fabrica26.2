import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [arrPosts, setArrPosts] = useState([]);

  useEffect(() => {
    const requisiçãoAPI = async () => {
      const respostaAPI = await axios.get(
        "https://overfast-api.tekrop.fr/heroes?locale=pt-br"
      );

      setArrPosts(respostaAPI.data);
    };

    requisiçãoAPI();
  }, []);

  return (
    <main>
      <section>
        <form>
          <input type="text" placeholder="BUSCAR HERÓI PELO NOME..." />
          <button type="button">Buscar</button>
        </form>
      </section>

      <h1>Herois do Overwatch</h1>

      <section>
        {arrPosts.map((post) => (
          <article key={post.key}>
            <div>
              <div>
                <img src={post.portrait} alt={post.name} />
              </div>

              <div>
                <h2>{post.name}</h2>
              </div>
            </div>

            <div>
              <span>{post.role}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;