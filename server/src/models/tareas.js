import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

//creacion de modelo de la BD
export const TaskModel = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: true     //no permite nulos
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true     //no permite nulos
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: true     //no permite nulos
    }
}, {
    timestamps: true         //Fecha de creacion
}
)