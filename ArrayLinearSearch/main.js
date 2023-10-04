const displayData = document.querySelector('#displayData');
const output = document.querySelector('#output');

let data = [60, 30, 10, 67, 40];

displayInput(data, displayData);

function displayInput(dataInfo, container) {
    let dataString = `[${dataInfo.join(', ')}]`;

    container.innerHTML = dataString;

}

function displayOutput(dataInfo, container) {

    let dataString = `The ${data[dataInfo]} is found at ${dataInfo}`;

    container.innerHTML = dataString;

}

function searchItem() {


    let searchFor = document.querySelector('#searchFor').value;
    searchFor = parseInt(searchFor);
    alert(searchFor)
    let indexFound = undefined;

    for (let i = 0; i < data.length; i++) {
        if (data[i] == searchFor) {
            indexFound = i;
            break;
        }
    }

    displayOutput(indexFound, output);


}
