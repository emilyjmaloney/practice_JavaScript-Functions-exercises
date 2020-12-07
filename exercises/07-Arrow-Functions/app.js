const rapid=(inputString) => {
    var newString = ""
    let lowerString = inputString.toLowerCase()
    for (let i = 0; i < lowerString.length; i++){ 
        if (
            lowerString[i] != "a" &&
            lowerString[i] != "e" &&
            lowerString[i] != "i" &&
            lowerString[i] != "o" &&
            lowerString[i] != "u"
        ){
        newString = newString + lowerString[i].toUpperCase()
        }
    }
        return newString;
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));