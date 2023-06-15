//criar referencias ao elementos da pagina 
const frm = document.querySelector("form"); 
const resp1 = document.querySelector("h4");
 

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário 
    e.preventDefault(); 

   //obter os valores digitados
   const valDep = Number(frm.inVal.value); 

    if(valDep >= 3){
        resp1.innerText = `Valor suficiente. Tempo:120 minutos Troco ${(valDep - 3.00).toFixed(2)}`; 
    }else if(valDep  >= 1.75){
        resp1.innerText = `Valor suficiente. Tempo:60 minutos Troco ${(valDep - 1.75).toFixed(2)}`; 
    }else if(valDep >= 1){
        resp1.innerText = `Valor suficiente. Tempo:30 minutos. Troco ${(valDep - 1.00).toFixed(2)}`;
    }else{
        resp1.innerText = `Valor insuficiente`;
        resp1.style.color = "red"; 
     }
   
})
