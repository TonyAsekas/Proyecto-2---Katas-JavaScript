const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];


const card = document.createElement("div");
card.classList.add("card");


const title = document.createElement("h1");
title.textContent = "Metal Classics";
card.appendChild(title);

const ul = document.createElement("ul");
ul.classList.add("album-list");


albums.forEach((albumText) => {
  const li = document.createElement("li");
  li.classList.add("album-item");

  const icon = document.createElement("span");
  icon.classList.add("album-icon");
  icon.textContent = "🤘";

  const textNode = document.createTextNode(albumText);

  li.appendChild(icon);
  li.appendChild(textNode);
  ul.appendChild(li);
});


card.appendChild(ul);
document.body.appendChild(card);