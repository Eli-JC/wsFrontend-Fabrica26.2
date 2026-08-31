import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [arrPosts, setArrPosts] = useState([]);
  const [arrPostFiltrado, setArrPostFiltrado] = useState(8)

  useEffect (() => {
    const requisiçãoAPI = async () => {
      const respostaAPI = await axios.get('https://overfast-api.tekrop.fr/heroes?locale=pt-br');

      setArrPosts(respostaAPI.data);

    };

    requisiçãoAPI();
  }, []);

  const mostrarMais = () => {
    setArrPostFiltrado((prev) => prev +8);
  };

  const mostrarMenos = () => {
    setArrPostFiltrado((prev) => Math.max (prev -8,8));
  };

  const mostrarSubRole = (role) => {
    const subRole = arrPosts.filter((post) => post.role === role);
    setArrPosts(subRole);
  }

return (
    <main class="min-h-screen bg-zinc-100 text-zinc-900 font-sans p-6 md:p-12">
      <section class="mb-8 max-w-7xl mx-auto">
        <h1 class="text-xl font-black font-mono tracking-wider text-center p-4">HEROS OVERWATCH</h1>
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

      <section class="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {arrPosts.slice(0,arrPostFiltrado).map((post) => (
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
        {/* Botão MOSTRAR MENOS: Só aparece quando houver mais de 8 heróis visíveis */}
        {arrPostFiltrado > 8 && (
          <button
            type="button"
            onClick={mostrarMenos}
            className="border-2 border-zinc-900 bg-white text-zinc-900 font-mono text-sm font-bold uppercase px-6 py-3 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            -
          </button>
        )}

        {/* Botão MOSTRAR MAIS: Só aparece se ainda houver heróis na API para carregar */}
        {arrPostFiltrado < arrPosts.length && (
          <button
            type="button"
            onClick={mostrarMais}
            className="border-2 border-zinc-900 bg-zinc-900 text-white font-mono text-sm font-bold uppercase px-6 py-3 hover:bg-white hover:text-zinc-900 transition-colors"
          >
            +
          </button>
        )}
      </div>
    </main>
  );
}

export default App;