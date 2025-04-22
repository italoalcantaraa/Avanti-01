let allCategories = document.querySelector('.allCategories');
let titleCategorie = document.getElementById('title-categorie-off');
let imgCategorie = document.getElementById('img-categorie-off');
let popUp = document.querySelector('.pop-up-off');
let departments = document.querySelector('.departments');
let optionsFooter = document.querySelector('.options');

let research = document.getElementById('research');
let valueSearch = document.getElementById('valueSearch');
let resultSearch = document.getElementById('result-off');

let valueSearch02 = document.getElementById('valueSearch02');
let research02 = document.getElementById('research02');

let selectedDepartmentId;
let closeTimeout;

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 16,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        310: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
        }
    }
});

function searchByProduct(type) {
    if (type == 0) {
        if (valueSearch.value == "") {
            resultSearch.id = "result-off"
            return;
        }

        resultSearch.innerHTML = "";

        resultSearch.innerHTML += "Você buscou por: " + "'" + valueSearch.value + "'";
        resultSearch.id = "result";
        return;
    }

    if (valueSearch02.value == "") {
        resultSearch.id = "result-off"
        return;
    }

    resultSearch.innerHTML = "";

    resultSearch.innerHTML += "Você buscou por: " + "'" + valueSearch02.value + "'";
    resultSearch.id = "result";
}

function activeContentFooter(event) {
    let column = event.target.closest('.column-mob');
    let contentOff = column.querySelector('.content-off');

    if (contentOff == null) {
        let content = column.querySelector('.content')

        content.classList.remove('content');
        content.classList.add('content-off');
        return;
    }

    contentOff.classList.remove('content-off');
    contentOff.classList.add('content');
}

function changeActiveImage(event) {
    const URL = "../assets/images/";

    if (event.type == 'click') {
        let img, p;

        if (selectedDepartmentId != undefined) {
            img = selectedDepartmentId.querySelector('img');
            img.src = URL + "menuRigth.svg";

            p = selectedDepartmentId.querySelector('p');
            p.id = "not-selected";
        }

        selectedDepartmentId = event.target.closest('div');
        img = selectedDepartmentId.querySelector('img');
        p = selectedDepartmentId.querySelector('p');

        p.id = "selected";
        img.src = URL + "menuRigthBlue.svg";
        return;
    }
}

function showPopUp() {
    clearTimeout(closeTimeout);
    titleCategorie.id = "title-categorie";
    imgCategorie.src = "../assets/images/menuBlue.svg";
    popUp.classList.remove('pop-up-off');
    popUp.classList.add('pop-up');
}

function closePopUp() {
    closeTimeout = setTimeout(() => {
        titleCategorie.id = "title-categorie-off";
        imgCategorie.src = "../assets/images/menu.svg";
        popUp.classList.remove('pop-up');
        popUp.classList.add('pop-up-off');
    }, 200);
}

departments.addEventListener('click', (event) => changeActiveImage(event))
departments.addEventListener('mouseover', (event) => changeActiveImage(event))

allCategories.addEventListener('mouseenter', () => showPopUp());
allCategories.addEventListener('mouseleave', () => closePopUp());

popUp.addEventListener('mouseenter', () => showPopUp());
popUp.addEventListener('mouseleave', () => closePopUp());

optionsFooter.addEventListener('click', (event) => activeContentFooter(event))

research.addEventListener('click', () => searchByProduct(0));
valueSearch.addEventListener('keydown', (event) => {
    if (event.key == 'Enter')
        searchByProduct(0);
});

research02.addEventListener('click', () => searchByProduct(1));

