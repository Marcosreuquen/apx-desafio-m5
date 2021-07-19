type Play = "scissors" | "paper" | "stone";
type Game = {
  computerPlay: Play;
  myPlay: Play;
};

const STATE = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: [],
  },

  getState() {
    //this.data = localStorage.getItem("data");
    return this.data;
  },

  setMove(move: Play) {
    this.data.currentGame.myPlay = move;
  },

  PushToHistory(winner: boolean) {
    this.data.history.push(winner);
  },

  whoWins() {
    const computerPlay = this.data.currentGame.computerPlay;
    const myPlay = this.data.currentGame.myPlay;
    const game = [
      myPlay == "scissors" && computerPlay == "paper",
      myPlay == "paper" && computerPlay == "stone",
      myPlay == "stone" && computerPlay == "scissors",
    ];
    if (game.includes(true)) {
      this.PushToHistory(true);
      return true;
    } else {
      this.PushToHistory(false);
      return false;
    }
  },

  machineMove() {
    const moves = ["scissors", "paper", "stone"];
    const index = Math.floor(Math.random() * (3 - 0)) + 0;
    const computerPlay = moves[index];
    this.data.currentGame.computerPlay = computerPlay;
    return computerPlay;
  },

  getScore() {
    let win: number = 0;
    let loose: number = 0;

    for (const game of this.data.history) {
      if (game) {
        win += 1;
      }
      if (!game) {
        loose += 1;
      }
    }

    return {
      win: win,
      loose: loose,
    };
  },
  saveData() {
    localStorage.setItem("data", JSON.stringify(this.data));
  },
};

//state.setMove("piedra");

export { STATE };
