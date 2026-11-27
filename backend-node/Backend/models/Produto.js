import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../database.js'


export const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
}, { tableName: 'produtos' })