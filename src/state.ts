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
    if (localStorage.getItem("data")) {
      this.data = JSON.parse(localStorage.getItem("data"));
    }
    return this.data;
  },

  setMove(move: Play) {
    this.data.currentGame.myPlay = move;
    this.saveData();
  },

  PushToHistory(winner: boolean) {
    this.data.history.push(winner);
  },

  whoWins() {
    const computerPlay = this.data.currentGame.computerPlay;
    const myPlay = this.data.currentGame.myPlay;

    const game = [
      myPlay === "scissors" && computerPlay === "paper",
      myPlay === "paper" && computerPlay === "stone",
      myPlay === "stone" && computerPlay === "scissors",
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
    let computerPlay = moves[index];

    if (computerPlay === this.data.currentGame.myPlay) {
      const newIndex = Math.floor(Math.random() * (3 - 0)) + 0;
      computerPlay = moves[newIndex];
    }

    this.saveData();
    this.data.currentGame.computerPlay = computerPlay;
    return computerPlay;
  },

  getScore() {
    let win: number = 0;
    let loose: number = 0;

    for (const game of this.data.history) {
      if (game === true) {
        win += 1;
      }
      if (game === false) {
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
  cleanData() {
    localStorage.setItem(
      "data",
      JSON.stringify({
        currentGame: {
          computerPlay: "",
          myPlay: "",
          winner: true,
        },
        history: [],
      })
    );
  },
};

export { STATE };
