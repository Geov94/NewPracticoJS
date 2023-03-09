const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btnCalcular = document.getElementById('btnCalcular');
const result = document.getElementById('result');

btnCalcular.addEventListener('click',btnOnclick)

function btnOnclick(){
    const sumaInputs = input1.value + input2.value;
    result.innerText= "El resultado es : "+sumaInputs
    
}

