const displayData = document.querySelector('#displayData');
const output = document.querySelector('#output');

let data = [60, 30, 10, 40];

display(data, displayData);

function display(dataInfo, container) {
    let dataString = `[${dataInfo.join(', ')}]`;

    container.innerHTML = dataString;

}

// loops iterate array size x array size. here 4*4 = 16 times, so we taken 2 for loops to implement this
function sortArray() {

    //main loop for each element iteration
   for(i=0; i<data.length; i++){

    //perform sorting/ switching here
    for(j=0;j<data.length; j++){
        if(data[j]>data[j+1]){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp
        }
    }
   }
    display(data, output);

    data = [60, 30, 10, 67, 40];
}
