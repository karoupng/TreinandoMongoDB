const { conectar, client } = require("./db");

async function inserir() {
    try {
        const db = await conectar();
        const colecao = db.collection("alunos");

        const novoAluno = { nome: "Alex Mateus", email: "alex@alex.com", idade: 18 };
        const resultado = await colecao.insertOne(novoAluno);
        
        console.log("✅ Aluno inserido com ID:", resultado.insertedId);
    } catch (err) {
        console.error("❌ Erro ao inserir:", err);
    } finally {
        await client.close();
    }
}

inserir();