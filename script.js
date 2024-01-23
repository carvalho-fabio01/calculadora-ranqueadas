
// Função para calcular o saldo de Rankeadas
function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

// Função para calcular o ranking
function calcularRanking(saldoRankeadas){
    if (saldoRankeadas <10){
        return "Ferro"
    } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20){
        return "Bronze"
    } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50){
        return "Prata"
    } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80){
        return "Ouro"
    } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90){
        return "Diamante"
    } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100){
        return "Lendário"
    } else {
        return "Imortal"
    }
}

// Declarando os valores e a saída
let nomeHeroi = "Lucy"
let saldoRankeadas = calcularSaldoVitorias(80,30)
let nivel = calcularRanking(saldoRankeadas)
console.log(nomeHeroi+ ", você tem um de saldo de " + saldoRankeadas + " vitórias e está no nível " + nivel)