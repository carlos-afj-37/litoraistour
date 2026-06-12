function Cadastro() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fa",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0 5px 20px rgba(0,0,0,.1)",
        }}
      >
        <h2>Criar Conta</h2>

        <input
          type="text"
          placeholder="Nome Completo"
          style={{ width: "100%", padding: "12px", marginTop: "15px" }}
        />

        <input
          type="email"
          placeholder="E-mail"
          style={{ width: "100%", padding: "12px", marginTop: "10px" }}
        />

        <input
          type="password"
          placeholder="Senha"
          style={{ width: "100%", padding: "12px", marginTop: "10px" }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#0099ff",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Criar Conta
        </button>
      </div>
    </div>
  );
}

export default Cadastro;