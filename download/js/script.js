function dropdown(){
    x=document.getElementById('dropdown-menu').style.display;
    if(x=="none"){
        document.getElementById('dropdown-menu').style.display = "flex";
    }
    else{
        document.getElementById('dropdown-menu').style.display = "none";
    }
}
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}