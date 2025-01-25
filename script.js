const cursor = document.querySelector(".cursor")
var timeout

document.addEventListener("mousemove", (e)=>{
    let x = e.pageX
    let y = e.pageY


    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    cursor.style.display = "block"

    // Stop animation as cursor moves out of html page 
    function mouseStopped(){
        cursor.style.display = "none";
    }
    
    // hide animation after 1sec of rest state of cursor
    clearTimeout(timeout)
        timeout = setTimeout(mouseStopped, 1000)
})

document.addEventListener("mouseout", (e) => {
    cursor.style.display = "none";
})