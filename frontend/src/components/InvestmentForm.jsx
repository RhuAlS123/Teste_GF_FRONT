function InvestmentForm({ formData, setFormData, handleSubmit, editingIndex }) {
  const today = new Date().toISOString().split("T")[0]; // data de hoje no formato YYYY-MM-DD

  return (
    <div>
      <h2>{editingIndex !== null ? "Editar Investimento" : "Novo Investimento"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Tipo"
          value={formData.tipo}
          onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          min="1"
          value={formData.valor}
          onChange={(e) => setFormData({ ...formData, valor: Number(e.target.value) })}
          required
        />
        <input
          type="date"
          value={formData.data}
          onChange={(e) => setFormData({ ...formData, data: e.target.value })}
          required
          max={today} // ← impede datas futuras
        />
        <button type="submit">
          {editingIndex !== null ? "Salvar Edição" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default InvestmentForm;
