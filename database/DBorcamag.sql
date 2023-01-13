--
-- Arquivo gerado com SQLiteStudio v3.4.0 em seg nov 21 16:26:40 2022
--
-- Codifica��o de texto usada: TSCII
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Tabela: Empresas
DROP TABLE IF EXISTS Empresa;

CREATE TABLE IF NOT EXISTS Empresa (
    pk_Empresa       INTEGER PRIMARY KEY,
    razaoSocial      TEXT,
    cnpj             TEXT,
    email            TEXT,
    emailAlternativo TEXT,
    senha            TEXT,
    chaveOrcamag     INTEGER,
    tipo             INTEGER
);


-- Tabela: ItemPlanOrcs
DROP TABLE IF EXISTS ItemPlanOrc;

CREATE TABLE IF NOT EXISTS ItemPlanOrc (
    pk_ItemPlanOrc INTEGER PRIMARY KEY,
    tipoItem       TEXT,
    codigoItem     TEXT,
    descricao      TEXT,
    nivel          TEXT,
    codNivel1      TEXT,
    codNivel2      TEXT,
    codNivel3      TEXT,
    codNivel4      TEXT,
    codNivel5      TEXT,
    codNivel6      TEXT,
    unidade        TEXT,
    quantidade     REAL,
    precoUnitRef   REAL,
    totalFornec    REAL,
    fatorDesconto  REAL,
    pk_servicoBase TEXT,
    pk_PlanOrc     INTEGER REFERENCES PlanOrc (pk_PlanOrc) ON DELETE CASCADE
);


-- Tabela: Notas
DROP TABLE IF EXISTS Nota;

CREATE TABLE IF NOT EXISTS Nota (
    pk_Nota      INTEGER PRIMARY KEY,
    ordem        INTEGER,
    nota         TEXT,
    tipo         BLOB,
    pk_Orcamento INTEGER REFERENCES Orcamento (pk_Orcamento) ON DELETE CASCADE
);


-- Tabela: Orcamentos
DROP TABLE IF EXISTS Orcamento;

CREATE TABLE IF NOT EXISTS Orcamento (
    pk_Orcamento      INTEGER PRIMARY KEY,
    dtCadastro        TEXT,
    codigoOrc         TEXT,
    mesBase           INTEGER,
    anoBase           INTEGER,
    numeroEdital      TEXT,
    comissaoLicitacao TEXT,
    codigoOrgao       TEXT,
    nomeOrgao         TEXT,
    siglaOrgao        TEXT,
    objeto            TEXT,
    numDecimalOrc     INTEGER,
    metodoArredOrc    INTEGER,
    totalEQ           REAL,
    totalMO           REAL,
    totalMA           REAL,
    totalSSC          REAL,
    totalBDI          REAL,
    totalRef          REAL,
    totalFornec       REAL,
    chaveProposta     TEXT,
    dtImportacao      TEXT,
    pk_Empresa        INTEGER REFERENCES Empresa (pk_Empresa) ON DELETE CASCADE
);


-- Tabela: pks
DROP TABLE IF EXISTS pk;

CREATE TABLE IF NOT EXISTS pk (
    nome_tabela TEXT,
    pk          INTEGER
);


-- Tabela: PlanOrcs
DROP TABLE IF EXISTS PlanOrc;

CREATE TABLE IF NOT EXISTS PlanOrc (
    pk_PlanOrc     INTEGER PRIMARY KEY,
    numero         INTEGER,
    objeto         TEXT,
    localExecucao  TEXT,
    subtotalRef    REAL,
    subtotalFornec REAL,
    pk_Orcamento   INTEGER REFERENCES Orcamento (pk_Orcamento) ON DELETE CASCADE
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;