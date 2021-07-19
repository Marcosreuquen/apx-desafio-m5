import { STATE } from "./state";
import { WelcomePage } from "./pages/welcome";
import { RulesPage } from "./pages/rules";
import { PlayPage } from "./pages/play";
import { ResultPage } from "./pages/result";

const routes = [
  {
    path: /\/apx-desafio-m5\/welcome/,
    component: WelcomePage,
  },
  {
    path: /\/apx-desafio-m5\/rules/,
    component: RulesPage,
  },
  {
    path: /\/apx-desafio-m5\/play/,
    component: PlayPage,
  },
  {
    path: /\/apx-desafio-m5\/result/,
    component: ResultPage,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route: any) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ lastState: STATE.getState(), goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }

        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/apx-desafio-m5/") {
    goTo("/apx-desafio-m5/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function (event) {
    handleRoute(location.pathname);
  };
}
