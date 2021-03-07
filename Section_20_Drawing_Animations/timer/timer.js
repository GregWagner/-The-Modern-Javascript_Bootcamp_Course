class Timer {
    // Pass in DOM elements
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        // callbacks are optional
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        // setup Event Listners
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    // Event Listener for Start button
    // Use arrow function to make sure 'this' is setup correctly
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining); // will be starting duration
        }
        this.tick(this.timeRemaining); // call manually to avoid 1 second delay
        this.intervalID = setInterval(this.tick, 20);
    }

    // Event Listener for Start button
    // Use arrow function to make sure 'this' is setup correctly
    pause = () => {
        clearInterval(this.intervalID);
    }

    tick = () => {
        // uses getter and setter
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}