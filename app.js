// ==========================================
// BLOCO 1 - FUNDAMENTOS E VARIÁVEIS
// ==========================================

// 1. LET
let pontos = 10;
pontos = pontos + 10;

console.log("Pontos:", pontos);


// 2. CONST
const MAX_PONTOS = 100;

console.log("Máximo de pontos:", MAX_PONTOS);

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro:", erro.name);
}


// 3. TIPOS PRIMITIVOS

const texto = "JavaScript";
const numero = 25;
const ativo = true;
let valorIndefinido;
const valorNulo = null;

console.log("texto:", typeof texto);
console.log("numero:", typeof numero);
console.log("ativo:", typeof ativo);
console.log("valorIndefinido:", typeof valorIndefinido);
console.log("valorNulo:", typeof valorNulo);


// 4. TEMPLATE LITERALS

const nome = "Arthur";
const curso = "Engenharia da Computação";

// Template Literals usam crases e ${} para inserir variáveis.
const fraseTemplate = `Meu nome é ${nome} e curso ${curso}.`;

console.log("Template Literal:", fraseTemplate);


// 5. CONCATENAÇÃO

// Aqui usamos + para juntar textos e variáveis.
const fraseConcatenada =
    "Meu nome é " + nome + " e curso " + curso + ".";

console.log("Concatenação:", fraseConcatenada);




// ==========================================
// BLOCO 2 - FUNÇÕES
// ==========================================

// Função declarada.
// Ela pode ser chamada antes da declaração por causa do hoisting.

console.log("É maior de idade?", ehMaiorDeIdade(18));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}
// Função de expressão
// Diferente da função declarada, ela não pode ser chamada antes
// de ser criada.

try {
    console.log(ehMaiorDeIdadeExpressao(18));
} catch (erro) {
    console.log("Erro:", erro.name);
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

// Depois de criada, podemos chamar normalmente.
console.log(
    "Função de expressão:",
    ehMaiorDeIdadeExpressao(18)
);

// DOBRO - função declarada

function dobroDeclarada(numero) {
    return numero * 2;
}

console.log("Dobro declarada:", dobroDeclarada(5));


// DOBRO - função de expressão

const dobroExpressao = function (numero) {
    return numero * 2;
};

console.log("Dobro expressão:", dobroExpressao(5));


// DOBRO - arrow function

const dobroArrow = numero => numero * 2;

console.log("Dobro arrow:", dobroArrow(5));
// Parâmetro padrão
// Se nenhum argumento for informado, numero será 1.

function dobroComPadrao(numero = 1) {
    return numero * 2;
}

console.log("Dobro com argumento:", dobroComPadrao(5));
console.log("Dobro sem argumento:", dobroComPadrao());
// BLOCO 3 - CONTROLE DE FLUXO

// Classifica a nota como aprovado ou reprovado
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(8));
console.log(classificarNota(4));
// Semáforo usando switch
const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;

    default:
        console.log("Cor inválida");
}
// Tabuada do 5 usando for
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
// Contagem regressiva de 5 até 1
let contagem = 5;

while (contagem >= 1) {
    console.log(contagem);
    contagem--;
}
// Números pares e ímpares usando for
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}

// Números pares e ímpares usando while
let numeroAtual = 1;

while (numeroAtual <= 20) {
    if (numeroAtual % 2 === 0) {
        console.log(numeroAtual + " é par");
    } else {
        console.log(numeroAtual + " é ímpar");
    }

    numeroAtual++;
}
// Retorna o dia da semana correspondente ao número
function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(5));
console.log(diaDaSemana(9));