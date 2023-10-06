const displayData1 = document.querySelector('#displayData1');
const displayData2 = document.querySelector('#displayData2');

const output = document.querySelector('#output');

let data1 = [3, 5, 8, 20, 50, 67, 98];
let data2 = [1, 4, 6, 10, 40];
let dataMerged = [];

display(data1, displayData1);
display(data2, displayData2);

function display(dataInfo, container) {
    let dataString = `[${dataInfo.join(', ')}]`;

    container.innerHTML = dataString;

}

function merge() {

    let d1=0;
    let d2=0;
    let d3 = 0;

    while (d1 < data1.length && d2 < data2.length) {
        if (data1[d1] < data2[d2]) {
            dataMerged[d3] = data1[d1];
            d1++;
        } else {
            dataMerged[d3] = data2[d2];   
            d2++;
        }
        d3++;
    }

    while (d1 < data1.length) {
        dataMerged[d3] = data1[d1];
        d3++;
        d1++;
    }

    display(dataMerged, output);


}
