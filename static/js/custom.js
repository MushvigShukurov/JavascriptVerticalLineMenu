let scroll_y = 100

let li_elements = document.querySelectorAll('.menu>li')
let inner_boxes = document.querySelectorAll(".box>.inner-box")

let active_li = document.querySelector(".menu>.active")

const active_class_animate = "animate__animated animate__bounceIn active"

document.body.onmousewheel = function(e){
    if(e.deltaY>0 && scroll_y<400){
        scroll_y+=100
    } else if(e.deltaY<0 && scroll_y>100) {
        scroll_y-=100
    } else if(scroll_y==400 && e.deltaY>0){
        scroll_y = 100
    } else if(scroll_y==100 && e.deltaY<0){
        scroll_y=400
    }

    li_elements.forEach(l=>{
        l.className = ""
    })
    inner_boxes.forEach(i_b=>{
        i_b.style.display = "none"
    })

    if(scroll_y==100){
        li_elements[(100/100) - 1].className = (active_class_animate)
        inner_boxes[(100/100) - 1].style.display = "block"
        
    }else if(scroll_y==200){
        li_elements[(200/100) - 1].className = (active_class_animate)
        inner_boxes[(200/100) - 1].style.display = "block"

    } else if(scroll_y == 300){
        li_elements[(300/100) - 1].className = (active_class_animate)
        inner_boxes[(300/100) - 1].style.display = "block"

    }else if(scroll_y == 400){
        li_elements[(400/100) - 1].className = (active_class_animate)
        inner_boxes[(400/100) - 1].style.display = "block"

    }
    
}