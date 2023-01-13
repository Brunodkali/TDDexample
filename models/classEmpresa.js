const { Empresa } = require('./modelEmpresa.js');

async function createEmpresa({
	razaoSocial,
	CNPJ,
	email,
	emailAlternativo,
	senha,
	chaveOrcamag,
	tipo
}) {
	var _razaoSocial = razaoSocial;
	var _cnpj = CNPJ;
	var _email = email;
	var _emailAlternativo = emailAlternativo;
	var _senha = senha;
	var _chaveOrcamag = chaveOrcamag;
	var _tipo = tipo;

	var [newEmpresa, created] = await Empresa.findOrCreate({
		where: { cnpj: _cnpj },
		defaults: {
			razaoSocial: _razaoSocial,
			email: _email,
			emailAlternativo: _emailAlternativo,
			senha: '',
			chaveOrcamag: _chaveOrcamag,
			tipo: _tipo
		}
	});

	if (!created) {
		await Empresa.update(
			{
				razaoSocial: _razaoSocial,
				email: _email,
				emailAlternativo: _emailAlternativo,
				senha: '',
				chaveOrcamag: _chaveOrcamag,
				tipo: _tipo
			},
			{
				where: {
					cnpj: _cnpj
				}
			}
		);

		newEmpresa = await Empresa.findOne({
			where: {
				cnpj: _cnpj
			}
		});
	}

	return {
		getPkEmpresa() {
			return newEmpresa.pk_Empresa;
		},
		getObjEmpresa() {
			return newEmpresa.dataValues;
		}
	};
}

function updateEmpresa(pk_Empresa) {
	const updateField = async (field, value) => {
		try {
			return await Empresa.update(
				{ [field]: value },
				{
					where: { pk_Empresa: pk_Empresa }
				}
			);
		} catch (err) {
			return null;
		}
	};

	return {
		async updateRazaoSocial(newRazaoSocial) {
			return await updateField('razaoSocial', newRazaoSocial);
		},
		async updateCnpj(newCnpj) {
			return await updateField('cnpj', newCnpj);
		},
		async updateEmail(newEmail) {
			return await updateField('email', newEmail);
		},
		async updateEmailAlternativo(newEmailAlternativo) {
			return await updateField('emailAlternativo', newEmailAlternativo);
		},
		async updateSenha(newSenha) {
			return await updateField('senha', newSenha);
		},
		async updateChaveOrcamag(newChaveOrcamag) {
			return await updateField('chaveOrcamag', newChaveOrcamag);
		},
		async updateTipo(newTipo) {
			return await updateField('tipo', newTipo);
		}
	};
}

function selectEmpresa() {
	return {
		async selectAllEmpresas() {
			var arrEmpresas = [];

			const empresas = await Empresa.findAll();

			empresas.forEach((element) => {
				arrEmpresas.push(element.dataValues);
			});

			return arrEmpresas;
		},
		async selectEmpresaByPk(pk_Empresa) {
			const empresa = await Empresa.findByPk(pk_Empresa);

			return empresa != undefined ? empresa.dataValues : empresa;
		},
		async selectRazaoSocialAllEmpresas() {
			var nomeEmpresas = [];

			const query = await Empresa.findAll({
				raw: true,
				attributes: ['razaoSocial']
			});

			query.forEach((element) => {
				nomeEmpresas.push(element.razaoSocial);
			});

			return nomeEmpresas;
		},
		async selectLogin(razaoSocial, senha) {
			var empresa = await Empresa.findOne({
				raw: true,
				where: {
					razaoSocial: razaoSocial,
					senha: senha
				}
			});

			return empresa;
		},
		async selectEmpresaByCnpj(cnpjEmpresa) {
			var empresa = await Empresa.findOne({
				raw: true,
				where: {
					cnpj: cnpjEmpresa
				}
			});

			return empresa;
		}
	};
}

module.exports = {
	createEmpresa,
	updateEmpresa,
	selectEmpresa
};
