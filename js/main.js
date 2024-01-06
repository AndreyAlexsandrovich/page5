$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, .item').toggleClass('active');
        $('body').toggleClass('lock');
    })
});


const rightBtn = document.querySelector('.right')
const leftBtn = document.querySelector('.left')
const imgCoursel = document.querySelectorAll('.img-coursel')

let i = 0;

rightBtn.addEventListener('click', () => {
    coursel('right')

})
leftBtn.addEventListener('click', () => {
    coursel('left')

})
function coursel(direction) {
    if (direction === 'right') {
        i = (i + 1) % imgCoursel.length;

    } else if (direction === 'left') {
        i = (i - 1 + imgCoursel.length) % imgCoursel.length;

    }
    imgCoursel.forEach((img, index) => {
        if (index === i) {
            img.style.display = 'block';
            img.classList.add('slide-in-right');
        } else {
            img.style.display = 'none';

        }
    });

}
document.addEventListener('DOMContentLoaded', () => {
    let block = document.querySelector('.progress');
    let valueDisplays = document.querySelectorAll('.number');
    let interval = 1000;
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let hero = block.offsetHeight / 2;
        if (scrollTop >= hero) {
            valueDisplays.forEach((valueDisplays) => {
                let start = 0;
                let end = parseInt(valueDisplays.getAttribute("data-max"))
                let duration = Math.floor(interval / end)
                let counter = setInterval(function () {
                    start += 1;
                    valueDisplays.textContent = start
                    if (start == end) {
                        clearInterval(counter)
                    }
                })
            })
        }
    })
})





