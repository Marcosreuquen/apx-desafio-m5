import { initRouter } from "./router";
import { initButtonComp } from "./components/button";
import { initHandComp } from "./components/hand";
import { initTextComp } from "./components/text";

(function () {
  initHandComp();
  initTextComp();
  initButtonComp();
  initRouter(document.querySelector("#root"));
})();
