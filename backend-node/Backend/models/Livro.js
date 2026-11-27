import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Livro = sequelize.define('Produto', {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    anoPublicacao: DataTypes.INTEGER
}, { tableName: 'livros' })