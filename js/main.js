
const generate = () => {
    var len = document.getElementById('length').value;
    var uppper = document.getElementById('upper');
    var char = document.getElementById('char');
    var digit = document.getElementById('digit');
    if(len==='') {
        alert('Length Should not be empty');
    } else {
        var word = 'qwertyuioplkjhgfdsazxcvbnm'
        console.log('upper ->', uppper.checked)
        console.log('special ->', char.checked)
        console.log('digit ->', digit.checked)
        console.log(word)
        var fin = 0
        var pass = ''
        if (uppper.checked) {
            word += 'QWERTYUIOPLKJHGFDSAZXCVBNM'
            var pos = Math.floor(Math.random()*'QWERTYUIOPLKJHGFDSAZXCVBNM'.length);
            pass += 'QWERTYUIOPLKJHGFDSAZXCVBNM'[pos]
            fin += 1
        }
        if (char.checked) {
            word += '!@#$%^&*()_+-={}[];<>:';
            let pos = Math.floor(Math.random()*'!@#$%^&*()_+-={}[];<>:'.length);
            pass += '!@#$%^&*()_+-={}[];<>:'[[pos]]
            fin += 1
        }
        if (digit.checked) {
            word += '9874563210'
            var pos = Math.floor(Math.random()*'9874563210'.length);
            pass += '9874563210'[pos]
            fin += 1
        }
        for (let ind=0; ind<len-fin; ind++) {
            var pos = Math.floor(Math.random()*word.length);
            pass += word[pos]
        }
        document.getElementById('password').innerHTML = pass
    }
}