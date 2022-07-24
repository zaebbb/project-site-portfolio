window.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        let load_content = document.querySelector('.load-content');
        load_content.classList.add('active')
        document.querySelector('body').classList.add('loadSuccess');
        message('Страница загрузилась!')
    }, 500)
    
})

// cursor
document.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById('cursor').style.left = x + 'px';
    document.getElementById('cursor').style.top = y + 'px';
})
// text
document.querySelectorAll('h1').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeText');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeText');
    })
})
document.querySelectorAll('h2').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeText');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeText');
    })
});
document.querySelectorAll('h3').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeText');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeText');
    })
});
document.querySelectorAll('p').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeText');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeText');
    })
})
// button
document.querySelectorAll('span').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeBtn');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeBtn');
    })
});
document.querySelectorAll('a').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeBtn');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeBtn');
    })
});
document.querySelectorAll('button').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeBtn');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeBtn');
    })
});
document.querySelectorAll('i').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeBtn');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeBtn');
    })
});
document.querySelectorAll('video').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeVideo');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeVideo');
    })
});
document.querySelectorAll('i').forEach(e => {
    e.addEventListener('mouseover', () => {
        cursor.classList.add('activeBtn');
    });
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeBtn');
    })
});
document.querySelector('.ru').addEventListener('mouseover', () => {
    cursor.classList.add('activeBtn');
});
document.querySelector('.ru').addEventListener('mouseout', () => {
    cursor.classList.remove('activeBtn');
})
// img
document.querySelectorAll('img').forEach(e => {
    if(!e.classList.contains('bg-head-bottom-img') && !e.classList.contains('top-projects-bg') && !e.classList.contains('bottom-projects-bg') && !e.classList.contains('footer-bg') && !e.classList.contains('contact-bottom') && !e.classList.contains('contact-top') && !e.classList.contains('bg-about-card') && !e.classList.contains('bottom-open') && !e.classList.contains('bottom-close') && !e.classList.contains('menu-tablet-img-open') && !e.classList.contains('menu-tablet-img-close')){
        e.addEventListener('mouseover', () => {
            cursor.classList.add('activeImg');
        });
    } else{
        e.addEventListener('mouseover', () => {
            cursor.classList.remove('activeImg');
        });
    }
    e.addEventListener('mouseout', () => {
        cursor.classList.remove('activeImg');
    })
});


