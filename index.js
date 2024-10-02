// Write your solution here!
// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    var newArray = [...cats]
    newArray.push(name)
    return newArray
}

function prependCat(name)
{
    var newArray2 = [...cats]
    newArray2.unshift(name)
    return newArray2
}

function removeLastCat(){
    var newArray3 = [...cats]
    newArray3.pop()
    return newArray3
}

function removeFirstCat(){
    var newArray4 = [...cats]
    newArray4.shift()
    return newArray4
}
