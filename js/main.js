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

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let besked = document.getElementById('besked').value;

    if (name === ''){
        document.getElementById('nameSpan').classList.add('show');
    }

    if (email === ''){
        document.getElementById('emailSpan').classList.add('show');
    }

    if (besked === ''){
        document.getElementById('beskedSpan').classList.add('show');
    }

    else{
        alert('Hej ' + name + ' tak for din besked, hvor du skrev: ' + besked +
        '. Vi vender tilbage til dig på din email ' + email + ' snarest muligt.');

        location.reload();
        return false;
    }

}

let submit = document.getElementById('submitMsg');

submit.addEventListener('click', getFormData);