console.log('hi');

$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    $('#clearButton').on('click', function(){
        console.log('clear');
        $("#xIn").val("");
        $("#yIn").val('');
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
        $.ajax({
            type:'Post',
            url: '/doMath',
            data: objectToSend
        }).done( function(response){
            console.log("back from post with" + response);
            getAnswer();
        })
        console.log(objectToSend);
    });
}

function getAnswer (){
    $.ajax({
        type: 'get',
        url: '/answer'
    }).done( function(response){
        console.log('back from get with: ', response);
        let outputDiv = $('#answerOut');
        outputDiv.empty();
        outputDiv.append(response.answer);
        getHistory();
    });
}

function getHistory(){
    $.ajax({
        type: 'get',
        url: '/history'
    }).done( function(response){
        console.log(response);
        let outputElement = $('#historyOut');
        outputElement.empty();
        for (let i = 0; i<response.length; i++){
            console.log("in for loop", response[i]);
            let outputString = '<li>';
            outputString += response[i].x + ' ';
            outputString += response[i].type + ' ';
            outputString += response[i].y + ' ';
            outputString += '</li>';
            outputElement.append(outputString);
        }
    });
}