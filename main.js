let sliderImages = document.querySelectorAll('.slides-container img');
let imageNumber = document.querySelector('.slides-container .image-num');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let paginationItems = document.querySelectorAll('.slides-control ul li');

//adding previous and next buttons functionality
prevBtn.onclick = function () {
    let activeIndex = determineActiveIndex(sliderImages);
    if (activeIndex > 0) {
        sliderImages[activeIndex].classList.remove('active');
        sliderImages[activeIndex - 1].classList.add('active');
        paginationItems[activeIndex].classList.remove('active');
        paginationItems[activeIndex - 1].classList.add('active');
        imageNumber.textContent = `slide ${activeIndex} of ${sliderImages.length}`;
    }
    checkAndDisableBtns();

}
nextBtn.onclick = function () {
    let activeIndex = determineActiveIndex(sliderImages);
    if (activeIndex < sliderImages.length - 1) {
        sliderImages[activeIndex].classList.remove('active');
        sliderImages[activeIndex + 1].classList.add('active');
        paginationItems[activeIndex].classList.remove('active');
        paginationItems[activeIndex + 1].classList.add('active');
        imageNumber.textContent = `slide ${activeIndex + 2} of ${sliderImages.length}`;
    }
    checkAndDisableBtns();

}

//adding clicking on pagination items functionality
paginationItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        sliderImages.forEach(img => img.classList.remove('active'));
        sliderImages[index].classList.add('active');
        paginationItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        imageNumber.textContent = `slide ${index + 1} of ${sliderImages.length}`;
        checkAndDisableBtns();
    })
})

//function that checks if the slider arrived at one of its 2 ends and do what should be done
function checkAndDisableBtns() {
    let activeIndex = determineActiveIndex(sliderImages);
    console.log(activeIndex);
    if (activeIndex <= 0) {
        prevBtn.setAttribute('disabled', 'true');
    } else {
        prevBtn.removeAttribute('disabled');
    }
    if (activeIndex >= sliderImages.length - 1) {
        nextBtn.setAttribute('disabled', 'true');
    } else {
        nextBtn.removeAttribute('disabled');
    }
}

//function that determines the index of the active element in any list you give
let determineActiveIndex = (list) => {
    let activeIndex;
    list.forEach((item, Index) => {
        if (item.classList.contains('active'))
            activeIndex = Index;
    })
    return activeIndex;
}

