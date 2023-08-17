function encodeAndDecodeMessages() {
    const [encodeButton, decodeButton] = [...document.querySelectorAll('#main button')];
    const textContainer = [...document.querySelectorAll('#main textarea')];

    encodeButton.addEventListener('click', encodeAndSend);
    decodeButton.addEventListener('click', decodeAndReadIt);

    // helper functions
    function transformText(text, cb) {
        return text.split('').map(cb).join('');
    }

    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    // on click callbacks
    function encodeAndSend(e) {
        textContainer[1].value = transformText(textContainer[0].value, nextChar);
        textContainer[0].value = "";
    }

    function decodeAndReadIt(e) {
        textContainer[1].value = transformText(textContainer[1].value, prevChar);
    }

}