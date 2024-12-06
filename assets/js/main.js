const all = document.querySelectorAll("h1");

all.forEach((el) => {
  let text = el.textContent.replaceAll("  ", "").trim();
  text = text.split("");

  const textCode = text.map((x, idx) => {
    let delay = (idx + 1) * 50;

    if (x === " ") {
      return `<span style="animation-delay: ${delay}ms" class="spacer">&nbsp;</span>`;
    }

    return `<span style="animation-delay: ${delay}ms">${x}</span>`;
  });

  el.innerHTML = textCode.join("");
});

function play() {
  document.querySelector(".clouds-left").style.transform = "translateX(-60%)";

  document.querySelector(".clouds-right").style.transform = "translateX(60%)";

  setTimeout(() => {
    document.querySelector("main").style.transform = "translateY(-150%)";
  }, 100);

  setTimeout(() => {
    window.location.href = "game.html";
  }, 800);
}
