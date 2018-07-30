
//To validate Fullname
function nameCheck(id) {
    var name = document.getElementById(id).value;
    var flag = 0;
    var x = document.getElementById("nameform");
    var xvalue = document.getElementById("name-input");

    for (i = 0; i < name.length; i++) {
        if ((!isNaN(name[i])) && (name[i] != " ")) {
            x.classList.add("has-error");
            x.classList.add("has-feedback");
            xvalue.setAttribute("placeholder", "Invalid name");
            flag = 1;
        }
    }
    if ((x.classList.contains('has-error')) && (flag === 0)) {
        x.classList.remove('has-error');
    }

}

//To validate email
function emailCheck(id) {
    var email = document.getElementById(id).value;
    var count = 0, flag = 0;
    var x = document.getElementById("emailform");
    for (i = 0; i < email.length; i++) {
        if (email[i] === '@')
            count++;
    }
    if (!(email.includes(".com")))
        flag = 1;
    if ((flag === 1) && (count != 1))
        x.classList.add("has-error");
    if ((x.classList.contains('has-error')) && (flag === 0))
        x.classList.remove('has-error');

}

//To validate telephone number
function telCheck(id) {
    var tel = document.getElementById(id).value;
    var flag = 0;
    var y = document.getElementById("telform");
    if (isNaN(tel)) {
        y.classList.add("has-error");
        flag = 1;

    }
    if ((y.classList.contains('has-error')) && (flag === 0)) {
        y.classList.remove('has-error');
        error = false;
    }
}


//To confirm password match
function passCheck() {
    if (!(document.getElementById('pass-input').value === null) && !(document.getElementById('pass-input').value === null)) {
        if (document.getElementById('pass-input').value ===
            document.getElementById('confirm-input').value) {
            document.getElementById('confirm-input').style.color = 'green';
            document.getElementById('pass-input').style.color = 'green';

        } else {
            document.getElementById('confirm-input').style.color = 'red';
            document.getElementById('pass-input').style.color = 'red';

        }
    }
}

