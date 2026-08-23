//2.1
const newDiv = document.createElement("div")
document.body.appendChild(newDiv)

//2.2
const newDiv2 = document.createElement("div")
const newP = document.createElement("p")
newDiv2.appendChild(newP)
document.body.appendChild(newDiv2)

//2.3
const loopDiv = document.createElement("div")
for (let i = 0; i < 6; i++) {
    const newP2 =  document.createElement("p")
    loopDiv.appendChild(newP2)
}
document.body.appendChild(loopDiv)

//2.4
const newP4 = document.createElement("p")
newP4.textContent = " Soy dinámico!"
document.body.appendChild(newP4)

//2.5
const newh2 = document.querySelector(".fn-insert-here")
newh2.textContent = "Wubba Lubba dub dub"

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const newUl = document.createElement("ul")
for (const app of apps) {
    const newLi = document.createElement("li")
    newLi.textContent = app
    newUl.appendChild(newLi)
}
document.body.appendChild(newUl)

//2.7
const newRemove = document.querySelectorAll(".fn-remove-me")
newRemove.forEach(element => {
    element.remove()
})

//2.8
const newPMedio = document.createElement("p")
newPMedio.textContent = "Voy en medio!"
const secondDiv = document.querySelectorAll("div")[1]
secondDiv.before(newPMedio)

//2.9
const allDivs = document.querySelectorAll("div.fn-insert-here")
allDivs.forEach(element => {
    const newP3 = document.createElement("p")
    newP3.textContent = "Voy dentro!"
    element.appendChild(newP3)
})
