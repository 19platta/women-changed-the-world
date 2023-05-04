import { WOMEN } from './content.js'

let counter = 0
const elements = [document.getElementById("col-1"), document.getElementById("col-2"),
    document.getElementById("col-3"), document.getElementById("col-4"),
    document.getElementById("col-5")]
for (const woman in WOMEN) {
    const outer_div = elements[counter % 5];
    const item_wrapper = document.createElement("a");
    const outer_text_wrapper = document.createElement("div");
    const text_wrapper = document.createElement("div");
    const name = document.createElement("h3");
    const bio = document.createElement("p");
    const image = document.createElement("img");

    item_wrapper.classList.add("image-with-hover-overlay");
    outer_text_wrapper.classList.add("image-hover-overlay", "background-primary");
    text_wrapper.classList.add("image-hover-overlay-content", "text-center", "padding-2x");
    name.classList.add("text-white", "text-size-20", "margin-bottom-10");
    bio.classList.add("text-white", "text-size-14", "margin-bottom-20");
    image.classList.add("full-img");

    item_wrapper.href = WOMEN[woman]["wikipedia"];
    item_wrapper.title = woman;
    image.src = WOMEN[woman]["img_path"];
    image.alt = "Portrait of " + woman;

    name.textContent = woman;
    bio.textContent = WOMEN[woman]["bio"];

    text_wrapper.append(name, bio);
    outer_text_wrapper.append(text_wrapper);
    item_wrapper.append(outer_text_wrapper, image);
    outer_div.append(item_wrapper);
    console.log(woman);
    counter += 1;
}