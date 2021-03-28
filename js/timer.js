class Timer {
  constructor(durationInput, startBtn, pauseBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    this.startBtn.addEventListener("click", this.onStart);
    this.pauseBtn.addEventListener("click", this.onPause);

    if (callbacks) {
      this.start = callbacks.start;
      this.tick = callbacks.tick;
      this.done = callbacks.done;
    }
  }

  onStart = () => {
    this.start ? this.start(this.getTimeReminding) : undefined;

    this.onTick();
    this.interval = setInterval(this.onTick, 20);
  };

  onPause = () => {
    clearInterval(this.interval);
  };

  onTick = () => {
    if (this.getTimeReminding <= 0) {
      this.onPause();
      this.done ? this.done() : undefined;
    } else {
      this.setTimeReminding = this.getTimeReminding - 0.02;
      this.tick ? this.tick(this.getTimeReminding) : undefined;
    }
  };

  get getTimeReminding() {
    return this.durationInput.value;
  }

  set setTimeReminding(timer) {
    this.durationInput.value = timer.toFixed(2);
  }
}
