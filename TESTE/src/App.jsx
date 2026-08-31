import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [arrPost, setarrPost] = useState([]);
  const [arrPostsAparentes, setarrPostsAparentes] = useState(8);
  const [busca, setBusca] = useState("");

  useEffect (() => {
    const requisiçãoAPI = async () => {
      const resarrPostaAPI = await axios.get('https://overfast-api.tekrop.fr/heroes?locale=pt-br');

      setarrPost(resarrPostaAPI.data);
    };

    requisiçãoAPI();
  }, []);

  const mostrarMais = () => {
    setarrPostsAparentes((prev) => prev +8);
  };

  const mostrarMenos = () => {
    setarrPostsAparentes((prev) => Math.max (prev -8,8));
  };

  const filtroHeroi = arrPost.filter((post) =>
     post.name.toLowerCase().includes(busca.toLowerCase())
  ); 

return (
    <main class="min-h-screen bg-zinc-100 text-zinc-900 font-sans p-6 md:p-12">
      <section class="mb-8 max-w-7xl mx-auto">
        <h1 class="text-xl font-black font-mono tracking-wider text-center p-4">HEROS OVERWATCH</h1>
        <form class="flex flex-col md:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input type="text"
            placeholder="BUSCAR HERÓI POR NOME..."
            value={busca}
            onChange={(e) => {
              setBusca(e.target.value);
              setarrPostsAparentes(8); 
            }}
            class="w-full border-2 bg-white p-3 font-mono text-sm font-bold"/>
          <button
            type="button"
            class=" bg-zinc-950 text-white font-mono text-sm font-bold px-6 py-3 hover:bg-white hover:text-zinc-900 transition-colors">
            PESQUISAR
          </button>
        </form>
      </section>

      <section class="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {filtroHeroi.slice(0,arrPostsAparentes).map((post) => (
          <article key={post.key} class="border-3 bg-white flex flex-col justify-between shadow-lg overflow-hidden">
            <div>
              <div class="border-b-2 h-flex w-flex">
                <img
                  src={post.portrait}
                  alt={post.name}
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="p-5">
                <h2 class="text-xl font-black uppercase tracking-wide font-mono">
                  {post.name}
                </h2>
              </div>
            </div>
            <div class="p-5 pt-0">
              <button
                type="button"
                class="inline-block border-2 px-3 py-1 text-xs font-mono font-bold uppercase hover:bg-orange-500 transition-colors">
                {post.role}
              </button>
            </div>
          </article>
        ))}
      </section>
      <div class="max-w-7xl mx-auto mt-8 flex justify-center gap-4">
        {arrPostsAparentes > 8 && (
          <button
            type="button"
            onClick={mostrarMenos}
            className="border-2 bg-white font-mono text-sm font-bold uppercase px-6 py-3 hover:bg-orange-500 hover:text-black transition-colors"
          >
            -
          </button>
        )}

        {arrPostsAparentes < filtroHeroi.length && (
          <button
            type="button"
            onClick={mostrarMais}
            className="border-2 bg-zinc-900 text-white font-mono text-sm font-bold uppercase px-6 py-3 hover:bg-orange-500 hover:text-black transition-colors"
          >
            +
          </button>
        )}
      </div>
    </main>
  );
}

export default App;