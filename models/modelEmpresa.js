const { Sequelize } = require('sequelize');
const sequelize = require('../database/db.js');

const Empresa = sequelize.define('Empresa', {
	pk_Empresa: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	razaoSocial: {
		type: Sequelize.TEXT
	},
	cnpj: {
		type: Sequelize.TEXT,
		unique: true
	},
	email: {
		type: Sequelize.TEXT
	},
	emailAlternativo: {
		type: Sequelize.TEXT
	},
	senha: {
		type: Sequelize.TEXT
	},
	chaveOrcamag: {
		type: Sequelize.INTEGER
	},
	tipo: {
		type: Sequelize.INTEGER
	}
});

module.exports = { Empresa }