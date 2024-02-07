function Soma () {
    const valor1 = document.getElementById("valor1")
    const valor2 = document.getElementById("valor2")

    const altura = Number(valor1.value)
    const Peso = Number(valor2.value)

   const alturaePeso = altura * Peso
    
    document.getElementById("resultado").innerText = "Resultado: " + alturaePeso

    
}
   
