function generateNumber(){
    
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    if( min >= max){
        alert("O valor minimo tem que ser MENOR que o valor máximo")
        } else {
            var resultado = "Seu resultado desejado"; // Aqui você define o resultado desejado
    
            document.getElementById("resultadoInput").value = result;
        }

    
    

    
}









