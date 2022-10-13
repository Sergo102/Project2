'use strict'

function changeClass1(){
    if (!document.getElementById("header_adaptive").classList.contains('adaptive_menu_on') ){
        document.getElementById("header_adaptive").classList.add('adaptive_menu_on');
    }else if(document.getElementById("header_adaptive").classList.contains('adaptive_menu_on')){
        document.getElementById("header_adaptive").classList.remove('adaptive_menu_on');
    }
}