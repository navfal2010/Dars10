let first = +prompt('birnchi soni kiriting')

let second = +prompt('ikkinchi soni kiriting')

const all = function (first, second) {

    if (isNaN(first) || isNaN(second)) {
        alert('Iltimos son kiriting')
        return
    }

    if (first === second) {
        alert('ikkalasi bir biriga teng')
        return first;
    } 
    
    else{
    alert("eng kotta son " + Math.max(first, second))
    }
}

all(first, second)


