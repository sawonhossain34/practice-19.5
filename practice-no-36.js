//  for loop continue
var booksprice = [95, 100, 251, 354, 150, 124, 287,159,172,180];
for(i = 0 ; i < booksprice.length ; i++){
    var book = booksprice[i];
    if(book > 200){
        continue;
    }
    console.log(book);
}

       