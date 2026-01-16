export const Button = {
    name: "button",
    setup: (shadow, attr) => {
        const wrapper = document.createElement("button");
        wrapper.setAttribute('class', 'wrapper');
        shadow.appendChild(wrapper);
        const slot = document.createElement("slot");
        slot.classList.add("text");
        wrapper.appendChild(slot);
        wrapper.classList.add(attr("color"));
    },
    onAttributeChange: (key, value, shadow, attr) => {
        console.log(key, value)
        switch (key) {
            case "type":
                switch (value) {
                    case "float":
                        const wrapper = shadow.querySelector(".wrapper");
                        wrapper.className = "wrapper float"
                        wrapper.style.left = attr("left");
                        wrapper.style.right = attr("right");
                        wrapper.style.top = attr("top");
                        wrapper.style.bottom = attr("bottom");
                        wrapper.innerHTML = "";

                        console.log(attr("pop"),attr("debug"));

                        if (attr("pop") !== null) {
                            wrapper.setAttribute("pop", attr("pop"));
                            // switch (attr("pop")) {
                            //     case "left":

                            //         break;
                            //     case "right":
                            //         break;
                            //     case "up":
                            //         break;
                            //     case "down":
                            //         break;
                            //     default:
                            //         break;
                            // }
                            const button_slot = document.createElement("slot");
                            button_slot.name = "button";
                            button_slot.className = "button";

                            const pop_slot = document.createElement("slot");
                            pop_slot.name = "pop";
                            if (attr("debug")) {
                                pop_slot.className = "pop debug"
                            } else {
                                pop_slot.className = "pop"
                            }

                            wrapper.appendChild(button_slot);
                            wrapper.appendChild(pop_slot);
                        } else {
                            const slot = document.createElement("slot");
                            wrapper.appendChild(slot);
                        }

                        break;
                    case "flat":
                        shadow.querySelector(".wrapper").classList = "wrapper flat";
                        break;
                }
                break;
            default:
                break;
        }
    }
}
