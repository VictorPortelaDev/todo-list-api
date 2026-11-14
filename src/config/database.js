const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const connectDB = async () => {
    try {
        const result = await pool.query("SELECT NOW()");

        console.log("PostgreSQL conectado com sucesso!");
        console.log("Horário do banco:", result.rows[0].now);

    } catch (error) {
        console.error("Erro ao conectar ao PostgreSQL:", error.message);
        process.exit(1);
    }
};

module.exports = {
    pool,
    connectDB
};