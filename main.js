let sliderImages = document.querySelectorAll('.slides-container img');
let imageNumber = document.querySelector('.slides-container .image-num');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let paginationItems = document.querySelectorAll('.slides-control ul li');

let currentElement = 0;

//randomizing the starting slide each time the page loads
(function startView() {
    currentElement = Math.floor(Math.random() * 5);/* get nums from 0 to 4 */
    updateView();
}());

//update the view depending on the value of 'currentElement'
function updateView() {
    removeActive(sliderImages, paginationItems);
    addActive(sliderImages[currentElement], paginationItems[currentElement]);
    imageNumber.textContent = `slide ${currentElement + 1} of ${sliderImages.length}`;
    checkAndDisableBtns();
}

//adding previous and next buttons functionality
prevBtn.onclick = function () {
    if (currentElement > 0) {
        currentElement--;
        updateView();
    }
}
nextBtn.onclick = function () {
    if (currentElement < sliderImages.length - 1) {
        currentElement++;
        updateView();
    }

}

//adding clicking on pagination items functionality
paginationItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentElement = index;
        updateView();
    })
})

//function that checks if the slider arrived at one of its 2 ends and do what should be done
function checkAndDisableBtns() {
    if (currentElement <= 0) {
        prevBtn.setAttribute('disabled', 'true');
    } else {
        prevBtn.removeAttribute('disabled');
    }
    if (currentElement >= sliderImages.length - 1) {
        nextBtn.setAttribute('disabled', 'true');
    } else {
        nextBtn.removeAttribute('disabled');
    }
}

//function that removes 'active' class from any list
function removeActive(...lists) {
    lists.forEach(list => list.forEach(item => item.classList.remove('active')));
}

//function that adds 'active' class to any item
function addActive(...items) {
    items.forEach(item => item.classList.add('active'));
}