var saida = document.getElementById("saida");
var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var imprimir = ""

for(i = 0; i < mes.length; i ++){
    imprimir += mes[i] + "<br>";
}

saida.innerHTML = imprimir
