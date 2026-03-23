const { conectar, client } = require("./db");

async function deletar() {
    try {
        const db = await conectar();
        const colecao = db.collection("alunos");

        const resultado = await colecao.deleteOne({ nome: "Alex Mateus" });
        
        if (resultado.deletedCount === 1) {
            console.log("🗑️ Registro apagado com sucesso!");
        } else {
            console.log("⚠️ Registro não encontrado.");
        }
    } catch (err) {
        console.error("❌ Erro ao deletar:", err);
    } finally {
        await client.close();
    }
}

deletar();