const displayData1 = document.querySelector('#displayData1');
const displayData2 = document.querySelector('#displayData2');

const output = document.querySelector('#output');

let data1 = [60, 30, 10, 67, 40];
let data2 = [60, 30, 10, 67, 40];
let dataMerged = [];

display(data1, displayData1);
display(data2, displayData2);

function display(dataInfo, container) {
    let dataString = `[${dataInfo.join(', ')}]`;

    container.innerHTML = dataString;

}

function merge() {

    for(let i=0; i<data1.length;i++){
        dataMerged[i]=data1[i];
    }
    for(let i=0; i<data2.length;i++ ){
        dataMerged[dataMerged.length]=data2[i];
    }
    display(dataMerged, output);


}
