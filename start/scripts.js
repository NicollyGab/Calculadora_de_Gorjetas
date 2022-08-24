function calculateTip(event) {
event.preventDefault();
// Esse evento faz com que a pág não recarregue ao apertar um botão

let  bill = document.getElementById('bill').value;
let  serviceQual = document.getElementById('serviceQual').value;
let  numofPeople = document.getElementById('people').value;

if(bill =='' | serviceQual == 0 ) {
    alert("Por favor, preencha os valores.")
    return;
 }
 if(numofPeople == "" | numofPeople <=1){
    numofPeople = 1;
    document.getElementById('each').style.display = "none"
 }else{
    document.getElementById('each').style.display = "block"
 }
 let total = (bill * serviceQual) / numofPeople;
 total = total.toFixed(2)
 document.getElementById('tip').innerHTML = total;
 document.getElementById('totalTip').style.display="block";
}

document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";
// Dentro do parenteses se coloca o ID do que você quer que desapareça, alterando o style com display none.

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
// Selecionamos o ID e adicionamos um evento onde ele vai associar esse evento de submissão (submit) com uma função (calculateTip)