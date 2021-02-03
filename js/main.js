// Toggle Mobile Menu

function toggleClass(){

    let menu = document.getElementsByClassName('mainMenu');
    console.log(menu);
    if(menu && menu.length > 0) {
        for(let i = 0; i < menu.length; i++) menu[0].classList.toggle('expanded');
    }

    //Finder den første mainMenu selector i alle filer.
    //let menu2 = document.querySelector('.mainMenu');
    //console.log(menu2);
    //menu.classList.toggle('expanded');
}

let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', toggleClass);

// Contact Form

function getFormData(){

    document.getElementById('nameSpan').classList.remove("show")
    document.getElementById('emailSpan').classList.remove('show');
    document.getElementById('beskedSpan').classList.remove('show');

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let besked = document.getElementById('besked');

    if (!name.value) {
        document.getElementById('nameSpan').classList.add('show');
    }

    if (!email.value) {
        document.getElementById('emailSpan').classList.add('show');
    }

    if (!besked.value) {
        document.getElementById('beskedSpan').classList.add('show');
    }

    else{
        alert('Hej ' + name.value + ' tak for din besked, hvor du skrev: ' + besked.value +
        '. Vi vender tilbage til dig på din email ' + email.value + ' snarest muligt.');
       // location.reload(); //Ghettoløsningen!

        name.value = "";
        email.value = "";
        besked.value = "";

        return false;
    }

}

let submit = document.getElementById('submitMsg');

submit.addEventListener('click', getFormData);