const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const router = express.Router();
const { createEmpresa, selectEmpresa, updateEmpresa } = require('./models/classEmpresa.js');
const database = require('./database/db.js');
const models = require('./models/modelEmpresa.js');

app.use(express.json());
app.use(cors());

(async () => {
	try {
		await database.sync();
	}catch(err) {
		return err;
	}
})();

app.use(router.post('/inserirEmpresa', async (req, res) => {
    const { 
        razaoSocial, 
        CNPJ,
        email,
        emailAlternativo,
        senha,
        chaveOrcamag,
        tipo
    } = req.body;
    
    if(razaoSocial == null || CNPJ == null) {
        return res.status(400).send({ error: "Dados insuficientes" });
    }else {
        try {
            createEmpresa({
                razaoSocial,
                CNPJ,
                email,
                emailAlternativo,
                senha,
                chaveOrcamag,
                tipo
            });
            return res.status(200).send({ razaoSocial: razaoSocial });
        }catch(err) {
            return res.status(500).send({ error: err });
        }
    }
}));

app.use(router.post('/listarEmpresa', async (req, res) => { 
    try {
        const arrEmpreas = await selectEmpresa().selectAllEmpresas();

        return res.status(200).json({ arrEmpreas });
    }catch(err) {
        return res.status(404).send({ error: err });
    }  
}));


app.use(router.post('/atualizarEmpresa', async (req, res) => { 
    const {  
        pk_Empresa,
        novaRazaoSocial
    } = req.body;

    try {
        const atualizarEmpresa = await updateEmpresa(pk_Empresa).updateRazaoSocial(novaRazaoSocial);

        return res.status(200).json({ novaRazaoSocial });
    }catch(err) {
        return res.status(404).send({ error: err });
    }
    
}));

const server = app.listen(port, () => {
    console.log(`Servidor Rodando na porta: ${port}`);
});

module.exports = server;