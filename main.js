'use strtict';

const { default: axios } = require("axios");
const { ModalBody } = require("react-bootstrap");

// document.querySelector() is used to select an element from the document using its ID
let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";


let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refreshButton');


// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];

// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA
for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''), captchaText.width / 4, captchaText.height / 2);


// This event listener is stimulated whenever the user press the "Enter" button
// "Correct!" or "Incorrect, please try again" message is
// displayed after validating the input text with CAPTCHA
userText.addEventListener('keyup', function (e) {
    // Key Code Value of "Enter" Button is 13
    if (e.keyCode === 13) {
        if (userText.value === c) {
            output.classList.add("correctCaptcha");
            output.innerHTML = "Correct!";
        } else {
            output.classList.add("incorrectCaptcha");
            output.innerHTML = "Incorrect, please try again";
        }
    }
});

// This event listener is stimulated whenever the user clicks the "Submit" button
// "Correct!" or "Incorrect, please try again" message is
// displayed after validating the input text with CAPTCHA
submitButton.addEventListener('click', function () {
    if (userText.value === c) {
        output.classList.add("correctCaptcha");
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("incorrectCaptcha");
        output.innerHTML = "Incorrect, please try again";
    }
});

// This event listener is stimulated whenever the user press the "Refresh" button
// A new random CAPTCHA is generated and displayed after the user clicks the "Refresh" button
refreshButton.addEventListener('click', function () {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''), captchaText.width / 4, captchaText.height / 2);
    output.innerHTML = "";
});


// Become an associate javascript code

function openForm() {

    const formOpener = document.querySelector(".form-opener")
    const block = document.getElementById("myForm").style.display = "block";
    if (block) {
        document.getElementById('asso-body').style.overflow = 'hidden';
        return formOpener.classList.remove("open-form");
    }

    return formOpener.classList.add("open-form")
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById('asso-body').style.overflow = 'auto';
}

function closeHeadliner() {
    window.onload = document.querySelector('.headliner').style.display = "block"
    document.querySelector('.headliner').style.display = "none"
}


function openNav() {
    document.getElementById("myNav").style.width = '100%';
}

function closeNav() {
    document.getElementById("myNav").style.width = '0%';
}


function docSelector() {
    const inter = document.getElementById('inter')
    const items = inter.options
    const index = items.selectedIndex
    const ip = document.getElementById('ip-cta')
    const vc = document.getElementById('vc-cta')
    const nic = document.getElementById('nic-cta')
    const dl = document.getElementById('dl-cta')
    const file = document.getElementById('file-cta')
    if (index === 1) {
        dl.style.display = "none";
        ip.style.display = "block";
        file.style.display = "block";

    }
    if (index === 2) {
        ip.style.display = "none"
        vc.style.display = "block"

    }
    if (index === 3) {
        vc.style.display = "none"
        nic.style.display = "block"
    }
    if (index === 4) {
        nic.style.display = "none"
        dl.style.display = "block"
    }

    return

}




// ------------------------------------------------------

//  BILLING PAGE

function optionSelector() {
    const selectElement = document.querySelector("select");
    var flat = document.querySelector('.flat');
    const regular = document.querySelector('.btn-regular');
    const form = document.forms['form1'];
    const rooms = form.rooms;
    var Index = rooms.options.selectedIndex

    const cash = document.getElementById('cash-price');

    const prices = [10000, 20000, 30000, 40000, 50000, 60000];

    cash.innerText = prices[Index] || 10000;

    if (regular === 'active') return;
    if (Index === 6) {
        cash.innerText = 60000;
        setTimeout(function () {
            regular.classList.remove('active');
            flat.classList.remove('active');
            regular.nextElementSibling.classList.add('active');
            cash.innerText = 10000;
            selectElement.selectedIndex = 0;
        }, 5000)
    }

    if (selectedIndex === 1) {
        cash.innerText = 10000;
    } else if (selectedIndex === 2) {
        cash.innerText *= 2;
    } else if (selectedIndex === 3) {
        cash.innerText *= 3
    } else if (selectedIndex === 4) {
        cash.innerText *= 4;
    } else if (selectedIndex === 5) {
        cash.innerText *= 5;
    }


}



