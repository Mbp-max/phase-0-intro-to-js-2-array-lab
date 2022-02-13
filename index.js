const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
        var newCats = cats.slice();
        newCats.push("Broom");
        return newCats
}
function prependCat(name) {
    var newCats = cats.slice();
    newCats.unshift("Arnold");
    return newCats
}
function removeLastCat(name) {
    var newCats = cats.slice();
    newCats.pop();
    return newCats
}
function removeFirstCat(name) {
    var newCats = cats.slice();
    newCats.shift();
    return newCats
}