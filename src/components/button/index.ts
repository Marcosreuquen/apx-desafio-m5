//  <buttons content="Empezar"></buttons>

export function initButtonComp() {
  class ButtonComp extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = `
      .button{
        box-sizing: border-box;
        width: 100%;
        height: 87px;
        background-color: #006cfc;
        color: #d8fcfc;
        font-family: 'VT323';
        font-size: 45px;
        border-radius: 10px;
        border: 10px solid #001997;
        text-align: center;
        padding: 10px 0;
      }
      .button:hover{
        cursor:pointer;
      }
      `;
      this.shadow.appendChild(style);
      this.render();
    }
    addCallbacks() {
      this.shadow.querySelector(".button").addEventListener("click", (e) => {
        const event = new CustomEvent("buttonEvent", {
          detail: {
            route: "/apx-desafio-m5/",
          },
        });
        this.dispatchEvent(event);
      });
    }
    render() {
      const content = this.getAttribute("content");
      const button = document.createElement("div");
      button.className = "button";

      button.textContent = content;
      this.shadow.appendChild(button);
      this.addCallbacks();
    }
  }
  customElements.define("buttons-el", ButtonComp);
}
