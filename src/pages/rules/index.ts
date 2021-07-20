export function RulesPage(params) {
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
    grid-template-rows: repeat(3, 1fr);
  }
  .hands{
    max-width: 336px;
    display: flex;
    justify-content: space-around;
    align-self: end;
  }
  `;
  div.innerHTML = `
  <text-el type="body" content="Presioná jugar
  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos."></text-el>
  <buttons-el content="¡Jugar!"></buttons-el>
  <div class="hands">
    <hand-comp type="scissors" status="normal"></hand-comp>
    <hand-comp type="stone" status="normal"></hand-comp>
    <hand-comp type="paper" status="normal"></hand-comp>
  </div>
  `;
  div.appendChild(style);
  div.querySelector("buttons-el").addEventListener("buttonEvent", (e: any) => {
    params.goTo(e.detail.route + "play");
  });
  return div;
}
