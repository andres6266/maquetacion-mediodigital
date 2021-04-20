'use strict'
var tablinks = document.querySelectorAll(".tablinks")

var tabcontent = document.querySelectorAll(".tabcontent")


for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function () {
        
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }

        document.getElementById(tabcontent[i].id).style.display = "block"
        
        
    })
}
