function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const image = document.querySelector("#profile imag")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    image.setAttribute("src", "./assets/Nícolas Cauã.png")
  }

  /*.
if (html.classList.contains("light")){
  html.classList.remove("light")
}else{
  html.classList.add("light")
}*/
//att
}
