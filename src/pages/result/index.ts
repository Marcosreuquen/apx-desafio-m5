import { STATE } from "../../state";
const imgSrc = {
  loose: require("url:../../assets/loose.svg"),
  win: require("url:../../assets/win.svg"),
};

export function ResultPage(params) {
  const div = document.createElement("div");
  div.className = "page";
  const style = document.createElement("style");

  style.innerHTML = `
  *{
    box-sixing: border-box;
  }
  .img{
    width: 220px;
    height: 220px;
    margin: 0 auto;
  }
  .loose{
    background-color: #894949aa;
  }
  .win{
    background-color: #888949aa;
  }
  .page{
    margin: 0 auto;
    max-width: 336px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
  }
  .Score{
    width: 259px;
    height: 217px;
    background-color: #FFF;
    border:10px solid #000;
    border-radius: 10px;
    font-family: 'VT323';
  }
  .Score>h4{
    font-weight: 400;
    font-size: 55px;
    text-align: center;
    margin: 5px;
  }
  .Score>P{
    font-weight: 400;
    font-size: 45px;
    text-align: right;
    margin: 5px;
  }
  .buttons{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }
  `;

  let result;
  if (STATE.whoWins()) {
    result = "win";
  } else {
    result = "loose";
  }

  document.body.className = result;

  div.innerHTML = `
    <img class="img" src="${imgSrc[result]}">
    <div class="Score">
      <h4>Score</h4>
      <p class="vos">Vos: ${STATE.getScore().win}</p>
      <p class="maquina">Máquina: ${STATE.getScore().loose}</p>
    </div>
    <div class="buttons">
      <buttons-el class="play-again" content="Volver a Jugar"></buttons-el>
      <buttons-el class="clean-score" content="Limpiar puntaje"></buttons-el>
    </div>
  `;
  div.appendChild(style);

  div.querySelector(".play-again").addEventListener("buttonEvent", (e: any) => {
    params.goTo(e.detail.route + "play");
  });
  div
    .querySelector(".clean-score")
    .addEventListener("buttonEvent", (e: any) => {
      STATE.cleanData();
      params.goTo(e.detail.route + "rules");
    });

  STATE.saveData();
  return div;
}
