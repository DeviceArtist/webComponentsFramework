export const Card = {
    name: "card",
    setup: (shadow) => {
        const wrapper = document.createElement("div");
        wrapper.setAttribute('class', 'wrapper');

        shadow.appendChild(wrapper);
        const title_slot = document.createElement("slot");
        title_slot.name = "title";
        title_slot.classList.add("title");

        const sub_title_slot = document.createElement("slot");
        sub_title_slot.name = "sub_title";
        sub_title_slot.classList.add("sub_title");

        const body_slot = document.createElement("slot");
        body_slot.name = "body";
        body_slot.classList.add("body");

        wrapper.appendChild(title_slot);
        wrapper.appendChild(sub_title_slot);
        wrapper.appendChild(body_slot);
    },
    onAttributeChange: (key, value, shadow, attr) => {

    }
}
