function Admin() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "40px",
      }}
    >
      <h1>Painel Administrativo</h1>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          marginTop: "20px",
          maxWidth: "700px",
        }}
      >
        <h2>Cadastrar Passeio</h2>

        <input
          type="text"
          placeholder="Nome do Passeio"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Local"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Preço"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <input
          type="text"
          placeholder="URL da Imagem"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
          }}
        />

        <button
          style={{
            marginTop: "20px",
            background: "#0099ff",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Salvar Passeio
        </button>
      </div>
    </div>
  );
}

export default Admin;