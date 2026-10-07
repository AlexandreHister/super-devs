/* for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        if (linha === coluna) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }

    }
    console.log(desenho);
} */


/* for (let linha = 1; linha >= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        if (linha + coluna === 7) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }

    }
    console.log(desenho);
} */




/* for (let linha = 1; linha <= 7; linha++) {
    let desenho = ""

    for (let coluna = 1; coluna <= 7; coluna++) {
        if (linha === coluna || linha + coluna === 8) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }
    }
    console.log(desenho);
} */





/* for (let linha = 1; linha <= 7; linha++) {
   let desenho = ""

   for (let coluna = 1; coluna <= 7; coluna++) {
       if (linha === 4 || coluna === 4) {
           desenho += "*";
       }
       else {
           desenho += " ";
       }
   }
   console.log(desenho);
}  */




/* for (let linha = 1; linha <= 4; linha++) {
    let desenho = ""

    for (let coluna = 1; coluna <= 4; linha++) {
        desenho += linha * coluna;

    }
    console.log(desenho);
} */



 for (let linha = 1; linha <= 7; linha++) {
   let desenho = ""

    for (let coluna = 1; coluna <= 7; coluna++) {
        if (coluna <= linha) {
            desenho += "#";
        }
        else {
            desenho += ".";
        }
    }
    console.log(desenho);
} 

