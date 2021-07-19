//<text-el type="title" content="Piedra papel o tijera"></text-el>

export function initTextComp() {
  class TextComp extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = `
      .title{
        font-family: 'Odibee Sans';
        font-weight: 700;
        font-size: 90px;
        color: #009048;
        margin: 0 auto;
      }
      .body{
        font-family: 'VT323';
        font-weight: 600;
        font-size: 40px;
        color: #000;
      }
      `;
      this.shadow.appendChild(style);
      this.render();
    }
    render() {
      const tipo = this.getAttribute("type");
      const content = this.getAttribute("content");

      let div;
      if (tipo == "title") {
        div = document.createElement("h2");
        div.classList.add("title");
      } else {
        div = document.createElement("h4");
        div.classList.add("body");
      }

      div.textContent = content;
      this.shadow.appendChild(div);
    }
  }
  customElements.define("text-el", TextComp);
}
