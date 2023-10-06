const displayData = document.querySelector('#displayData');
const output = document.querySelector('#output');

let data = [60, 30, 10, 67, 40];

display(data, displayData);

function display(dataInfo, container) {
    let dataString = `[${dataInfo.join(', ')}]`;

    container.innerHTML = dataString;

}

function deleteItem() {

   
    let pos = document.querySelector('#position').value;
    pos = parseInt(pos);

    for (let i = pos; i < data.length - 1; i++) {
        //shift the value in the right to the current
        data[i] = data[i + 1];
    }
    //remove the last element
    data.length = data.length - 1;

    display(data, output);

    data = [60, 30, 10, 67, 40];
}
