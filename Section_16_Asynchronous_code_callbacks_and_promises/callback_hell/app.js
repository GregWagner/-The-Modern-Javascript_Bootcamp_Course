const btn = document.querySelector("button");

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  const bodyBoundary = document.body.clientWidth;
  const eRight = element.getBoundingClientRect().right;
  const currentLeft = element.getBoundingClientRect().left;
  if (eRight + amount > bodyBoundary) {
    onFailure();
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${amount + currentLeft}px)`;
      onSuccess();
    }, delay);
  }
};

moveX(btn, 100, 1000, () => {
  moveX(
    btn,
    100,
    1000,
    () => {
      moveX(
        btn,
        100,
        1000,
        () => {
          moveX(
            btn,
            100,
            1000,
            () => {
              moveX(
                btn,
                100,
                1000,
                () => {
                  alert("Last Move");
                },
                () => {
                  alert("Cannot move further");
                }
              );
            },
            () => {
              alert("Cannot move further");
            }
          );
        },
        () => {
          alert("Cannot move further");
        }
      );
    },
    () => {
      alert("Cannot move further");
    }
  );
});

/*
setTimeout(() => {
  btn.style.transform = `translateX(100px)`;
  setTimeout(() => {
    btn.style.transform = `translateX(200px)`;
    setTimeout(() => {
      btn.style.transform = `translateX(300px)`;
      setTimeout(() => {
        btn.style.transform = `translateX(400px)`;
        setTimeout(() => {
          btn.style.transform = `translateX(500px)`;
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/
