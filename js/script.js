//ciclo da 1 a 100
for(var i=1; i<101 ; i++){
    if( i%3 == 0  &&  i%5 == 0){ //test case per multipli di 3 e 5
        console.log(i + " FizzBuzz");

    }
    else if(i%3 == 0){ //test case per multipli di 3
            console.log(i + " Fizz");

        }
        else if(i%5 == 0){ //test case per multipli di 5
                console.log(i + " Buzz");
             }
             else{ //tutti i numeri tra 1 e 100 non divisibili per 3 o 5 
                console.log(i);
             }
}