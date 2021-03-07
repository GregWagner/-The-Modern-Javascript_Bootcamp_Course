const btn = document.querySelector("button");

// This function moves an element "amount" number of pixels after a delay.
// If the element will stay on screen, we move the element and call the onSuccess callback function
// If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elementRight = element.getBoundingClientRect().right;
    const currentLeft = element.getBoundingClientRect().left;
    if (elementRight + amount > bodyBoundary) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currentLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

/* Before onFailure
moveX(btn, 100, 1000, () => {
  moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000, () => {
      moveX(btn, 100, 1000, () => {
        moveX(btn, 1000, 1000);
      });
    });
  });
});
*/

moveX(
  btn,
  100,
  1000,
  () => {
    // success
    moveX(
      btn,
      400,
      1000,
      () => {
        // success
        moveX(
          btn,
          700,
          1000,
          () => {
            console.log("REALLY, WE STILL HAVE SCREEN LEFT?");
          },
          () => {
            // failure
            alert("CANNOT MOVE FURTHER!");
          }
        );
      },
      () => {
        // failure
        alert("CANNOT MOVE FURTHER!");
      }
    );
  },
  () => {
    // failure
    alert("CANNOT MOVE FURTHER!");
  }
);

// Promise Intro
const willGetYouADog = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand < 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 5000);
});
willGetYouADog
  .then(() => {
    console.log("YAY, WE GOT A DOG");
  })
  .catch(() => {
    console.log("SORRY< NO DOG");
  });

// returning a promise
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};
makeDogPromise()
  .then(() => {
    console.log("YAY, WE GOT A DOG");
  })
  .catch(() => {
    console.log("SORRY< NO DOG");
  });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/about": "This is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 3000);
  });
};
fakeRequest("/about")
  .then((res) => {
    console.log("Status code", res.status);
    console.log("Data", res.data);
    console.log("FAKE REQUEST WORKED");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("FAKE REQUEST FAILED");
  });
fakeRequest("/dogs")
  .then((res) => {
    console.log("Status code", res.status);
    console.log("Data", res.data);
    console.log("FAKE REQUEST WORKED");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("FAKE REQUEST FAILED");
  });
