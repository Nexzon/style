function adjustBackgroundColor(len, arr) {
    var ans = '';
    for (var i = len; i > 0; i--) {
        ans += 
          arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
}


function setColor() {
    let x = adjustBackgroundColor(6, '1234567890abcdef')
    let y = `#FDDDEF`
    document.body.style.background = `linear-gradient(${x}, ${y})`
    document.getElementById("changeBackgroundColor").innerText = `#${adjustBackgroundColor(6, '1234567890abcdef')}`
}

