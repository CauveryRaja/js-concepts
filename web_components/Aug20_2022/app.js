class Popover extends HTMLElement {
    constructor() {
        super();

        // Creating Shadow DOM
        this.attachShadow({mode: 'open'});

        // Creating HTML content
        let elm = document.createElement('p');
        elm.setAttribute('class', 'popover');
        elm.setAttribute('tabIndex', 0);
        elm.textContent = this.getAttribute('data-text');

        // Creating styles only to Shadow DOM
        let style = document.createElement('style');
        style.textContent = `.popover { background-color: lightgrey }`

        // Fetching template
        let template = document.getElementById('my-paragraph');

        // Attach created elements to the Shadow DOM
        this.shadowRoot.append(style, elm, template.content);
    }
}

customElements.define('pop-over', Popover);