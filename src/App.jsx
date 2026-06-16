import "./index.css";
import { Link } from "react-router-dom";

function App() {
const tours = [
{
nome: "Jericoacoara Premium",
preco: "R$ 189,90",
local: "Jericoacoara - CE",
nota: "4.9",
imagem:
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
},
{
nome: "Canoa Quebrada",
preco: "R$ 149,90",
local: "Aracati - CE",
nota: "4.8",
imagem:
"https://images.unsplash.com/photo-1519046904884-53103b34b206",
},
{
nome: "Lagoinha",
preco: "R$ 139,90",
local: "Paraipaba - CE",
nota: "4.7",
imagem:
"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
},
];

const destinos = [
"Jericoacoara",
"Canoa Quebrada",
"Beach Park",
"Lagoinha",
"Morro Branco",
"Paracuru",
];

return (
<> <header className="navbar"> 
  
  <div className="logo">
  🌴 Litorais Tour
</div>


    <nav>
      <a href="#">Início</a>
      <a href="#">Passeios</a>
      <a href="#">Destinos</a>
      <a href="#">Sobre</a>
      <a href="#">Contato</a>

      <a href="/litoraistour/admin">
     Painel Admin
      </a>

    </nav>

    <div className="buttons">
      <Link to="/login">
  <button className="login-btn">
    Entrar
  </button>
</Link>
      <button className="reserve-btn">Reservar Agora</button>
    </div>
  </header>

  <section className="hero">
    <div className="hero-content">
      <h1>Descubra os Melhores Passeios do Nordeste</h1>

      <p>
        Viva experiências inesquecíveis nos destinos mais procurados do
        litoral brasileiro.
      </p>

      <button className="cta">
        Explorar Passeios
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
            <span>⭐ {tour.nota}</span>

            <h3>{tour.nome}</h3>

            <p>{tour.local}</p>

            <h4>{tour.preco}</h4>

            <button>Reservar Agora</button>
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="popular">
    <h2>Destinos Mais Procurados</h2>

    <div className="popular-grid">
      {destinos.map((item) => (
        <div key={item} className="popular-card">
          {item}
        </div>
      ))}
    </div>
  </section>

  <section className="beneficios">
    <h2>Por Que Escolher a Litorais Tour?</h2>

    <div className="beneficios-grid">
      <div>✔ Guias Especializados</div>
      <div>✔ Atendimento Premium</div>
      <div>✔ Passeios Seguros</div>
      <div>✔ Melhor Custo Benefício</div>
    </div>
  </section>

  <section className="depoimentos">
    <h2>O Que Nossos Clientes Dizem</h2>

    <div className="depoimentos-grid">
      <div className="depoimento">
        ⭐⭐⭐⭐⭐
        <p>
          Passeio incrível. Atendimento excelente e organização perfeita.
        </p>
        <strong>Maria Silva</strong>
      </div>

      <div className="depoimento">
        ⭐⭐⭐⭐⭐
        <p>
          Melhor experiência de viagem que já tive no Ceará.
        </p>
        <strong>João Pereira</strong>
      </div>

      <div className="depoimento">
        ⭐⭐⭐⭐⭐
        <p>
          Equipe muito atenciosa. Voltarei a contratar.
        </p>
        <strong>Ana Costa</strong>
      </div>
    </div>
  </section>

  

  <section className="processo">
    <h2>Como Funciona</h2>

    <div className="steps">
      <div>1️⃣ Escolha o Passeio</div>
      <div>2️⃣ Faça sua Reserva</div>
      <div>3️⃣ Receba a Confirmação</div>
      <div>4️⃣ Aproveite a Experiência</div>
    </div>
  </section>

  <footer>

<h3>Litorais Tour</h3>

<p>Fortaleza - Ceará</p>

<div className="social">

<a href="#">Instagram</a>

<a href="#">Facebook</a>

<a href="#">TikTok</a>

<a href="#">YouTube</a>

</div>

<p>
© 2026 Litorais Tour
</p>

</footer>

 
<a
  href="https://wa.me/5581994831601?text=Olá!%20Tenho%20interesse%20nos%20passeios%20da%20Litorais%20Tour."
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
  />
</a>

</>
);
}

export default App;
