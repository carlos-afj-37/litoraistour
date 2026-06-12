import "./index.css";

function App() {
  const tours = [
    {
      nome: "Jericoacoara Premium",
      preco: "R$ 189,90",
      imagem:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      nome: "Canoa Quebrada",
      preco: "R$ 149,90",
      imagem:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    },
    {
      nome: "Lagoinha",
      preco: "R$ 139,90",
      imagem:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
  ];

  return (
    <>
      <header className="navbar">
        <h2>Litorais Tour</h2>

        <nav>
          <a href="#">Início</a>
          <a href="#">Passeios</a>
          <a href="#">Destinos</a>
          <a href="#">Contato</a>
          <button>Entrar</button>
        </nav>
      </header>

      <section className="hero">
        <div className="overlay">
          <h1>Descubra os Melhores Passeios do Nordeste</h1>

          <p>
            Viva experiências inesquecíveis nos destinos mais procurados do
            Brasil.
          </p>

          <button className="cta">
            Reservar Agora
          </button>
        </div>
      </section>

      <section className="destinos">
        <h2>Passeios em Destaque</h2>

        <div className="cards">
          {tours.map((tour) => (
            <div className="card" key={tour.nome}>
              <img src={tour.imagem} alt={tour.nome} />

              <div className="card-content">
                <h3>{tour.nome}</h3>

                <p>{tour.preco}</p>

                <button>Reservar</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="beneficios">
        <h2>Por que escolher a Litorais Tour?</h2>

        <div className="beneficios-grid">
          <div>✔ Guias Especializados</div>
          <div>✔ Passeios Seguros</div>
          <div>✔ Pagamento Facilitado</div>
          <div>✔ Atendimento Premium</div>
        </div>
      </section>

      <footer>
        <h3>Litorais Tour</h3>

        <p>WhatsApp: (85) 99999-9999</p>

        <p>Instagram: @litoraistour</p>

        <p>© 2026 Todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default App;