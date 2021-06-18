function onClickVisible(category_div){
    var ref_div = category_div.getAttribute('reference_div');
    var ref_pic = document.getElementById(ref_div);
    ref_pic.classList.remove('d-none');
    ref_pic.scrollIntoView();
    console.log(ref_div);

};

function onClickNotVisible(category_div){
    var ref_div = category_div.getAttribute('reference_div');
    var ref_pic = document.getElementById(ref_div);
    ref_pic.classList.add('d-none');
    console.log(ref_div);

};


// (function () {
//     var body = document.body,
//             e = document.documentElement,
//             scrollPercent;
//     $(window).unbind("scroll").scroll(function () {
//         scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()) + 5;
//         body.style.backgroundPosition = "0px " + scrollPercent + "%";
//     });
// })();
var window_top = $(window).scrollTop();
    
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
    var objectSelect = $("#background-logo");
    var objectPosition = objectSelect.offset().top - 100;
    var nav = document.getElementById('container-nav');
    var a = document.getElementById('container-nav').getElementsByTagName('a');
    var drop_menu = document.getElementById('dropdown-menu');
    if (scroll > objectPosition) {
        console.log(scroll + " " + objectPosition)
        for (var i = 0; i < a.length; i++) {
            var elem = a[i];
            elem.classList.remove("text-light");
            elem.classList.add("text-dark");
        };
        
        
        drop_menu.classList.add('menu-light');
        nav.classList.add("bg-white");
    } else {

        nav.classList.remove("bg-white");
        drop_menu.classList.remove('menu-light');
        
        for (var i = 0; i < a.length; i++) {
            var elem = a[i];
            elem.classList.remove("text-dark");
            elem.classList.add("text-light");
         
        };
    }
});
$(document).ready(function(){
   
    // if (window_top > div_top) {
    //     document.getElementById('home').classList.remove('position-absolute')


    //     } 
    //     //if window top reaches the limit removed class
    //     if(window_top < document.getElementById('about').position().top){

    //         document.getElementById('home').classList.add('position-absolute')
    //     }
    var add_image_link = document.getElementById('add-new-image-link');
    var add_image_form = document.getElementById('add-image-container');
    add_image_link.addEventListener('click',function(){

        if(add_image_form.classList.contains('d-none') ){
            add_image_form.classList.remove('d-none');
            add_image_form.classList.add('d-flex');
            add_image_link.innerHTML = 'Close';
        } else {
            
            add_image_form.classList.remove('d-flex');
            add_image_form.classList.add('d-none');
            add_image_link.innerHTML = 'Add a new image';
        };
        
    });
    var category_div = document.getElementsByClassName("category-pic");

    for (var i = 0; i < category_div.length;i+=1){
        (function(){
            var element_div = category_div[i];

            element_div.addEventListener("click",function(){ onClickVisible(element_div) });
        }());
            
          
    };

    var close_div = document.getElementsByClassName("close-gallery");

    for (var i = 0; i < close_div.length;i+=1){
        (function(){
            var close_btn = close_div[i];

            close_btn.addEventListener("click",function(){ onClickNotVisible(close_btn) });
        }());
            
          
    }


 
})