$(document).ready(function () {

    /** selecting the elements with ".item" class and declaring an array to store each element counter separately **/
    const items = document.querySelectorAll('segnatura'),
        countArr = new Array(items.length);
    /** 
    * el: the current element from the "segnatura" elements collection
    * i: the index of that elemnt in the collection
    **/
    var p = 0;
    var pSkip = 0;
    var pAppe = 0;
    items.forEach((el, i) => {
        var elClass = el.className;
        switch (elClass) {
            case "segnatura-appendice":
                let txtCountR = el.querySelector('.count');
                pAppe = pAppe + 1;
                txtCountR.textContent = romanize(pAppe);
                console.log("segnatura appendice: " + pAppe);
                break;
            case "segnatura-skip":
                p = p;
                pSkip = pSkip + 1;
                // console.log("p skip: " + p);
                break;
            default:
                p = p + 1;
                let txtCount = el.querySelector('.count');
                txtCount.textContent = p;
                console.log("segnatura: " + p);
        }
    });
});

function romanize(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


