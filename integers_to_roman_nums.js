var intToRoman = function(num) {
    let resultNumeral = '';
    let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    //created arrays for all values up to 1000 and matching roman numerals. Had to refactor solution to account for special cases like 40 (XL), 90(XC), etc ie numbers that need subtraction.
    for (var i = 0;i<=number.length;i++) {
      // loop over each element of the arrays
        while (num%number[i] < num) {
          // keep trying the same number until we need to move to a smaller number
            result += roman[i];
            // add the matching roman numeral to our result numeral string
            num -= number[i];
            // must subtact the number value from out numeral
    }
  }
  return resultNumeral;
};