// themes
function checkThemes(){
    document.getElementById('themes').classList.toggle('dark');
    if(document.getElementById('themes').classList.contains('dark')){
        message('Активна темная тема!');
    } else{
        message('Активна светлая тема!');
    }
    // main page
    if(document.querySelector('section').classList.contains('about')){
        document.querySelector('.about-container').classList.toggle('dark');
        document.querySelector('.price-tags').classList.toggle('dark');
        document.querySelector('.price-cards').classList.toggle('dark');
        document.querySelector('.bottom-projects-bg').classList.toggle('dark');
        document.querySelector('.top-projects-bg').classList.toggle('dark');
        document.querySelector('.post-cards').classList.toggle('dark');
        document.querySelector('.contacts-info').classList.toggle('dark');
        document.querySelector('.sendForm').classList.toggle('dark');
        document.querySelector('.contact-bottom').classList.toggle('dark');
        document.querySelector('.contact-top').classList.toggle('dark');
        document.querySelector('.animate-netbok-header').classList.toggle('dark');
        if(document.querySelector('.animate-netbok-header').classList.contains('dark')){
            document.querySelector('.animate-netbok-header').src = "data:text/html,<body%20style=margin:0;overflow:hidden><canvas%20id=q%20/><script>var%20q=document.getElementById('q'),s=window.screen,w=q.width=s.width,h=q.height=s.height,p=Array(256).join(1).split(''),c=q.getContext('2d'),m=Math;setInterval(function(){c.fillStyle='rgba(0,0,0,0.05)';c.fillRect(0,0,w,h);c.fillStyle='rgba(255,255,255,1)';p=p.map(function(v,i){r=m.random();c.fillText(String.fromCharCode(m.floor(2720+r*33)),i*10,v);v+=10;%20return%20v>768+r*1e4?0:v})},33)</script>";
        } else{
            document.querySelector('.animate-netbok-header').src = "data:text/html,<body%20style=margin:0;overflow:hidden><canvas%20id=q%20/><script>var%20q=document.getElementById('q'),s=window.screen,w=q.width=s.width,h=q.height=s.height,p=Array(256).join(1).split(''),c=q.getContext('2d'),m=Math;setInterval(function(){c.fillStyle='rgba(255,255,255,0.05)';c.fillRect(0,0,w,h);c.fillStyle='rgba(0,0,0,1)';p=p.map(function(v,i){r=m.random();c.fillText(String.fromCharCode(m.floor(2720+r*33)),i*10,v);v+=10;%20return%20v>768+r*1e4?0:v})},33)</script>";
        }
    }
    // services
    if(document.querySelector('section').classList.contains('service_way')){
        document.querySelector('.way').classList.toggle('dark');
        document.querySelector('.service_effect').classList.toggle('dark');
        document.querySelector('.service_about_image_top').classList.toggle('dark');
        document.querySelector('.service_about_image_bottom').classList.toggle('dark');
        document.querySelector('.service_about').classList.toggle('dark');
        document.querySelector('.process_development').classList.toggle('dark');
        document.querySelector('.order').classList.toggle('dark');
    }
    if(document.querySelector('section').classList.contains('way_post')){
        document.querySelector('.way').classList.toggle('dark');
        document.querySelector('.post_content').classList.toggle('dark');
    }
    if(document.querySelector('section').classList.contains('way_project')){
        document.querySelector('.way').classList.toggle('dark');
        document.querySelector('.project_content').classList.toggle('dark');
    }

    document.querySelector('.modal-themes').classList.toggle('dark');
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('#cursor').classList.toggle('dark');
    document.querySelector('.bg-head-bottom').classList.toggle('dark');
    document.querySelector('.modal-menu-left').classList.toggle('dark');
    document.querySelector('.modal-menu-bottom').classList.toggle('dark');
    document.querySelector('.modal-cookie').classList.toggle('dark');
    document.querySelector('.modal-message').classList.toggle('dark');
    document.querySelector('.modal-menu-top').classList.toggle('dark');
    document.querySelector('.modal-search').classList.toggle('dark');
    document.querySelector('.modal-settings').classList.toggle('dark');
    document.querySelector('.toolbox').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
    document.querySelectorAll('.section-title').forEach(e => {
        e.classList.toggle('dark');
    })
    document.querySelectorAll('.about-card').forEach(e => {
        e.classList.toggle('dark');
    })
}


// message
let modal_message = document.querySelector('.modal-message');
function message(description){
    let text_message = document.querySelector('.text-mess');
    let text_count = document.querySelector('.end-mess');
    let count = document.querySelector('.end-count');

    modal_message.classList.add('active');
    text_message.textContent = description;
    setTimeout(() => {
        text_count.classList.add('active');
        count.textContent = '3';

        setTimeout(() => {
            count.textContent = '2';

            setTimeout(() => {
                count.textContent = '1';
                
                setTimeout(() => {
                    modal_message.classList.remove('active');
                }, 1000)
            }, 1000)
        }, 1000)
    }, 500)
}
modal_message.addEventListener('click', () => {
    modal_message.classList.remove('active');
})

// function active settings
function active_settings(){
    let modal_label = document.querySelectorAll('.label_sett');
    modal_label.forEach(e => {
        e.addEventListener('click', () => {
            e.classList.toggle('active')
        })
    })
}

// menu tablet
let menu_tablet = document.querySelector('.menu-tablet');
let menu_tablet_open = document.querySelector('.menu-tablet-img-open');
let menu_tablet_close = document.querySelector('.menu-tablet-img-close');
function active_menu(){
    document.querySelector('.modal-menu-left').classList.add('active')
    menu_tablet.classList.add('active');
}
function unactive_menu(){
    document.querySelector('.modal-menu-left').classList.remove('active')
    menu_tablet.classList.remove('active');
}

