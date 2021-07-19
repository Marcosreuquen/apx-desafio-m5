import { STATE } from "../../state";

export function WelcomePage(params) {
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
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 5%;
  }
  .hands{
    max-width: 336px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
  }
  `;
  div.innerHTML = `
  <text-el type="title" content="Piedra papel o tijera"></text-el>
  <buttons-el content="Empezar"></buttons-el>
  <div class="hands">
    <hand-comp type="scissors" status="normal"></hand-comp>
    <hand-comp type="stone" status="normal"></hand-comp>
    <hand-comp type="paper" status="normal"></hand-comp>
  </div>
  `;
  div.appendChild(style);
  div.querySelector("buttons-el").addEventListener("buttonEvent", (e: any) => {
    params.goTo(e.detail.route + "rules");
  });

  return div;
}
