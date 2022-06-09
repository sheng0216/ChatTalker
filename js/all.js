const people = document.querySelector(".js-people")
const baseNum = document.querySelector(".js-baseNum");
const basePrice = document.querySelector(".js-basePrice");
const proNum = document.querySelector(".js-proNum");
const proPrice = document.querySelector(".js-proPrice");
function init() {
    people.addEventListener("click", function (e) {
        e.preventDefault();
        let num = e.target.getAttribute("data-num");
        let multiple = e.target.getAttribute("data-multiple");
        console.log(multiple)
        console.log(num)
        if (num == null) {
            return
        }
        renderPeople(num, multiple)
    })
}
function renderPeople(num, multiple) {
    baseNum.innerHTML = `
        <p class="font-1 font-lg-2 text-secondary text-nowrap">${num} <sub
        class="font-6">位</sub>
        </p>
    `;
    basePrice.innerHTML = `
        <p class="font-1 font-lg-2 text-nowrap">${600 * multiple} <sub class="font-6">TWD</sub>
    `;
    proNum.innerHTML = `
        <p class="font-1 font-lg-2 text-secondary text-nowrap">${num} <sub
        class="font-6">位</sub>
        </p>
    `;
    proPrice.innerHTML = `
        <p class="font-1 font-lg-2 text-nowrap">${1600 * multiple} <sub class="font-6">TWD</sub>
    `;
}
init();