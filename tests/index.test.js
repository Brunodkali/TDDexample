const request = require("supertest");
const server = require('../index.js');
const database = require('../database/db.js');
const models = require('../models/modelEmpresa.js');

describe('Teste para inserção, atualização e listagem de empresas', () => {
    beforeAll(async()=> {
        (async () => {
            try {
                await database.sync();
            }catch(err) {
                return err;
            }
        })();
    });

    it('Inserir empresa', async () => {
        jest.setTimeout(30000);
        const response = await request(server)
        .post('/inserirEmpresa')
        .send({
            razaoSocial: "Bruno LTDA",
            CNPJ: "00.000.000/1111",
            email: 'empresa@123',
            emailAlternativo: 'empresa2@123',
            senha: '',
            chaveOrcamag: 654321,
            tipo: 1
        });
        
        console.log(response.body.razaoSocial);
        expect(response.status).toBe(200);
    });

    it('Listar todas as empresas', async () => {
        jest.setTimeout(30000);
        const response = await request(server)
        .post('/listarEmpresa');
        
        console.log(response.body);
        expect(response.status).toBe(200);
    });

    it('Atualizar Razão Social da empresa', async () => {
        const response = await request(server)
        .post('/atualizarEmpresa')
        .send({
            pk_Empresa: 1,
            novaRazaoSocial: 'Oleo de Banho LTDA'
        });

        console.log(response.body.novaRazaoSocial);
        expect(response.status).toBe(200);
    });
});