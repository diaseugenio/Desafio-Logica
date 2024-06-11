let nome = "Kiriha";
let XP = 5500;
let nivel;

const nivelXP = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
const classificacao = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let i = 0; i < nivelXP.length; i++) {
    if (XP <= nivelXP[i])
    {nivel = classificacao[i];
    break
}
}

if (!nivel) {
    nivel = classificacao[classificacao.length - 1]
}

console.log(` O Herói de nome ${nome} está no nível de ${nivel}`);