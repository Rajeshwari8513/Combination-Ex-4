let age = 20;

if(age >= 21){
    switch (age){
        case 21 :
            console.log("You can order Beer");
            break;
        case 22 :
            console.log("You can order Cocktail");
            break;
        default :
            console.log("You can order any alcoholic");
            break;
    }}else {
        console.log("You can order non-alcoholic")
    }
