let selectBox = document.querySelector(`.select-box`);
let selected = document.querySelector(`.select-box p`);
let selectOptions = document.querySelector(`.select-options`);
let options = document.querySelectorAll(`.select-options ul`);
let optionSelected = document.querySelector(`.select-options ul li`);
let arrow = document.querySelector(`.arrow`);

selectBox.addEventListener(`click`,()=>{
    selectOptions.classList.toggle("hide");
    arrow.classList.toggle(`rotate-arrow`);
})

for(option of options){
    option.addEventListener(`click`,(e)=>{
        selected.innerHTML = e.target.innerText;
    })
}