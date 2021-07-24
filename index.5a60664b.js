var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequire6f0b;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){let a=n[t];delete n[t];let o={id:t,exports:{}};return e[t]=o,a.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequire6f0b=a);const o={data:{currentGame:{computerPlay:"",myPlay:""},history:[]},getState(){return localStorage.getItem("data")&&(this.data=JSON.parse(localStorage.getItem("data"))),this.data},setMove(t){this.data.currentGame.myPlay=t,this.saveData()},PushToHistory(t){this.data.history.push(t)},whoWins(){const t=this.data.currentGame.computerPlay,e=this.data.currentGame.myPlay;return["scissors"===e&&"paper"===t,"paper"===e&&"stone"===t,"stone"===e&&"scissors"===t].includes(!0)?(this.PushToHistory(!0),!0):(this.PushToHistory(!1),!1)},machineMove(){const t=["scissors","paper","stone"];let e=t[Math.floor(3*Math.random())+0];if(e===this.data.currentGame.myPlay){e=t[Math.floor(3*Math.random())+0]}return this.saveData(),this.data.currentGame.computerPlay=e,e},getScore(){let t=0,e=0;for(const n of this.data.history)!0===n&&(t+=1),!1===n&&(e+=1);return{win:t,loose:e}},saveData(){localStorage.setItem("data",JSON.stringify(this.data))},cleanData(){localStorage.setItem("data",JSON.stringify({currentGame:{computerPlay:"",myPlay:"",winner:!0},history:[]}))}};a.register("5Ycpt",(function(t,e){t.exports=a("vNK0r").getBundleURL()+"loose.6da996ab.svg"})),a.register("vNK0r",(function(t,e){var n,a,o,s,r;n=t.exports,a="getBundleURL",o=()=>r,s=t=>r=t,Object.defineProperty(n,a,{get:o,set:s,enumerable:!0,configurable:!0});var i=null;function d(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(){return i||(i=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return d(t[0])}return"/"}()),i}})),a.register("F6cZ1",(function(t,e){t.exports=a("vNK0r").getBundleURL()+"win.f6e1c764.svg"}));const s={loose:a("5Ycpt"),win:a("F6cZ1")};const r=[{path:/\/apx-desafio-m5\/welcome/,component:function(t){const e=document.createElement("div");e.className="page";const n=document.createElement("style");return n.innerHTML="\n  *{\n    box-sixing: border-box;\n  }\n  .page{\n    margin: 0 auto;\n    max-width: 336px;\n    height: 100%;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding-top: 5%;\n  }\n  .hands{\n    max-width: 336px;\n    display: flex;\n    justify-content: space-around;\n    align-self: end;\n  }\n  ",e.innerHTML='\n  <text-el type="title" content="Piedra papel o tijera"></text-el>\n  <buttons-el content="Empezar"></buttons-el>\n  <div class="hands">\n    <hand-comp type="scissors" status="normal"></hand-comp>\n    <hand-comp type="stone" status="normal"></hand-comp>\n    <hand-comp type="paper" status="normal"></hand-comp>\n  </div>\n  ',e.appendChild(n),e.querySelector("buttons-el").addEventListener("buttonEvent",(e=>{t.goTo(e.detail.route+"rules")})),e}},{path:/\/apx-desafio-m5\/rules/,component:function(t){const e=document.createElement("div");e.className="page";const n=document.createElement("style");return n.innerHTML="\n  *{\n    box-sixing: border-box;\n  }\n  .page{\n    margin: 0 auto;\n    max-width: 336px;\n    height: 100%;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n  }\n  .hands{\n    max-width: 336px;\n    display: flex;\n    justify-content: space-around;\n    align-self: end;\n  }\n  ",e.innerHTML='\n  <text-el type="body" content="Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos."></text-el>\n  <buttons-el content="¡Jugar!"></buttons-el>\n  <div class="hands">\n    <hand-comp type="scissors" status="normal"></hand-comp>\n    <hand-comp type="stone" status="normal"></hand-comp>\n    <hand-comp type="paper" status="normal"></hand-comp>\n  </div>\n  ',e.appendChild(n),e.querySelector("buttons-el").addEventListener("buttonEvent",(e=>{t.goTo(e.detail.route+"play")})),e}},{path:/\/apx-desafio-m5\/play/,component:function(t){const e=document.createElement("div");e.className="page";const n=document.createElement("style");n.innerHTML="\n  *{\n    box-sixing: border-box;\n  }\n  .page{\n    margin: 0 auto;\n    max-width: 336px;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n  }\n  .hands{\n    max-width: 336px;\n    display: flex;\n    justify-content: space-around;\n    align-self: end;\n  }\n  .timer{\n    display:flex;\n    height: 243px;\n    width: 243px;\n    font-weight: 400;\n    font-size: 200px;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    font-family: 'VT323';\n  }\n    ";let a=3;e.innerHTML=`\n  <div class="timer">${a}</div>\n  <div class="hands">\n    <hand-comp type="scissors" status="normal"></hand-comp>\n    <hand-comp type="stone" status="normal"></hand-comp>\n    <hand-comp type="paper" status="normal"></hand-comp>\n  </div>\n  `;const s=e.querySelector(".hands").children;for(const t of s)t.addEventListener("handEvent",(t=>{const e=t.detail.type;o.setMove(e);for(const t of s)t.getAttribute("type")!==e&&t.shadowRoot.querySelector(".hand").classList.add("inactive"),t.getAttribute("type")===e&&t.shadowRoot.querySelector(".hand").classList.add("active")}));const r=setInterval((()=>{a--,e.querySelector(".timer").textContent=String(a),0===a&&(clearInterval(r),o.data.currentGame.myPlay?(e.querySelector(".timer").innerHTML=`\n        <hand-comp type="${o.machineMove()}" status="machine"></hand-comp>\n        `,e.querySelector(".hands").innerHTML=`\n        <hand-comp type="${o.data.currentGame.myPlay}" status="selected"></hand-comp>\n        `,setTimeout((()=>{o.saveData(),t.goTo("/apx-desafio-m5/result")}),3e3)):t.goTo("/apx-desafio-m5/rules"))}),1e3);return e.appendChild(n),e}},{path:/\/apx-desafio-m5\/result/,component:function(t){const e=document.createElement("div");e.className="page";const n=document.createElement("style");let a;return n.innerHTML="\n  *{\n    box-sixing: border-box;\n  }\n  .img{\n    width: 220px;\n    height: 220px;\n    margin: 0 auto;\n  }\n  .loose{\n    background-color: #894949aa;\n  }\n  .win{\n    background-color: #888949aa;\n  }\n  .page{\n    margin: 0 auto;\n    max-width: 336px;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    align-items: center;\n    justify-content: center;\n  }\n  .Score{\n    width: 259px;\n    height: 217px;\n    background-color: #FFF;\n    border:10px solid #000;\n    border-radius: 10px;\n    font-family: 'VT323';\n  }\n  .Score>h4{\n    font-weight: 400;\n    font-size: 55px;\n    text-align: center;\n    margin: 5px;\n  }\n  .Score>P{\n    font-weight: 400;\n    font-size: 45px;\n    text-align: right;\n    margin: 5px;\n  }\n  .buttons{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n  ",a=o.whoWins()?"win":"loose",document.body.className=a,e.innerHTML=`\n    <img class="img" src="${s[a]}">\n    <div class="Score">\n      <h4>Score</h4>\n      <p class="vos">Vos: ${o.getScore().win}</p>\n      <p class="maquina">Máquina: ${o.getScore().loose}</p>\n    </div>\n    <div class="buttons">\n      <buttons-el class="play-again" content="Volver a Jugar"></buttons-el>\n      <buttons-el class="clean-score" content="Limpiar puntaje"></buttons-el>\n    </div>\n  `,e.appendChild(n),e.querySelector(".play-again").addEventListener("buttonEvent",(e=>{t.goTo(e.detail.route+"play")})),e.querySelector(".clean-score").addEventListener("buttonEvent",(e=>{o.cleanData(),t.goTo(e.detail.route+"rules")})),o.saveData(),e}}];a.register("2sQOr",(function(t,e){t.exports=a("vNK0r").getBundleURL()+"piedra.578f3049.svg"})),a.register("6eBbW",(function(t,e){t.exports=a("vNK0r").getBundleURL()+"papel.411bce94.svg"})),a.register("4tk4d",(function(t,e){t.exports=a("vNK0r").getBundleURL()+"tijera.0403a6bb.svg"}));const i={stone:a("2sQOr"),paper:a("6eBbW"),scissors:a("4tk4d")};!function(){class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent="\n      .hand{\n        width: 104px;\n        height: 200px;\n      }\n      .hand>img{\n        width: 100%;\n        height: 100%;\n        bottom: -10%;\n        object-fit: contain;\n        transform: translateY(30px);\n      }\n      .inactive{\n        opacity: 60%;\n        transform: translateY(30px);\n        transition: 0.5s;\n      }\n      .active{\n        transform: translateY(-30px);\n        \n        transition: 0.5s;\n      }\n      .machine-hand{\n        width: 159px;\n        height: 356px;\n        top: 0%;\n        object-fit: contain;\n        transform: rotate(180deg);\n      }\n      .selected{\n        width: 159px;\n        height: 356px;\n        transform: translateY(5px);\n      }\n      ",this.shadow.appendChild(t),this.render()}addCallbacks(){this.shadow.querySelector(".hand").addEventListener("click",(t=>{const e=new CustomEvent("handEvent",{detail:{type:this.getAttribute("type")}});this.dispatchEvent(e)}))}render(){const t=this.getAttribute("type"),e=document.createElement("div");document.createElement("img").src=e.innerHTML=`\n      <img src="${i[t]}"/>\n      `,e.classList.add("hand"),"machine"===this.getAttribute("status")&&e.classList.add("machine-hand"),"selected"===this.getAttribute("status")&&e.classList.add("selected"),this.shadow.appendChild(e),this.addCallbacks()}}customElements.define("hand-comp",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent="\n      .title{\n        font-family: 'Odibee Sans';\n        font-weight: 700;\n        font-size: 90px;\n        color: #009048;\n        margin: 0 auto;\n      }\n      .body{\n        font-family: 'VT323';\n        font-weight: 600;\n        font-size: 40px;\n        color: #000;\n      }\n      ",this.shadow.appendChild(t),this.render()}render(){const t=this.getAttribute("type"),e=this.getAttribute("content");let n;"title"==t?(n=document.createElement("h2"),n.classList.add("title")):(n=document.createElement("h4"),n.classList.add("body")),n.textContent=e,this.shadow.appendChild(n)}}customElements.define("text-el",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent="\n      .button{\n        box-sizing: border-box;\n        width: 100%;\n        height: 87px;\n        background-color: #006cfc;\n        color: #d8fcfc;\n        font-family: 'VT323';\n        font-size: 45px;\n        border-radius: 10px;\n        border: 10px solid #001997;\n        text-align: center;\n        padding: 10px 0;\n      }\n      .button:hover{\n        cursor:pointer;\n      }\n      ",this.shadow.appendChild(t),this.render()}addCallbacks(){this.shadow.querySelector(".button").addEventListener("click",(t=>{const e=new CustomEvent("buttonEvent",{detail:{route:"/apx-desafio-m5/"}});this.dispatchEvent(e)}))}render(){const t=this.getAttribute("content"),e=document.createElement("div");e.className="button",e.textContent=t,this.shadow.appendChild(e),this.addCallbacks()}}customElements.define("buttons-el",t)}(),function(t){function e(t){history.pushState({},"",t),n(t)}function n(n){for(const a of r)if(a.path.test(n)){const n=a.component({lastState:o.getState(),goTo:e});t.firstChild&&t.firstChild.remove(),t.appendChild(n)}}"/apx-desafio-m5/"==location.pathname?e("/apx-desafio-m5/welcome"):n(location.pathname),window.onpopstate=function(t){n(location.pathname)}}(document.querySelector("#root"));
//# sourceMappingURL=index.5a60664b.js.map