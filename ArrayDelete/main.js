const displayData = document.querySelector('#displayData');
const output = document.querySelector('#output');
const button = document.querySelector('button');

const data = [60, 30, 10, 67, 40];

display(data, displayData);

function display(dataInfo, container) {
    let dataString = `[${dataInfo.join(', ')}]`;

    container.innerHTML = dataString;

}


button.addEventListener('click',function(e){
 e.preventDefault();   

 let pos = document.querySelector('#position').value;
pos = parseInt(pos);

 let op = deleteItem(data,pos);

 display(op, output);

    data = [60, 30, 10, 67, 40];
})
function deleteItem(data,pos) {

   if(data.length <= 0){
    return data;
   }
   

    for (let i = pos; i < data.length - 1; i++) {
        //shift the value in the right to the current
        data[i] = data[i + 1];
    }
    //remove the last element
    data.length = data.length - 1;
return data;
}
