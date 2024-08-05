import express from "express";
import sequelize from "./config/db";
import dotenv from "dotenv";
//import router from "./routes/Router";

dotenv.config();

const PORT = process.env.PORT || 3100;
const app = express();
app.use(express.json());
//app.use("/api", router);

const runServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

runServer();