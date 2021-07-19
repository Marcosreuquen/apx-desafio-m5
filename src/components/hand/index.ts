const tipos = {
  stone: require("url:../../assets/piedra.svg"),
  paper: require("url:../../assets/papel.svg"),
  scissors: require("url:../../assets/tijera.svg"),
};

export function initHandComp() {
  class HandComp extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
      super();

      this.shadow = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = `
      .hand{
        width: 104px;
        height: 200px;
      }
      .hand>img{
        width: 100%;
        height: 100%;
        bottom: -10%;
        object-fit: contain;
        transform: translateY(30px);
      }
      .inactive{
        opacity: 80%;
        transform: translateY(30px);
        transition: 0.5s;
      }
      .active{
        transform: translateY(-30px);
        
        transition: 0.5s;
      }
      .machine-hand{
        width: 159px;
        height: 356px;
        top: 0%;
        object-fit: contain;
        transform: rotate(180deg);
      }
      .selected{
        width: 159px;
        height: 356px;
        transform: translateY(5px);
      }
      `;
      this.shadow.appendChild(style);
      this.render();
    }
    addCallbacks() {
      this.shadow.querySelector(".hand").addEventListener("click", (e) => {
        const event = new CustomEvent("handEvent", {
          detail: {
            type: this.getAttribute("type"),
          },
        });
        this.dispatchEvent(event);
      });
    }
    render() {
      const tipo = this.getAttribute("type");

      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = div.innerHTML = `
      <img src="${tipos[tipo]}"/>
      `;
      div.classList.add("hand");

      if (this.getAttribute("status") === "machine") {
        div.classList.add("machine-hand");
      }
      if (this.getAttribute("status") === "selected") {
        div.classList.add("selected");
      }
      this.shadow.appendChild(div);
      this.addCallbacks();
    }
  }
  customElements.define("hand-comp", HandComp);
}
