const btn = document.querySelector("button");
btn.addEventListener("mouseover", function () {
  console.log("moused over");
  const newWidth = Math.floor(Math.random() * window.innerWidth);
  const newHeight = Math.floor(Math.random() * window.innerHeight);
  btn.style.left = `${newWidth}px`;
  btn.style.top = `${newHeight}px`;
});

btn.addEventListener("click", function () {
  btn.innerText = "YOU GOT ME";
  document.body.style.backgroundColor = "green";
});
