const form = document.querySelector('[data-js="form"]');
const main = document.querySelector("main");
const quest = form.frage;
const answ = form.antwort;
const display = document.querySelector('[data-js="display"]');
const display2 = document.querySelector('[data-js="display2"]');

quest.addEventListener("input", () => {
  console.log(form);
  let zeichenZahl = 150 - quest.value.length;
  display.textContent = `Du hast noch ${zeichenZahl}`;
});

answ.addEventListener("input", () => {
  let zeichenZahl2 = 150 - answ.value.length;
  display2.textContent = `Du hast noch ${zeichenZahl2}`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const frage = form.frage.value;
  const antwort = form.antwort.value;
  const tag = form.tag.value;

  const card = document.createElement("section");
  card.classList.add("card");
  card.classList.add("cardopen");
  main.append(card);

  const cardFrage = document.createElement("p");
  cardFrage.textContent = frage;
  card.append(cardFrage);

  const cardBtn = document.createElement("button");
  cardBtn.classList.add("buttonhide");
  cardBtn.setAttribute("data-js", "btnCard1");
  cardBtn.setAttribute("type", "button");
  cardBtn.textContent = "Show Answer";
  card.append(cardBtn);

  const cardAntwort = document.createElement("p");
  cardAntwort.textContent = antwort;
  cardAntwort.classList.add("answer");
  cardAntwort.classList.add("lösung");
  cardAntwort.setAttribute("data-js", "lösung");
  cardAntwort.setAttribute("hidden", "");
  card.append(cardAntwort);

  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("liste");
  card.append(cardTagList);

  const cardTag = document.createElement("li");
  cardTag.textContent = tag;
  card.append(cardTag);

  const bookmarkBtn = document.createElement("button");
  bookmarkBtn.setAttribute("data-js", "bookmarkBtn");
  bookmarkBtn.setAttribute("type", "button");
  bookmarkBtn.textContent = bookmarkImg;
  card.append(bookmarkBtn);

  const bookmarkImg = document.createElement("img");
  bookmarkImg.setAttribute(
    "src",
    "/pictures/kisspng-bookmark-computer-icons-like-button-instagram-face-5ada502def3d14.3322865215242568139799.png"
  );
  bookmarkImg.setAttribute("data-js", "bookmark");
  bookmarkImg.classList.add("bookmarkclosed");
  bookmarkBtn.append.bookmarkImg;
});
