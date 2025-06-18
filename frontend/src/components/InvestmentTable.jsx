function InvestmentTable({ investments, onDelete, onEdit }) {
  return (
    <div>
      <h2>Lista de Investimentos</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((inv, index) => (
            <tr key={index}>
              <td>{inv.nome}</td>
              <td>{inv.tipo}</td>
              <td>R$ {inv.valor}</td>
              <td>{inv.data}</td>
              <td>
                <button
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => onEdit(index)}
                >
                  Editar
                </button>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => onDelete(index)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvestmentTable;
