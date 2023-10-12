const output = document.querySelector('#output');
const button = document.querySelector('button');

button.addEventListener('click', function (e) {
    e.preventDefault()

    let n = document.querySelector('#n').value
    n = parseInt(n);
    let result = factorial(n);
    output.innerHTML = result;
})

function factorial(n) {
    if (n == 0) {
        return 1;
    }

    return n * factorial(n - 1);
}