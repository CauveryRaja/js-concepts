import Observer from "./Observer.js";

class HeadingView extends Observer {
    constructor(controller) {
        super();

        this.controller = controller;
        this.headingElm = document.getElementById('heading');
        this.headingElm.textContent = controller.headingModel;
        this.headingElm.addEventListener('click', controller.eventListener);
        this.controller.model.addObserver(this);
    }

    update(model) {
        this.headingElm.textContent = model.headingText;
    }
}

export default HeadingView;