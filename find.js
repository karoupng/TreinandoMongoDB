const { conectar, client } = require("./db");

async function buscar() {
    try {
        const db = await conectar();
        const colecao = db.collection("alunos");

        const listaAlunos = await colecao.find({}).toArray();
        console.log("🔍 Alunos encontrados:");
        console.table(listaAlunos);
    } catch (err) {
        console.error("❌ Erro ao buscar:", err);
    } finally {
        await client.close();
    }
}

buscar();