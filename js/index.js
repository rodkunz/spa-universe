import { Router } from "./router.js";
import { Backgrounds } from "./events.js";
import { bgHome, bgUniverse, bgExploration } from "./elements.js";

const router = new Router();
router.add("/", "../pages/home.html");
router.add("/universe", "../pages/universe.html");
router.add("/exploration", "../pages/exploration.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = (href) => router.route(href);

const backgrounds = Backgrounds({
  bgHome,
  bgUniverse,
  bgExploration,
});

if (bgHome) {
  bgHome.addEventListener("click", function () {
    backgrounds.backgroundHome();
  });
}

if (bgUniverse) {
  bgUniverse.addEventListener("click", function () {
    backgrounds.backgroundUniverse();
  });
}

if (bgExploration) {
  bgExploration.addEventListener("click", function () {
    backgrounds.backgroundExploration();
  });
}
