function Login() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f7fa"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        width: "400px",
        boxShadow: "0 5px 20px rgba(0,0,0,.1)"
      }}>
        <h2>Entrar</h2>

        <input
          type="email"
          placeholder="Seu e-mail"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px"
          }}
        />

        <input
          type="password"
          placeholder="Sua senha"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px"
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#0099ff",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          Entrar
        </button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
  Não possui conta?
</p>

<a
  href="/litoraistour/cadastro"
  style={{
    display: "block",
    textAlign: "center",
    marginTop: "10px",
    color: "#0099ff",
    fontWeight: "bold",
  }}
>
  Criar Conta
</a>
      </div>
    </div>
  );
}

export default Login;