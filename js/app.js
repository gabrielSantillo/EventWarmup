function addTag(details) {
    details[`target`][`innerHTML`] = details[`target`][`innerHTML`] + `<h3>SOMETHING</h3>`;
}

let h1_tag_over = document.getElementById(`h1_tag`);
h1_tag_over.addEventListener(`mouseover`, addTag);


function removeTag(details) {
    details[`target`][`style`][`color`] = `green`;
}

let h1_Tag_exit = document.getElementById(`h1_tag`);
h1_Tag_exit.addEventListener(`click`, removeTag);