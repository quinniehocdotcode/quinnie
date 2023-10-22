const productImages = document.querySelectorAll('.product-images img');
const productImgSlide = document.querySelector('.image-slider')
let activeImageSlide = 0;
productImages.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImgSlide.style.background = "none";
        productImgSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide=i;
    })
})
const sizeBtns =  document.querySelectorAll('.size-radio-btn');
let checkBtn = 0;
sizeBtns.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        sizeBtns[checkBtn].classList.remove('check');
        item.classList.add('check')
        checkBtn = i;
    })
})

