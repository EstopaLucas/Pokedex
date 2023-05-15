const BotaoAlterarTema = document.getElementById("AlterarTema")
const Body = document.querySelector("body")
const imgTrocaTema = document.querySelector(".botao")

BotaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = Body.classList.contains("darkMode")   
    Body.classList.toggle("darkMode")
    

    if (modoEscuroAtivo) {
        imgTrocaTema.setAttribute("src","./Sources/Imagens/sun.png")     
    } else {
        imgTrocaTema.setAttribute("src","./Sources/Imagens/moon.png") 
    }

})
