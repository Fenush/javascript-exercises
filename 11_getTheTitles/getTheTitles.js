const getTheTitles = function(books) {
    let length= books.length;
    let i=0;
    const newArray = [];
    while (i< length){
    newArray.push(books[i].title);
    i+=1;
    }
    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
