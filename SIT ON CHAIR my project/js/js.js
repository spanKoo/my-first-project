// baner góra

var btnPrev = document.querySelector('.banner-prev');
var btnNext = document.querySelector('.banner-next');
var banners = document.querySelectorAll('.banner-slide');

var bannerIndex = 0;
btnNext.addEventListener('click', function () {
    banners[bannerIndex].classList.remove('banner-slide-active');
    bannerIndex++;
    if (bannerIndex > (banners.length - 1)) {
        bannerIndex = 0;
        banners[bannerIndex].classList.add('banner-slide-active')
    } else {
        banners[bannerIndex].classList.add('banner-slide-active')
    }
});

btnPrev.addEventListener('click', function () {
    banners[bannerIndex].classList.remove('banner-slide-active');
    bannerIndex--;
    if (bannerIndex < 0) {
        bannerIndex = (banners.length - 1);
        banners[bannerIndex].classList.add('banner-slide-active')
    } else {
        banners[bannerIndex].classList.add('banner-slide-active')
    }
});

//  mysz nad -

var articleLinks = document.querySelectorAll('.main-article-link');



articleLinks.forEach(item => {
    item.addEventListener('mouseover', function () {
        var articleBar = this.querySelector('.main-article-bar');
        articleBar.style.display = 'none';
    })
});
articleLinks.forEach(item => {
    item.addEventListener('mouseout', function () {
        var articleBar = this.querySelector('.main-article-bar');
        articleBar.style.display = 'block';
    })
});
