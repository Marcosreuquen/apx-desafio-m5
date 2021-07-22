import { STATE } from "../../state";

export function PlayPage(params) {
  const div = document.createElement("div");
  div.className = "page";
  const style = document.createElement("style");
  style.innerHTML = `
  *{
    box-sixing: border-box;
  }
  .page{
    margin: 0 auto;
    max-width: 336px;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  .hands{
    max-width: 336px;
    display: flex;
    justify-content: space-around;
    align-self: end;
  }
  .timer{
    display:flex;
    height: 243px;
    width: 243px;
    font-weight: 400;
    font-size: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'VT323';
  }
    `;
  //TIME DECLARED
  let timer = 3;
  //content
  div.innerHTML = `
  <div class="timer">${timer}</div>
  <div class="hands">
    <hand-comp type="scissors" status="normal"></hand-comp>
    <hand-comp type="stone" status="normal"></hand-comp>
    <hand-comp type="paper" status="normal"></hand-comp>
  </div>
  `;

  //HANDS selection
  const manos = div.querySelector(".hands").children;
  for (const mano of manos) {
    mano.addEventListener("handEvent", (e: any) => {
      const typeSelected = e.detail.type;
      //refresh STATE
      STATE.setMove(typeSelected);

      for (const m of manos) {
        if (m.getAttribute("type") !== typeSelected) {
          m.shadowRoot.querySelector(".hand").classList.add("inactive");
        }
        if (m.getAttribute("type") === typeSelected) {
          m.shadowRoot.querySelector(".hand").classList.add("active");
        }
      }
    });
  }
  //RUN TIME
  const intervalID = setInterval(() => {
    timer--;
    div.querySelector(".timer").textContent = String(timer);
    if (timer === 0) {
      //Llegó a 0
      clearInterval(intervalID);
      //CHECK USER SELECTION
      if (STATE.data.currentGame.myPlay) {
        //SHOW MACHINE MOVE
        div.querySelector(".timer").innerHTML = `
        <hand-comp type="${STATE.machineMove()}" status="machine"></hand-comp>
        `;
        //DELETE INACTIVES
        div.querySelector(".hands").innerHTML = `
        <hand-comp type="${STATE.data.currentGame.myPlay}" status="selected"></hand-comp>
        `;
        setTimeout(() => {
          STATE.saveData();
          params.goTo("/apx-desafio-m5/result");
        }, 3000);
      } else {
        params.goTo("/apx-desafio-m5/rules");
      }
    }
  }, 1000);

  div.appendChild(style);
  return div;
}
