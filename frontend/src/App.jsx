import { useEffect, useState } from "react";
import axios from "axios";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [investments, setInvestments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    tipo: "",
    valor: "",
    data: ""
  });
  const [error, setError] = useState("");

  const apiUrl = "http://localhost:5000/investments";

  const fetchInvestments = async () => {
    try {
      const response = await axios.get(apiUrl);
      setInvestments(response.data);
    } catch (err) {
      console.error("Erro ao buscar investimentos", err);
    }
  };

  useEffect(() => {
    fetchInvestments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (editingIndex !== null) {
        await axios.put(`${apiUrl}/${editingIndex}`, formData);
        setEditingIndex(null);
      } else {
        await axios.post(apiUrl, formData);
      }

      setFormData({ nome: "", tipo: "", valor: "", data: "" });
      fetchInvestments();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Erro ao salvar investimento");
      }
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`${apiUrl}/${index}`);
      fetchInvestments();
    } catch (err) {
      console.error("Erro ao excluir investimento", err);
    }
  };

  const handleEdit = (index) => {
    const inv = investments[index];
    setFormData(inv);
    setEditingIndex(index);
    setError(""); // Limpa erro ao editar
  };

  return (
    <div>
      <h1>Controle de Investimentos</h1>

      <InvestmentForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        editingIndex={editingIndex}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <InvestmentTable
        investments={investments}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
