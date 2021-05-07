        // FUNCTION MADE BY ME!
        function charLength(wordsToAdd) {
            wordsToAdd = prompt('Type a sentence to get the number of characters');
            wordsToAdd = wordsToAdd.split(' ');
            let letterCount = 0;
            for (i = 0; i < wordsToAdd.length; i++) {
                charsPerWord = wordsToAdd[i].length;
                letterCount += charsPerWord;
            }
            alert('The number of characters in this sentence is ' + letterCount);
        }
        charLength('Hello I am a word count');

// Solutions that I came up with below

        function bitwiseAND(n1, n2) {
            let result = [];
            let currentNumber;
            let binaryN1 = n1.toString(2).padStart(8, '0'); // Turn n1 into a binary string with 8 characters using zeros to pad it.
            let binaryN2 = n2.toString(2).padStart(8, '0'); // Turn n2 into a binary string with 8 characters using zeros to pad it.
            for (i = 0; i < 8; i++) {
                if (binaryN1[i] === binaryN2[i]) {
                    currentNumber = binaryN1[i];
                    result.push(currentNumber);
                } else {
                    result.push('0');
                }
            }
            let binaryResult = result.join('');
            return parseInt(binaryResult, 2); // Turn the binary string of `binaryResult` into a decimal value equal to its binary code.
        }

        function bitwiseOR(n1, n2) {
            let result = [];
            let currentNumber;
            let binaryN1 = n1.toString(2).padStart(8, '0'); // Turn n1 into a binary string with 8 characters using zeros to pad it.
            let binaryN2 = n2.toString(2).padStart(8, '0'); // Turn n2 into a binary string with 8 characters using zeros to pad it.
            for (i = 0; i < 8; i++) {
                if (binaryN1[i] === '1' || binaryN2[i] === '1') {
                    currentNumber = '1';
                    result.push(currentNumber);
                } else {
                    result.push('0');
                }
            }
            let binaryResult = result.join('');
            return parseInt(binaryResult, 2); // Turn the binary string of `binaryResult` into a decimal value equal to its binary code.
        }

        function bitwiseXOR(n1, n2) {
            let result = [];
            let currentNumber;
            let binaryN1 = n1.toString(2).padStart(8, '0'); // Turn n1 into a binary string with 8 characters using zeros to pad it.
            let binaryN2 = n2.toString(2).padStart(8, '0'); // Turn n2 into a binary string with 8 characters using zeros to pad it.
            for (i = 0; i < 8; i++) {
                if (binaryN1[i] === '1' && binaryN2[i] === '1') {
                    currentNumber = '0';
                    result.push(currentNumber);
                } else if (binaryN1[i] === '1' || binaryN2[i] === '1') {
                    currentNumber = '1';
                    result.push(currentNumber);
                }
                else {
                    result.push('0');
                }
            }
            let binaryResult = result.join('');
            return parseInt(binaryResult, 2); // Turn the binary string of `binaryResult` into a decimal value equal to its binary code.
        }

// After completing the challenge found out there was a MUCH easier way to achieve the same result

        function bitwiseAND2(n1, n2) {
            return n1 & n2;
        }

        function bitwiseOR2(n1, n2) {
            return n1 | n2;
        }

        function bitwiseXOR2(n1, n2) {
            return n1 ^ n2;
        }