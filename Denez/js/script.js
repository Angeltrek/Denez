let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');
let ph_deg = document.querySelector('.ph-10'); 
var temp = document.querySelector('.temp-normal');

window.addEventListener("scroll", function(){
    header.classList.toggle('sticky', window.scrollY > 0);
})

menu.onclick = () => {
    navbar.classList.toggle('open');
}

let ph_slide = document.querySelector('#ph_slide').oninput = function(){

    var value = this.value;

    var last_value = ph_deg.classList;

    ph_deg.classList.remove(last_value);
    ph_deg.classList.add('ph-'+value);

}

let temp_slide = document.querySelector('#temp_slide').oninput = function(){

    var value = this.value;

    var new_temp = "temp-cold";

    if (value > 9 && value < 21){
        new_temp = "temp-normal"
    } 
    
    else if (value > 20) {
        new_temp = "temp-hot"
    }

    ph_deg.innerHTML = this.value + "<span class='" + new_temp + "'>°</span>" + "C";

}