function timeFrame() {
    const selectElement = document.querySelector("select");
    const fumigation = document.querySelector('.btn-fumigation');
    const cash = document.getElementById("cash-price");
    const spring = document.querySelector(".btn-spring");
    const form = document.forms["form1"];
    const rooms = form.rooms;
    const prices = [20000, 35000, 50000, 65000, 80000, 100000];
    const selectedIndex = rooms.options.selectedIndex;

    cash.innerText = prices[selectedIndex] || 20000;

    if (spring === "active") {
        return;
    }

    if (selectedIndex === 6) {
        cash.innerText = 100000;
        setTimeout(() => {
            spring.classList.remove("active");
            fumigation.classList.add("active");
            cash.innerText = 10000;
            selectElement.selectedIndex = 0;
        }, 5000);
    }

    if (selectedIndex === 1) {
        cash.innerText = 20000;
    } else if (selectedIndex === 2) {
        cash.innerText = 35000;
    } else if (selectedIndex === 3) {
        cash.innerText = 50000
    } else if (selectedIndex === 4) {
        cash.innerText = 65000;
    } else if (selectedIndex === 5) {
        cash.innerText = 80000;
    }

}



function fumiSelector() {
    const selectElement = document.querySelector("select");
    const fumigation = document.querySelector('.btn-fumigation');
    const duplex = document.querySelector('.duplex');
    const form = document.forms['form1'];
    const rooms = form.rooms;
    const cash = document.getElementById('cash-price');

    const prices = [15000, 25000, 35000, 45000, 55000, 70000];
    const selectedIndex = rooms.options.selectedIndex;
    cash.innerText = prices[selectedIndex] || 10000;

    if (selectedIndex === 6) {
        cash.innerText = 70000;
        setTimeout(function () {
            fumigation.classList.remove('active');
            duplex.classList.add('active');
            cash.innerText = 10000;
            selectElement.selectedIndex = 0;
        }, 5000);

    }
    if (selectedIndex === 1) {
        cash.innerText = 15000;
    } else if (selectedIndex === 2) {
        cash.innerText = 25000
    } else if (selectedIndex === 3) {
        cash.innerText = 35000;
    } else if (selectedIndex === 4) {
        cash.innerText = 45000;
    } else if (selectedIndex === 5) {
        cash.innerText = 55000;
    }

}



function upholster() {
    const selectElement = document.getElementById("seater");
    const duplex = document.querySelector('.duplex');
    const regular = document.querySelector('.btn-regular');
    const form = document.forms.form1
    const seaters = form.seaters;
    const cash = document.getElementById('cash-price');
    const prices = [5000, 10000, 15000, 20000, 25000, 30000];
    const selectedIndex = seaters.options.selectedIndex;

    cash.innerText = prices[selectedIndex] || 10000;

    if (duplex.className === 'active') {
        return;
    }

    if (selectedIndex === 6) {
        cash.innerText = 30000;
        setTimeout(function () {
            duplex.classList.remove('active');
            regular.classList.add('active');
            cash.innerText = 10000;
            selectElement.selectedIndex = 0;
        }, 5000);
    }

    if (selectedIndex === 1) {
        cash.innerText = 5000;
    } else if (selectedIndex === 2) {
        cash.innerText = 10000
    } else if (selectedIndex === 3) {
        cash.innerText = 15000;
    } else if (selectedIndex === 4) {
        cash.innerText = 20000;
    } else if (selectedIndex === 5) {
        cash.innerText = 25000;
    }

}



function buttonRender() {
    const regularBtn = document.querySelector('.btn-regular');
    const springBtn = document.getElementById('spring');
    var fumigationBtn = document.querySelector('.btn-fumigation');

    if (regularBtn.classList.contains('active')) {
        optionSelector();
    }
    if (springBtn.classList.contains('active')) {
        timeFrame();
    }
    if (fumigationBtn.classList.contains('active')) {
        fumiSelector();
    }

}

// Button Background Changer

function regularButton() {
    const regular = document.querySelector('.btn-regular');
    regular.classList.toggle('active')

}

