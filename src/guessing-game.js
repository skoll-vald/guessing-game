class GuessingGame {
    constructor() {
        this.min_val = null;
        this.max_val = null;
        this.guess_val = null;
    }
    
    setRange(min, max) {
        this.min_val = min;
        this.max_val = max;
    }
    
    guess() {
        this.guess_val = Math.floor((this.min_val + this.max_val) / 2);
        return this.guess_val;
    }
    
    lower() {
        this.max_val = this.guess_val + 1;
    }
    
    greater() {
        this.min_val = this.guess_val;
    }
}


module.exports = GuessingGame;
