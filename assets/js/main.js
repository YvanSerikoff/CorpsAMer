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
