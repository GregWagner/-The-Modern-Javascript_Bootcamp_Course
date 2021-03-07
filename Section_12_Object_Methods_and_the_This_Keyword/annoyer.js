const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop",
  ],
  pickPhrae() {
    const { phrases } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    // need to use arrow functions here or else this will
    // reference window instead of annoyer
    this.timerId = setInterval(() => {
      console.log(this.pickPhrae());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
  },
};

//console.log(annoyer.pickPhrae());
annoyer.start();
