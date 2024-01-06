const accordion = Array.from(document.querySelectorAll('.accordion'));

accordion.forEach((box) => {
    box.addEventListener('click', label)
});

function label(event) {
    event.preventDefault();
    let boxs = event.target.closest(".box")
    let currentBox = event.target.nextElementSibling;
    boxs.classList.toggle("like");
    if (boxs.classList.contains("like")) { 
        currentBox.style.maxHeight = currentBox.scrollHeight + "px";
    } else { 
        currentBox.style.maxHeight = 0;
    }
}

