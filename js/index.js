// Show and Hide answer

const btnCard1 = document.querySelector('[data-js="btnCard1"]');
const lösung = document.querySelector('[data-js="lösung"]');

function toggleLösung() {
  lösung.toggleAttribute("hidden");
}

btnCard1.addEventListener("click", () => {
  toggleLösung();

  if (lösung.attributes.hidden === undefined) {
    btnCard1.textContent = "Hide Answer";
  } else {
    btnCard1.textContent = "Show Answer";
  }
});

// Bookmark

const bookmarkBtn = document.querySelector('[data-js="bookmarkBtn"]');
const bookmarkImg = document.querySelector('[data-js="bookmark"]');

function toggleBookmark() {
  bookmark.toggleAttribute("hidden");
}

function changeToBW() {
  if (
    bookmarkImg.getAttribute("src") ===
    "/pictures/kisspng-bookmark-computer-icons-like-button-instagram-face-5ada502def3d14.3322865215242568139799.png"
  ) {
    bookmarkImg.setAttribute("src", "/pictures/vollebookmark.png");
  } else {
    bookmarkImg.setAttribute(
      "src",
      "/pictures/kisspng-bookmark-computer-icons-like-button-instagram-face-5ada502def3d14.3322865215242568139799.png"
    );
  }
}

bookmarkBtn.addEventListener("click", () => {
  changeToBW();
});