function springButton() {
    timeFrame();
    const timeFrame = document.getElementById('tframe');
    var spring = document.querySelector('.btn-spring');
    spring.classList.toggle('active')
}
function fumiButton() {
    var fumigation = document.querySelector('.btn-fumigation');
    fumigation.classList.toggle('active')
}

function flatButton() {
    var flat = document.querySelector('.flat');
    flat.classList.toggle('active')
}
function dupButton() {
    var duplex = document.querySelector('.duplex');
    duplex.classList.toggle('active')
}




// ----BOOKING PAGE----




// ----SIGN-IN PAGE----

function login() {
    setTimeout(() => {
        const reset = document.getElementById('reset')
        const login = document.getElementById('login')
        const signUp = document.getElementById('signUp')
        if (signUp.style.display === 'none') {
            signUp.style.display = "flex";
            reset.style.display = "none";
            login.style.display = "none";
            return;
        } else {
            signUp.style.display = "none";
            login.style.display = 'flex';
            reset.style.display = "flex";
            return;
        }

    }, 1000, true);

}

// function login() {
//     setTimeout(() => {
//         const reset = document.getElementById("reset");
//         const login = document.getElementById("login");
//         const signUp = document.getElementById("signUp");
//         signUp.style.display = signUp.style.display === "none" ? "flex" : "none";
//         reset.style.display = "none";
//         login.style.display = signUp.style.display === "none" ? "flex" : "none";
//     }, 1000);
// }


// function reset() {
//     const form = document.getElementById('form')
//     const signUp = document.getElementById('signUp')
//     const friendSection = document.getElementById('friend-sect')
//     const reset = document.getElementById('reset')
//     reset.style.display = "none";
//     if (reset.style.display === 'none') {
//         reset.style.display = "flex";
//         friendSection.style.display = 'none';
//     } else if (reset.style.display === 'block') {
//         reset.style.display = "none";
//     }

// }

function reset() {
    const form = document.getElementById("form");
    const signUp = document.getElementById("signUp");
    const friendSection = document.getElementById("friend-sect");
    const reset = document.getElementById("reset");
    reset.style.display = "flex";
    if (reset) {
        !reset
    }
    form.style.display = "none";
    friendSection.style.display = "none";
    return reset;
}


function checker() {
    const checkBox = document.getElementById('checkbox')

    if (checkBox.checked) {
        checkBox.checked = false;

    } else {
        checkBox.checked = true;
    }

}


// ----Quotation Page Function-----

function comName() {
    const company = document.getElementById('com-name')
    company.classList.toggle('neutral');
    return comNameLogic();

}

function postConstruct() {
    const postConsctruct = document.getElementById('post-con')
    postConsctruct.classList.toggle('neutral');
    return postConLogic();
}

function specialRequest() {
    const specialRequest = document.getElementById('spec-req')
    specialRequest.classList.toggle('neutral');
}

function comNameLogic() {
    const company = document.getElementById('com-name')
    const personalForm = document.getElementById('personal-form')
    const companyForm = document.getElementById('company-form')
    const active = companyForm.style.display = company.classList.contains('neutral')
    if (active) {
        companyForm.style.display = "block";
        personalForm.style.display = "none";
    } else {
        companyForm.style.display = "none";
        personalForm.style.display = "block";
    }

}

function postConLogic() {
    const companyForm = document.getElementById('company-form')
    const postConsctruct = document.getElementById('post-con')
    const personalForm = document.getElementById('personal-form')
    const active = personalForm.style.display = postConsctruct.classList.contains('neutral')
    if (active) {
        personalForm.style.display = " block";
        companyForm.style.display = "none";
    } else {
        personalForm.style.display = "none";
        companyForm.style.display = "block";
    }
    return active;
}




// function renderFunction() {
//     const companyForm = document.getElementById('company-form')
//     const personalForm = document.getElementById('personal-form')
//     if (companyForm.classList.contains('active')) {
//         return comNameLogic();
//     }
//     if (personalForm.classList.contains('active')) {
//         return postConLogic();
//     }
// }