// =================
// variables

let text = "write some text"
let n1 = 384
let n2 = 183
let response = true

let result = n1 + n2


// =================
// select HTML elements

const dv1 = document.getElementById("dataviz_01")
const sections = document.getElementsByClassName("no_margin")



// =================
// edit the DOM

const title = document.querySelector("h1")
const subtitle = document.querySelector("h2")


// =================
// edit css

subtitle.style.color = "gray"
subtitle.style.fontSize = "2rem"


// =================
//function

function my_first_function(){
    console.log("works!")
}


function sum(n1,n2){
    let result = n1 + n2
    title.innerHTML = result
}


// =================
// listener

function listener(element){
    dv1.addEventListener("mouseenter", function(){
        console.log("in")
    })
    
    dv1.addEventListener("mouseleave", function(){
        console.log("out")
    })
}

// =================
// highlight

function highlight(){ // dv1

    const flows = dv1.contentDocument.documentElement.getElementById("flows").querySelectorAll("g")

    flows.forEach(function(el){

        el.addEventListener("mouseenter", function(){
            flows.forEach(function(a){
                a.style.opacity = 0.3
            })
            this.style.opacity = 1
        })

        el.addEventListener("mouseleave", function(){
            flows.forEach(function(a){
                a.style.opacity = 1
            })
        })
    })
}

// =================
// add the buttons that switch between different images


const BUTTON1 = document.getElementById("button-id1")
const BUTTON2 = document.getElementById("button-id2")

const DV_BOX = document.getElementById("dv-box")
const CAPTION = document.getElementById("dv-caption")

BUTTON1.addEventListener("click", () => {
    DV_BOX.src = "assets/images/01.png"
    DV_BOX.alt = "alternative text of the dv n. 1"
    CAPTION.innerText = "caption of the dv n. 1"

    BUTTON1.style.opacity = 0.4;
    BUTTON2.style.opacity = 1;
})

BUTTON2.addEventListener("click", () => {
    DV_BOX.src = "assets/images/02.png"
    DV_BOX.alt = "alternative text of the dv n. 2"
    CAPTION.innerText = "caption of the dv n. 2"

    BUTTON1.style.opacity = 1;
    BUTTON2.style.opacity = 0.4;
})


// =================
// page (and iframe) load

window.addEventListener("load", function(){
    highlight()
})

