import './App.css'

function App() {

  return (
    <>
      <header className='encabezado'>
        {/* <ul className='listado'>
          <li className='lista'><a href="">Inicio</a></li>
          <li className='lista'><a href="habilidades">Habilidades</a></li>
          <li className='lista'><a href="proyectos">Proyectos</a></li>
          <li className='lista'><a href="">Contacto</a></li>
        </ul> */}
      </header>
      <article className='sobre_mi'>
        <div className='contenedor_foto'>
          <img className='foto' src="image/foto.jpeg" alt="" />
        </div>
        <h1 className='titulo'>soy Camilo Cuvides</h1>
      </article>
      <article className='contenedor'>
        <div className='redactacion'>
          <p>Desarrollador FULL-STACK con experiencia en Node.js, JavaScript, HTML, CSS y React. Comprometido y sociable, me destaco por aprender y mejorar constantemente. Facilito la comunicación efectiva en equipo, siendo proactivo en la búsqueda de soluciones eficientes. Habilidades blandas incluyen buena comunicación, respeto, adaptación al cambio, gestión del tiempo y organización.</p>
        </div>
      </article>
      <div className='contenedor_lincks'>
        <a href="mailto:cuvidesortegaandrescamilo@gmail.com" target="_blank">
          <img className='items' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASZJREFUSEvt1cErBHEUwPHP3jlQSspNKf4JRzlLDlKKIgfl7LjlphxEUUoOkrMc/ROUs5JSHLizTzOaxuzOrmkum3f8zXvv+953pt801ByNmvvrL8A8mpisqO0BO7iKPllFd5iq2Dwtv8d0HvCZPD3Exh9B2drv4bMbpIA4m8UpRrsEPWMFN8j2KQQM4gNDLcARFkogl1jHGwbwnuS33eARy7hNEhdxgOEc6BWbuEjOZ3CG8TJA2ucE28lEoSqUhbqIUBFKQk1svIfV3ABtN8jmPWEN18lhqIgIdRFzOMZYgcauAGndecvxFkJLROjax1KH99MTIPq8ZDSEvpGSl98zoMsv9iftH1Bq7Jei2i+7uK53MVE6W+eEttd1xb7F5f31y6xF0RedUDYZkAb/FgAAAABJRU5ErkJggg==" />
        </a>
        <a href="https://github.com/" target="_blank">
          <img className='items' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC" />
        </a>
        <a href="https://www.linkedin.com/in/andres-camilo-cuvides-ortega-999a45295/" target="_blank">
          <img className='items' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASxJREFUSEvl1TsvBFEYh/HfCp2Igso3oNXoKFQKIa6hk/AtJD6GS4m4h0InLo1G7xPoRKUl7Elem81erZndxlQzOe88z5z/Oe+cgjZfhTbzdVxwh/GMs7rHxA+jcgZfGeFV3EaC66ie+oO0xK0nOMBqgA+x3KKkqWAX6wHdw1regnfsowsr6M1b8IrngA5jsLgzHuJ5CP3YxgdGMFfxAU0jOsZSvHSERUo9M4MnvJRBN4vjW2XPTQUnAU3vJNlCxFVvG3fjDX0hySTowRVGQ5waK12PGMtDkLr0NkA72Ij7S0znIUhrcBGgWlGmoaYRncb0U3GCzCPl/IlZnIfgLMbK6/6JoFGjDURzpShq1f0qohb/DFXldRc5jwPnBpM/yo4fmVmjqZ9V7uQAfgNR+VIZag7oTQAAAABJRU5ErkJggg==" />
        </a>
        <button href="" type="button"><a href="https://drive.google.com/file/d/1db4N8iXNkrJRwhzusqHdOxTTmdGH3Fbw/view?usp=sharing" target="_blank">curriculum</a></button>

      </div>



      <article id='habilidades' className='contenedor_habilidades'>
        <h2>Habilidades tecnicas</h2>
        <div className='contenedor2'>
          <div className='contenedor_iconos'>
            <img className='image_habilidades' src="image/html.png" alt="" />
            <img className='image_habilidades' src="image/css.png" alt="" />
            <img className='image_habilidades' src="image/js.png" alt="" />
            <img className='image_habilidades' src="image/react.png" alt="" />
            <img className='image_habilidades' src="image/node.png" alt="" />
          </div>
        </div>
        <h2>Habilidades  blandas</h2>
        <div className='contenedor2'>
          <div className='contenedor_iconos'>
            <ul className='conotenedor_habilidades'>
              <li className='habilidades_blandas'>Buena comunicación</li>
              <li className='habilidades_blandas'>Gestión del tiempo y organización</li>
              <li className='habilidades_blandas'>Respetuoso</li>
              <li className='habilidades_blandas'>Adaptación al cambio</li>
              <li className='habilidades_blandas'>Comunicación asertiva</li>
            </ul>
          </div>
        </div>
      </article>
      <h2>Proyectos</h2>
      <article id='proyectos' className='contenedor_proyectos'>
        <div className='proyectos'>
          <section className='cartas'>
            <div className='contenedor_img_proyecto'>
              <img className='image_proyecto' src="image/ecommerce.png" alt="" />
            </div>
            <p>
              Se ha llevado a cabo el desarrollo de un proyecto que incluye la gestión de una API para la creación de un carrito de compras integral. Este carrito de compras, diseñado de manera completa, proporciona una experiencia detallada y eficiente para los usuarios. Desde la integración y manejo de la API hasta el diseño final, el proyecto abarca todo el proceso de creación, asegurando un sistema funcional y estéticamente atractivo para la experiencia de compra.</p>
            <div className='contenedor_botones'>
              <button type="button"><a href="https://academlo-store.onrender.com" target="_blank">Demo</a></button>
              <button type="button"><a href="https://github.com/AlanL55/Academlo_Store" target="_blank">Github</a></button>
            </div>
          </section>
          <section className='cartas'>
            <div className='contenedor_img_proyecto'>
              <img className='image_proyecto' src="image/pokemon.png" alt="" />
            </div>
            <p>
              Se ha creado una aplicación con React que permite interactuar con todos los Pokémon, utilizando la API oficial de Pokémon. Se implementaron peticiones asincrónicas para un despliegue eficiente de la información. La aplicación brinda una experiencia dinámica al explorar la variedad de Pokémon, demostrando un compromiso con la eficacia y la modernidad en el desarrollo.</p>
            <div className='contenedor_botones'>
              <button type="button"><a href="https://pokemodex.onrender.com" target="_blank">Demo</a></button>
              <button type="button"><a href="https://github.com/camiloCuvides/pokemonDex.git" target="_blank">Github</a></button>
            </div>
          </section>
          <section className='cartas'>
            <div className='contenedor_img_proyecto'>
              <img className='image_proyecto' src="image/rick_and_morty.webp" alt="" />
            </div>
            <p>
              Se ha desarrollado una aplicación con React para explorar los diversos universos de Rick and Morty. Este proyecto, construido con React Js Vite, utiliza tecnologías como Redux, React Router, Hooks y Custom Hooks para una experiencia de usuario mejorada. Las peticiones se realizan eficientemente mediante axios, asegurando un acceso fluido a la información sobre los universos de Rick and Morty.</p>
            <div className='contenedor_botones'>
              <button type="button"><a href="https://entregable-3-5uwk.onrender.com" target="_blank">Demo</a></button>
              <button type="button"><a href="https://github.com/camiloCuvides/entregable-3.git" target="_blank">Github</a></button>
            </div>
          </section>
        </div>
      </article>
      <footer className='contenedor_pie'>
        <div className='contacto'>
          <img className='img_contacto' src="image/email.png" alt="" />
          <a className='letra_pie' href="mailto:cuvidesortegaandrescamilo@gmail.com" target="_blank">cuvidesortegaandrescamilo@gmail.com</a>
        </div>
        <div className='contacto'>
          <img className='img_contacto' src="image/linke.png" alt="" />
          <a className='letra_pie' href="http://www.linkedin.com/in/andres-camilo-cuvides-ortega-999a45295" target="_blank">Camilo Cuvides/linkedin</a>
        </div>
        <div className='contacto'>
          <img className='img_contacto' src="image/whastapp.png" />
          <a className='letra_pie' href="" target="_blank">+57 3182213870</a>
        </div>
      </footer>
    </>

  )
}

export default App
