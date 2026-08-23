//3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const newUL = document.createElement("ul");

for (const country of countries) {
    const newLi = document.createElement("li");
    newLi.textContent = country;
    newUL.appendChild(newLi);
}
document.body.appendChild(newUL);

//3.2
const newRemove = document.querySelector(".fn-remove-me")
newRemove.remove()

//3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]')
const newUlCoches = document.createElement("ul")
for (const car of cars) {
    const newLiCoches = document.createElement("li")
    newLiCoches.textContent = car
    newUlCoches.appendChild(newLiCoches)
}
printHereDiv.appendChild(newUlCoches)

//3.4
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (const country of countries2) {
    const newDiv = document.createElement("div")
    const newH4 = document.createElement("h4")
    const newImg = document.createElement("img")

    newH4.textContent = country.title
    newImg.src = country.imgUrl

    newDiv.appendChild(newH4)
    newDiv.appendChild(newImg)
    document.body.appendChild(newDiv)
}

//3.5
const removeBtn = document.createElement("button")
removeBtn.textContent = "Eliminar el último"
document.body.appendChild(removeBtn)

removeBtn.addEventListener("click", () => { 
    const allDivs = document.querySelectorAll("div")
    allDivs[allDivs.length - 1].remove()
 })

 //3.6
 allDivs.forEach(div => {
    const btn = document.createElement("button")
    btn.textContent =" Eliminar este div "
    btn.addEventListener("click", () => {
        div.remove()
    })
    div.appendChild(btn)
 });
 
