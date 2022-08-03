const about = document.querySelector(".container")
const btn = document.querySelectorAll(".btn")
const content = document.querySelectorAll(".content")
const contents = document.querySelectorAll(".contents")



about.addEventListener("click", function(e){
console.log(e.target.dataset.id)
 
const id = e.target.dataset.id

if(id){
    btn.forEach(function(btns){
        btns.classList.remove("active")
        e.target.classList.add("active")
    })
content.forEach(function(content){
content.classList.remove("active")
})
const element = document.getElementById(id)
element.classList.add("active")
}

//this is for the imag part to also chang images as we click on the three button//
const img = e.target.dataset.img
console.log(e.target.dataset.img)

if(img){
    btn.forEach(function(btns){
        btns.classList.remove("actives")
        e.target.classList.add("actives")
    })
contents.forEach(function(contents){
contents.classList.remove("actives")
})
const element = document.getElementById(img)
element.classList.add("actives")
}

})