// fixed menu bottom
let action = document.querySelector('.modal-menu-bottom');
let btn_close = document.querySelector('.bottom-close');
let btn_open = document.querySelector('.bottom-open');
function actionToggle(){
    action.classList.add('active');
}
function actionToggleFalse(){
    action.classList.remove('active');
}

// animate buttons price 
const tags = document.querySelectorAll('.tag');
tags.forEach(tag => {
    tag.onmousemove = e => {
        const x = e.pageX - tag.offsetLeft;
        const y = e.pageY - tag.offsetTop;
        tag.style.setProperty('--x', x + 'px');
        tag.style.setProperty('--y', y + 'px');
    }
})

let modalCookie = document.querySelector('.modal-cookie');
// localStorage.setItem('cookie', 'false');
let checkCookie = localStorage.getItem('cookie')
if(checkCookie == 'true'){
    modalCookie.classList.add('active');
    modalCookie.style.display = 'none';
}
// cookie
function cookie_close(){
    localStorage.setItem('cookie', 'true');
    modalCookie.classList.add('active');
    message('Вы приняли использование файлов cookie!');
}

function tablet_menu(){
    let open_tablet = document.querySelector('.menu-tablet-img-open');
    let close_tablet = document.querySelector('.menu-tablet-img-close');
    open_tablet
}

// copyright
document.querySelector('.copyright').textContent = 'ZAEB Official 2020-' + new Date().getFullYear() + ' © Все права защищены';


// FUNCTIONS MENU LEFT

// FUNCTION 12
function func_12(){
    localStorage.clear();
    message('Кэш успешно очищен!');
}
// FUNCTION 12

// FUNCTION 11
function func_11(){
    let menu_top = document.querySelector('.fa-ellipsis-h');
    let modal_menu_top = document.querySelector('.modal-menu-top');
    menu_top.classList.toggle('active');
    modal_menu_top.classList.toggle('active');
}
// FUNCTION 11

// FUNCTION 10
function func_10(){
    window.scrollTo(0, 0);
    let moveTop = document.querySelector('.fa-arrow-alt-circle-up');
    moveTop.classList.add('active');
    setTimeout(() => {
        moveTop.classList.remove('active');
    }, 1000)
    message('Перемещаемся...');
}
// FUNCTION 10

// FUNCTION 9
function func_9(){
    let sett_open = document.querySelector('.fa-sliders-h');
    let sett_modal = document.querySelector('.modal-settings');
    sett_open.classList.toggle('active')
    sett_modal.classList.toggle('active')
}
// FUNCTION 9

// FUNCTION 7
function func_7() {
    let fullscreenElement = document.querySelector('.fa-compress');
    fullscreenElement.classList.toggle('active')
    if(document.fullscreenElement){
        document.exitFullscreen();
        message('Полноэкранный режим неактивен');
    } else{
        document.documentElement.requestFullscreen();
        message('Полноэкранный режим активен');
    }
    
}
// FUNCTION 7

// FUNCTION 6
function func_6(){
    let active_paint_btn = document.querySelector('.fa-palette');
    let active_paint_canvas = document.querySelector('#canvas');
    let active_paint_panel = document.querySelector('.toolbox');
    active_paint_btn.classList.toggle('active')
    active_paint_canvas.classList.toggle('active')
    active_paint_panel.classList.toggle('active')
    if(active_paint_btn.classList.contains('active')){
        message('Режим рисования включен');
    } else{
        message('Режим рисования выключен');
    }
}
// FUNCTION 6

