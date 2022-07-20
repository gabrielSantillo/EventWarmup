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

function toPurple(details) {
    if(details[`key`] === `p`) {
        document.body[`style`][`backgroundColor`] = `purple`;
    }
}

window.addEventListener(`keydown`, toPurple);

function toWhite(details) {
    if(details[`key`] === `p`) {
        document.body[`style`][`backgroundColor`] = `white`;
    }
}

window.addEventListener(`keyup`, toWhite);

function changeImg(details) {
    img.setAttribute(`src`, `https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`);
}

let img = document.querySelector(`img`);
img.addEventListener(`click`, changeImg);