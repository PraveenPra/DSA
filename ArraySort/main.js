const displayData = document.querySelector('#displayData');
const output = document.querySelector('#output');

let data = [60, 30, 10, 40];

display(data, displayData);

function display(dataInfo, container) {
    let dataString = `[${dataInfo.join(', ')}]`;

    container.innerHTML = dataString;

}

function sortArray() {

   
    display(data, output);

    data = [60, 30, 10, 67, 40];
}
