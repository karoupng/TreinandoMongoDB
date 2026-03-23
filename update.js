const { conectar, client } = require("./db");

async function atualizar() {
    try {
        const db = await conectar();
        const colecao = db.collection("alunos");

        const resultado = await colecao.updateOne(
            { nome: "Alex Mateus" }, 
            { $set: { endereco: "Avenida 25 de Julho, 445", idade: 25 } }
        );

        console.log(`✅ Sucesso! Atualizados: ${resultado.modifiedCount}`);
    } catch (err) {
        console.error("❌ Erro ao atualizar:", err);
    } finally {
        await client.close();
    }
}

atualizar();