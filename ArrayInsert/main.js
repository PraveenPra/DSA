
const displayData = document.querySelector('#displayData');
const output = document.querySelector('#output');

let data = [60, 30, 10, 67, 40];

display(data, displayData);

function display(dataInfo, container) {
    let dataString = `[${dataInfo.join(', ')}]`;

    container.innerHTML = dataString;

}

function insert() {

    let el = document.querySelector('#element').value;
    el = parseInt(el);
    let pos = document.querySelector('#position').value;
    pos = parseInt(pos);

    // shift right 1 character from the last to the position u want to insert

    for (let i = data.length - 1; i >= 0; i--) {
        console.log(i, data[i])

        if (i >= pos) {
            //shift current element to right
            data[i + 1] = data[i];

            //check if u found the desired position to insert
            if (i == pos) {
                data[i] = el;
            }
        }
    }

    display(data, output);
    console.warn(data)

}
