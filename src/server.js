require("dotenv").config();
const app = require("./app");
const { connectDB } = require("./config/database");

const PORT = process.env.PORT || 3333;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Backend rodando na porta ${PORT}`);
  });
};

startServer();
