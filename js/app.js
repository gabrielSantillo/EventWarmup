function addTag(details) {
    details[`target`].insertAdjacentHTML(`afterend`,`<h3 id="to_remove">secret hover</h3>`);
}

let h1_tag_over = document.getElementById(`h1_tag`);
h1_tag_over.addEventListener(`mouseover`, addTag);


function removeTag(details) {
    let rem = document.getElementById(`to_remove`);
    rem.remove();
}

let h1_Tag_exit = document.getElementById(`h1_tag`);
h1_Tag_exit.addEventListener(`mouseleave`, removeTag);