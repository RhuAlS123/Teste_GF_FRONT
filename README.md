Este é o frontend do projeto Teste_GF, feito com muito carinho usando React e Vite. Aqui é onde toda a mágica acontece na interface que o usuário final vê e interage. 🌟

🛠️ Tecnologias que usamos
Este projeto foi construído com:

⚛️ React – para criar interfaces modernas e dinâmicas

⚡ Vite – para um ambiente de desenvolvimento rápido e leve

🌐 Axios – para conversar com o backend

🔍 ESLint – para manter o código organizado e limpo

📂 Estrutura resumida
arduino
Copiar
Editar
frontend/
├── public/            → arquivos públicos
├── src/
│   ├── components/    → componentes reutilizáveis
│   ├── pages/         → páginas principais da aplicação
│   └── App.jsx        → ponto de entrada do app
├── package.json       → dependências e scripts
└── vite.config.js     → configurações do Vite
🚀 Como rodar o projeto
Se quiser testar esse projeto na sua máquina, é bem fácil:

Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/SeuUsuario/Teste_GF_FRONT.git
Acesse a pasta do frontend:

bash
Copiar
Editar
cd Teste_GF_FRONT
Instale as dependências:

bash
Copiar
Editar
npm install
Rode o projeto:

bash
Copiar
Editar
npm run dev
Abra o navegador e vá até:

arduino
Copiar
Editar
http://localhost:5173
Você verá a interface carregando e funcionando! 🖥️✨

🔗 Integração com o backend
Este frontend espera encontrar o backend rodando localmente em:

arduino
Copiar
Editar
http://localhost:5000
Caso o backend esteja em outra porta ou hospedagem, é só ajustar o endereço nas chamadas da API (geralmente no arquivo services/api.js ou equivalente).
