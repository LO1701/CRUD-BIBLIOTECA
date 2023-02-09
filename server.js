import app from "./src/app.js";

const port = process.env.PORT || 3000; // definido a porta que vai rodar meu servidor

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

