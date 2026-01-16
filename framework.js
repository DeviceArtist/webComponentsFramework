let baseDir = "";
class Base extends HTMLElement {
    loadExternalStyle(href) {
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", href);
        this.shadowRoot.appendChild(linkElem);
    }
    constructor(name) {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadExternalStyle(`${baseDir}/style/${name}.css`);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue == oldValue) {
            return false;
        }

        const attr = (k) => {
            return this.getAttribute(k);
        }
        // this.shadowRoot.querySelector('.wrapper').setAttribute(name, newValue);
        //onAttributeChange
        this.onAttributeChange(name, newValue, this.shadowRoot, attr);
    }
    static get observedAttributes() {
        return ["lang", "size", "type"];
    }
};

export const SetDir = (dir) => {
    baseDir = dir;
}

export const DisplayUI = (...UIs) => {
    UIs.forEach(UI => {
        customElements.define(`ui-${UI.name}`, class ChatBot extends Base {
            constructor() {
                super(UI.name, UI.ttributes);
                const shadow = this.shadowRoot;
                const attr = (k) => {
                    return this.getAttribute(k);
                }
                UI.setup(shadow, attr);
            }
            onAttributeChange(key, value, shadow, attr) {
                if (UI.onAttributeChange) {
                    UI.onAttributeChange(key, value, shadow, attr);
                }
            }
            connectedCallback() {

            }
        });

    });
}