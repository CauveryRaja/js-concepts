import HeadingModel from "./src/model/HeadingModel.js";
import HeadingView from "./src/view/HeadingView.js";
import HeadingController from "./src/controller/HeadingController.js";

(function main() {
    const headingModel = new HeadingModel();
    const headingController = new HeadingController(headingModel);
    const headingView = new HeadingView(headingController);
})();