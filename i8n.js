export const I8n = {
    name: "i8n",
    setup: (shadow) => {
        const wrapper = document.createElement("span");
        wrapper.setAttribute('class', 'wrapper');
        shadow.appendChild(wrapper);
    },
    onAttributeChange: (key, value, shadow, attr) => {
        if (key === "lang") {
            if (attr("type") === "slot") {
                shadow.querySelector(".wrapper").innerHTML = `<slot name=${value}></slot>`;
            } else {
                shadow.querySelector(".wrapper").innerText = attr(value);
            }
        }
    }
}
