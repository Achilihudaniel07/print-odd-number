// Write a javascript code to print only ODD numbers in an array
    
    var numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    
    function displayOdd(numbers){
    for (var i =0; i < numbers.length;  i++){
    if (numbers [i]%2==1){
        alert(numbers[i]);
    }   
    }
    }

    displayOdd(numbers)