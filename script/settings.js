// globals
let bodyCont = document.querySelector('body')
let imgAll = document.querySelectorAll('img')
let countMinus = document.querySelector('.countMinus');
let countText = document.querySelector('.countText span');
let countPlus = document.querySelector('.countPlus');
let count = 16;
// console.log(header_1);

// img none
let sett_image_display = document.querySelector('.img-none');
sett_image_display.addEventListener('click', () => {
    for(let i = 0; i < imgAll.length; i++){
        if(sett_image_display.checked){
            imgAll[i].classList.add('displaying');
            message('Вы отключили изображения без учета фоновых изображений')
        } else {
            imgAll[i].classList.remove('displaying');
            message('Вы включили изображения')
        }
    }
})

// img filter
let sett_image_filter = document.querySelector('.img-contrast');
sett_image_filter.addEventListener('click', () => {
    for(let i = 0; i < imgAll.length; i++){
        if(sett_image_filter.checked){
            imgAll[i].classList.add('filtryng');
            message('Вы отключили цветность изображения без учета фоновых изображений')
        } else {
            imgAll[i].classList.remove('filtryng');
            message('Вы включили цветность изображения')
        }
    }
})

// font size
// countMinus.addEventListener('click', () => {
//     if(count < 6){
//         count++;
//         document.getElementById('editText').style.fontSize = String(count) + 'px !important';
//     } else{
//         count--;
//         document.getElementById('editText').style.fontSize = String(count) + 'px !important';
//     }
//     countText.textContent = ' ( ' + count + 'px )';
// })
// countPlus.addEventListener('click', () => {
//     if(count > 96){
//         count--;
//         document.getElementById('editText').style.fontSize = String(count) + 'px !important';
//     } else{
//         count++;
//         document.getElementById('editText').style.fontSize = String(count) + 'px !important';
//     }
//     countText.textContent = ' ( ' + count + 'px )';
// })
