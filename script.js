
let inputs = document.getElementsByTagName("input");

let error = document.getElementsByTagName("span");

function validation() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', function () {

            if (!this.value) {
                inputs[i].style.borderColor = 'hsl(0, 100%, 74%)',error[i].style.display='block';
            }

        })
    }
}

validation();
