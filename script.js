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
