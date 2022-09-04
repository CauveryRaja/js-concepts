class HeadingView {
    constructor(controller) {
        // super();

        const headingElm = document.getElementById('heading');
        console.log(headingElm)
        headingElm.textContent = controller.headingModel
        headingElm.addEventListener('click', controller.eventListener);
    }
}

export default HeadingView;