// show nav logic
// target the menu btn
const menu_btn = document.querySelector('.menu')

// listen for a click event on the menu button
menu_btn.addEventListener('click', showNav)

function showNav(){
        // target the nav
        const navbar = document.querySelector('nav')

        // toggle the show nav class on the navbar
        navbar.classList.toggle('show-nav')

        // toggle the menu bg 
        menu_btn.classList.toggle('changeMenuBg')
}





// target the convert button
const convert_btn = document.querySelector('.convert-btn')

// listen for click event
convert_btn.addEventListener('click', convert_text)
function convert_text(){
    //   get the user input and convert it to QR code using the QR api
    let user_input = document.querySelector('.user-input').value
    let generated_qr = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + user_input 

    // target  the image that will display the  QR image 
    document.querySelector('.qr-img').src = generated_qr

    // target the output section and add the show result class to it
    document.querySelector('.output-section').classList.add("show-result")

}

