class HeadingController {
    constructor(model) {
        this.model = model;

        this.eventListener = this.eventListener.bind(this);
    }

    eventListener(event) {
        switch(event.type) {
            case 'click': this.clickHandler(event.target);
                            break;
        }
    }

    clickHandler(target) {
        this.model.headingText = 'world';
        this.model.notify(this.model);
    }

    get headingModel() {
        return this.model.headingText;
    }
}

export default HeadingController;