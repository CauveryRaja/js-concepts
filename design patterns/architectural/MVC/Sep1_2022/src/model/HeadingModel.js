import Observable from "./Observable.js";

class HeadingModel extends Observable {
    constructor() {
        super();
        this.headingText = 'hello';
    }
}

export default HeadingModel;