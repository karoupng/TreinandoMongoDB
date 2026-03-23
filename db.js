require("dotenv").config();

const {
  MongoClient,
} = require("./learning-mongodb/node_modules/mongodb/mongodb");

// Único lugar com a string de conexão
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

async function conectar() {
  try {
    await client.connect();
    return client.db("escola"); // Retorna o banco de dados pronto
  } catch (err) {
    console.error("❌ Falha na conexão central:", err);
    throw err;
  }
}

// Exportamos para que os outros arquivos possam usar
module.exports = { conectar, client };
