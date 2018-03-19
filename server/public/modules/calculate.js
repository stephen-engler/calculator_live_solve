let calculate = function (mathyObject){
    console.log('in calculate module calculate function: ',mathyObject);

    let answer = 0;
    if(mathyObject.type === '-'){
        answer = parseInt(mathyObject.x) - parseInt(mathyObject.y);
    }
    else if (mathyObject.type === '*') {
        answer = parseInt(mathyObject.x) * parseInt(mathyObject.y);
    } 
    else if (mathyObject.type === '/') {
        answer = parseInt(mathyObject.x) / parseInt(mathyObject.y);
    } 
    else {
        answer = parseInt(mathyObject.x) + parseInt(mathyObject.y);
    }

    return answer;
};

module.exports = calculate;