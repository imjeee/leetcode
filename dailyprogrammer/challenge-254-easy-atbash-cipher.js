function convert(str) {
    var output = '';
    for (var i = 0; i < str.length; i++) {
        var chrCode = str.charCodeAt(i);
        if (chrCode >= 97 && chrCode <= 122) {
            output += String.fromCharCode(122 - chrCode + 97);
        } else if (chrCode >= 65 && chrCode <= 90) {
            output += String.fromCharCode(90 - chrCode + 65);
        } else {
            output += str[i];
        }
        
    }
    return output;
}

console.log(convert('foobar'));
console.log(convert('wizard'));
console.log(convert('/r/dailyprogrammer'));
console.log(convert('gsrh rh zm vcznkov lu gsv zgyzhs xrksvi'));

function atbash(input) {
    return input.replace(/[a-z]/gi,
			 c => String.fromCharCode(-c.charCodeAt() + (/[a-z]/.test(c) ? 219 : 155)));
}