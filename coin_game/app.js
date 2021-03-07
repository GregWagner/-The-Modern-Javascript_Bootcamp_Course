function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keyup", function (evt) {
  if (evt.key === "ArrowDown") {
    const currentTop = extractPos(player.style.top);
    player.style.top = `${currentTop + 50}px`;
  } else if (evt.key === "ArrowUp") {
    const currentTop = extractPos(player.style.top);
    player.style.top = `${currentTop - 50}px`;
  } else if (evt.key === "ArrowRight") {
    const currentLeft = extractPos(player.style.left);
    player.style.left = `${currentLeft + 50}px`;
    player.style.transform = "scale(1, 1)";
  } else if (evt.key === "ArrowLeft") {
    const currentLeft = extractPos(player.style.left);
    player.style.left = `${currentLeft - 50}px`;
    player.style.transform = "scale(-1, 1)";
  }
  if (isTouching(player, coin)) {
    moveCoin();
  }
});

const extractPos = (pos) => {
  if (!pos) return 100;
  return Number(pos.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
 