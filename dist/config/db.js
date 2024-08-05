"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
});
sequelize
    .authenticate()
    .then(() => {
    console.log("Conexión exitosa a la base de datos.");
})
    .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
});
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
});
sequelize
    .sync()
    .then(() => {
    console.log("La tabla de usuarios ha sido sincronizada.");
})
    .catch((error) => {
    console.error("Error al sincronizar la tabla de usuarios:", error);
});
app.use(express_1.default.json());
// app.post("/api/users", async (req: Request, res: Response) => {
//     try {
//         const newUser = await User.create(req.body);
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
// app.get("/api/users", async (req: Request, res: Response) => {
//     try {
//         const users = await User.findAll();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
// app.put("/api/users/:id", async (req: Request, res: Response) => {
//     try {
//         const userId = req.params.id;
//         await User.update(req.body, { where: { id: userId } });
//         res.status(200).json({ message: "Usuario actualizado." });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
// app.delete("/api/users/:id", async (req: Request, res: Response) => {
//     try {
//         const userId = req.params.id;
//         await User.destroy({ where: { id: userId } });
//         res.status(200).json({ message: "Usuario eliminado." });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
