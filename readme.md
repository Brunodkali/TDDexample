## Iniciando um TDD (Test Drive Development)

O Test Drive Development (Desenvolvimento Orientado a Teste, em tradução livre) é um método de desenvolvimento voltada a análise e testes de funcionalidades de forma unitária.

No TDD existem três estágios.

> 1. Falha;
> 2. Refatoração;
> 3. Teste aprovado.

### Falha

A falha no TDD é o início de tudo. Ao escrever uma função demasiadamente complexa você pode acabar caindo em uma teia de aranha, onde o teste de partes isoladas pode se tornar inviável ou tão complicado que acaba atrapalhando outros teste.

Partindo dessa ideia, a falha do teste é o momento onde todos os possíveis erros podem ser definidos e catalogados, isolando uma função específica ou abstraindo mais em termos de escopo e isolando 'pedaços' de código dentro de uma função específica.

### Refatoração

Após a falha, onde os erros são catalogados, é possível refatorar o código, limpando e otimizando suas funcionalidades. Nesse momento será possível analisar soluções para os possíveis erros antes vistos.

### Teste aprovado

Finalizando a refatoração, podemos iniciar os testes novamente, caso novos erros apareçam, voltamos a etapa de catalogar e refatorar, se não, o teste foi aprovado e sua função pode ser implementada de uma maneira mais segura e com os tratamentos adequados para os possíveis erros.

#

> Para realizar os teste de maneira unitário utilizaremos o framework JEST.

## Notas para uso do JEST para testes unitários

o JEST é um framework Javascript mantido pela META, que proporciona uma simplicidade maior para testar funções. Ele executa teste paralelos de forma isolada.

[JEST site](https://jestjs.io/pt-BR/)

## Instalação e Uso

Para instalar basta baixar o pacote 'npm jest'

        npm install jest

Em seu package.json define um script de teste com jest

        "test": "jest"

Após isso crie seu ambiente de teste nomeando o arquivo com '.test.js'

        index.test.js
    
Não é necessária nenhuma configuração adicional. No momento que você executar o comando 'npm test', 
automaticamente o JEST reconhece o arquivos de teste (nomeados corretamente) e os executa.

## Por dentro do index.test.js

Existe diversas funções próprias do JEST, que podemos utilizar antes, durante e depois da execução de um teste.

As funções básicas estarão listadas abaixo:

        describe() é utilizada para agrupar testes, podendo catalogar e abstrair de maneira mais específica.

        it() é um alias da função test(), utilizada testar uma função importada para seu teste, definindo seu escopo.

> Dentro do it() passaremos a função expect(), onde estará o parâmetro de resposta da função.

> Juntamente expect() teremos alguma função para definir a resposta esperada, podendo ser toBe(), toEqual(), toBeCloseTo() e outras, disponibilizadas na documentação do framework.

        beforeAll() utilizada para rodar códigos antes de todos os testes.

        beforeEach() utilizada para rodar códigos antes de cada teste, um a um.

        afterAll() utilizada para rodar códigos após todos os testes.

        afterEach() utilizada para rodar códigos após de cada teste, um a um.

Para definir um tempo máximo de execução, pode-se utilizar a função abaixo, no seu escopo de teste.

        jest.setTimeout();

#

Um exemplo básico de teste pode ser visto abaixo, onde temos uma função de soma sendo requerida.

        const sum = require('./sum');

        it('a Soma 1 + 2 deve ser igual a 3', () => {
                expect(sum(1, 2)).toBe(3);
        });

Nesse caso o valor retornado na função expect() será 3, o que irá bater com o toBe() de forma literal, sendo o teste aprovado.

#

No próximo teste temos um exemplo de teste falho, onde a resposta retornada no expect() não será igual ao esperado na função toBe(). 

        const sum = require('./sum');

        it('a Soma 1 + 2 deve ser igual a 3', () => {
                expect(sum(1, 3)).toBe(3);
        });


## Exercício

Agora iremos por a mão na massa!

Observem os exemplos de funcionalidades no index.js e de testes no index.test.js, após isso criem as seguintes rotas, consumindo as funções existentes no arquivo 'classEmpresa':

> 1. Rota para encontrar empresa por CNPJ;
> 2. Rota para validar login de uma empresa;
> 3. Rota para mudar tipo (para 0) e atualizar informações (usem as informações fictícias que quiserem).

        Observação: Lembrem-se de seguir o método TDD, para exercitarem e especializarem os conhecimentos.