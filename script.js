function toggleMode(){
    const img = document.querySelector("#profile img")
    const html = document.documentElement

    
    if(html.classList.contains('light')){
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    }


    if(html.classList.contains('light')){
        img.setAttribute('src', './Assets/avatar-light.png');
    }
    else{
        img.setAttribute('src', './Assets/avatar.png');
    }
}

//pegar tag image , sbstituir a imagem, se tiver light mode, imagem light, sem light mode, manter imagem normal