import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [arrPosts, setArrPosts] = useState([]);

  useEffect (() => {
    const requisiçãoAPI = async () => {
      const respostaAPI = await axios.get('https://overfast-api.tekrop.fr/heroes?locale=pt-br');

      setArrPosts(respostaAPI.data);

    };

    requisiçãoAPI();
  }, []);

return (
    <main class="min-h-screen bg-zinc-100 text-zinc-900 font-sans p-6 md:p-12">
      <section class="mb-8 max-w-7xl mx-auto">
        <h1 class="text-3x1 font-black font-mono tracking-wider">HEROS OVERWATCH</h1>
        <form class="flex flex-col md:flex-row gap-3">
          <input type="text"
            placeholder="BUSCAR HERÓI PELO NOME..."
            class="w-full border-2 bg-white p-3 font-mono text-sm font-bold"/>
          <button
            type="button"
            class=" bg-zinc-950 text-white font-mono text-sm font-bold px-6 py-3 hover:bg-white hover:text-zinc-900 transition-colors">
            PESQUISAR
          </button>
        </form>
      </section>

      <section class="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {arrPosts.map((post, index) => (
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
              <bottom
                type="button"
                class="inline-block border-2 px-3 py-1 text-xs font-mono font-bold uppercase hover:bg-orange-500 transition-colors">
                {post.role}
              </bottom>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;