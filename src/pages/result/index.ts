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
  .loose{
    background-color: #894949aa;
  }
  .win{
    background-color: #888949aa;
  }
  .page{
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Score{
    width: 259px;
    height: 217px;
    background-color: #FFF;
    border:10px solid #000;
    border-radius: 10px;
    margin: 10px;
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
  `;

  let result;
  if (STATE.whoWins()) {
    result = "win";
  } else {
    result = "loose";
  }

  document.body.className = result;

  div.innerHTML = `
  <div class="page">
    <img src="${imgSrc[result]}">
    <div class="Score">
      <h4>Score</h4>
      <p>Vos: ${STATE.getScore().win}</p>
      <p>Máquina: ${STATE.getScore().loose}</p>
    </div>
    <buttons-el content="Volver a Jugar"></buttons-el>
    </div>
  `;
  div.appendChild(style);

  div.querySelector("buttons-el").addEventListener("buttonEvent", (e: any) => {
    params.goTo(e.detail.route + "welcome");
  });

  STATE.saveData();
  return div;
}
