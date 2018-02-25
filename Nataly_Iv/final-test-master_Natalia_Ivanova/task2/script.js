"use strict"

// задача 1 (4т.)
// Сортирайте следния списък от числа във възходящ ред:
var arr = [2, 5, 8, 4, 1, 12];
var arr = [2, 5, 8, 4, 1, 12];
arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);
//.............................................................................................

// задача 2 (4т.)
// Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
var text = "The quick brown fox jumps over the lazy dog";

function sortText(text) {
    var arrText = text.split(" ");
    for (var i = 0; i < arrText.length; i++) {
        if(arrText[i].length > 4) {
            console.log(arrText[i]);
        }
    }
}

sortText(text);

// ...............................................................................................

// задача 3 (5т.)
// Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`
    $( "#container" ).append( "<p>Hello</p>" );

// .....................................................................................................

// задача 4 (6т.)
// Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)

// ...

// задача 5 (6т.)
// Напишете функция, която да сортира следния списък от обекти по полето `price`:
var items = [
  {
    id: 1,
    title: "Item 1",
    price: 4.3
  },
  {
    id: 2,
    title: "Item 2",
    price: 2.0
  },
  {
    id: 3,
    title: "Item 3",
    price: 6.5
  },
  {
    id: 4,
    title: "Item 4",
    price: 1.5
  }
];


function compare(a,b) {
    if (a.price < b.price)
        return -1;
    if (a.price > b.price)
        return 1;
    return 0;
}

items.sort(compare);


// ................................................................................
