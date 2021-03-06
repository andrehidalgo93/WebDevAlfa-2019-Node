const Sequelize = require('sequelize');

const sequelize = new Sequelize(null, null, null, {
    dialect: 'sqlite',
    storage: './database.sqlite',
    define: {
        timestamps: true,
        freezeTableName: true,
    }
});

/*******
 * TODO: Definição dos modelos.
 * Defina aqui os modelos a serem mapeados para entidades do banco de dados.
 *******/
const Usuario = sequelize.define('usuario', {
    id: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true,
    },
    nascimento: Sequelize.DATEONLY,
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: false,
    },
    senha: {
        type: Sequelize.STRING(200),
        allowNull: false,
    }
});

const Tarefa = sequelize.define('tarefa', {
    id: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        autoIncrement: true,
    },
    titulo: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    concluido: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
})

/*******
 * TODO: Definição das relações.
 * Defina aqui os relacionamentos entre os modelos.
 *******/

Usuario.hasMany(Tarefa)
Tarefa.belongsTo(Usuario)

module.exports = {
    sequelize,
    Usuario,
    Tarefa,
};
