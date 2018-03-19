console.log('hi');

$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    $('#clearButton').on('click', function(){
        console.log('clear');
    });
    $("#doMathButton").on('click', function(){
        console.log('in domathbutton on click');
        let x = $('#xIn').val();
        let y = $('#yIn').val();
        let type = $('#typeIn').val();
        let objectToSend = {
            x: x,
            y: y,
            type: type
        };
        console.log(objectToSend);
    });
}