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
    let y = adjustBackgroundColor(6, 'abcdef1234567890')
    document.body.style.background = `linear-gradient(#${x}, #${y})`
    document.body.style.height = document.getElementById('changeBackgroundColor').innerText = 
    document.getElementById("changeBackgroundColor").innerText = `#${x} - #${y}`
}


function setSolidColor() {
    let x = adjustBackgroundColor(6, '1234567890abcdef')

    document.body.style.background = `#${x}`
    document.body.style.height = document.getElementById('changeBackgroundColor').innerText = 
    document.getElementById("changeBackgroundColor").innerText = `#${x}`
}

function colorPage() {
	window.open('pages/color.html')
}

function home() {
	window.open('../index.html')
}
