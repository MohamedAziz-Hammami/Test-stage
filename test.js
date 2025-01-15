const fs = require('fs');

function getnumbersfromstring(string) {
    const numbers = string.match(/[0-9]+/g);
    if (numbers) {
        var concatenatedNumber = '';
        for (var num of numbers) {
            num1 += num;
        }
        return Number(num1);
    }
    return 0;
}
function checkfile(nomfichier) {
    try {
        const data = fs.readFileSync(nomfichier, 'utf8');
        const lines = data.split('\n');
        let total = 0;
        for (const line of lines) {
            const line1 = line.trim();
            if (line1) {
                total += getnumbersfromstring(line1);
            }
        }
        return total;
    } catch (err) {
        console.log(err.message);
        return null;
    }
}
const nomfichier = 'C:/Users/bazaz/Downloads/document.txt';
const result = checkfile(nomfichier);
if (result !== null) {
    console.log('La somme totale des nombres est:' + result);
}
