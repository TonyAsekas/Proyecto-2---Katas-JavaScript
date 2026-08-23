//4.1
const btn = document.querySelector("#btnToClick");

btn.addEventListener("click", (event) => {
    console.log(event);
});

//4.2
const newFocus = document.querySelector(".focus")
newFocus.addEventListener("focus", (ev) =>{
    console.log(ev.target.value)
})

//4.3
const newInput = document.querySelector(".value")
newInput.addEventListener("input", (ev) => {
    console.log(ev.target.value)
})