function trim(){
    let name ="satyaveer"
    let result =name.trim()
    console.log(result)
}


function convert(){
    let string ='functionUp'
    let lowercase =string.toLowerCase()
    let uppercase =string.toUpperCase()
    console.log(lowercase,uppercase)
}



module.exports.trim = trim
module.exports.convert = convert