// FUNCTION 5
function func_5(){
    let h1 = document.querySelectorAll('h1')
    let h2 = document.querySelectorAll('h2')
    let h3 = document.querySelectorAll('h3')
    let p = document.querySelectorAll('p')
    let a = document.querySelectorAll('a')
    let div = document.querySelectorAll('div')
    let span = document.querySelectorAll('span')
    let edit = document.querySelector('.fa-edit');
    
    if(edit.classList.contains('active')){
        h1.forEach(e => {
            e.contentEditable = false;
        })
        h2.forEach(e => {
            e.contentEditable = false;
        })
        h3.forEach(e => {
            e.contentEditable = false;
        })
        p.forEach(e => {
            e.contentEditable = false;
        })
        a.forEach(e => {
            e.contentEditable = false;
        })
        div.forEach(e => {
            e.contentEditable = false;
        })
        span.forEach(e => {
            e.contentEditable = false;
        });
        edit.classList.toggle('active')
        message('Режим редактирования выключен');
    } else{
        h1.forEach(e => {
            e.contentEditable = true;
        })
        h2.forEach(e => {
            e.contentEditable = true;
        })
        h3.forEach(e => {
            e.contentEditable = true;
        })
        p.forEach(e => {
            e.contentEditable = true;
        })
        a.forEach(e => {
            e.contentEditable = true;
        })
        div.forEach(e => {
            e.contentEditable = true;
        })
        span.forEach(e => {
            e.contentEditable = true;
        });
        edit.classList.toggle('active')
        message('Режим редактирования включен');
    }
}
// FUNCTION 5

// FUNCTION 4
function func_4(){
    let search_modal = document.querySelector('.modal-search');
    let search_btn = document.querySelector('.func_4 .fa-search');
    search_modal.classList.toggle('active');
    search_btn.classList.toggle('active');
    if(search_modal.classList.contains('active')){
        message('Поиск активен!');
    } else{
        message('Поиск неактивен!');
    }
}
// FUNCTION 4

// FUNCTION 3
function func_3(){
    let cog = document.querySelector('.fa-cog');
    cog.classList.toggle('active');
    if(cog.classList.contains('active')){
        message('Вы отключили большую часть анимации на сайте!');
    } else{
        message('Вы вновь включили анимацию!');
    }
    let animate_decor = document.querySelectorAll('.animate-decor');
    let animate_left = document.querySelectorAll('.animate-left');
    let animate_small = document.querySelectorAll('.animate-small');
    let animate_big = document.querySelectorAll('.animate-big');
    let rotate_left = document.querySelectorAll('.rotate-left');
    let rotate_right = document.querySelectorAll('.rotate-right');
    let animate_decor_menu = document.querySelectorAll('.animate-decor-menu');
    let footer_buttons = document.querySelectorAll('.project-buttons button');
    let all_cont = document.querySelector('*');
    all_cont.classList.toggle('deleteAnimate')
    animate_decor.forEach(e => {
        e.classList.toggle('deleteAnimate');
    })
    animate_left.forEach(e => {
        e.classList.toggle('deleteAnimate');
    })
    animate_small.forEach(e => {
        e.classList.toggle('deleteAnimate');
    })
    animate_big.forEach(e => {
        e.classList.toggle('deleteAnimate');
    })
    rotate_left.forEach(e => {
        e.classList.toggle('deleteAnimate');
    })
    rotate_right.forEach(e => {
        e.classList.toggle('deleteAnimate');
    })
    animate_decor_menu.forEach(e => {
        e.classList.toggle('deleteAnimate');
    })
    footer_buttons.forEach(e => {
        e.classList.toggle('deleteAnimate');
    })
}
// FUNCTION 3

// FUNCTION 1
let modalExit = document.querySelector('.modal-exit');
let closeBtnFont = document.querySelector('.fa-sign-out-alt');
let exitBtnModal = document.querySelector('.exit-btn_exit');
let closeBtnModal = document.querySelector('.exit-btn_close');
function func_1(){
    modalExit.classList.add('active');
    closeBtnFont.classList.add('active');
}
exitBtnModal.addEventListener('click', () => {
    window.close();
})
modalExit.addEventListener('click', () => {
    modalExit.classList.remove('active');
    closeBtnFont.classList.remove('active');
})
closeBtnModal.addEventListener('click', () => {
    modalExit.classList.remove('active');
    closeBtnFont.classList.remove('active');
})
// FUNCTION 1


// language site
function openLang(dirname){
    document.querySelector('.ru').addEventListener('click', () => {
        window.open(dirname);
    })
}
