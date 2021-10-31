const senhaGerada = document.querySelector("code#senhaGerada");
const botaoCopia = document.querySelector("button#botaoCopia");

const caracteres = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "*", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "+", "a", "s", "d", "f", "g", "h", "j", "k", "l", ".", "z", "x", "c", "v", "b", "n", "m", ",", ";", "!", "@", "#", "$", "%", "&", "_", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "<", ">", ":", "?"];

const geraSenha = () => {
    senhaGerada.textContent = "";
    for (let i = 0; i <= 19; i++) {
        let caractereAleatorio = Math.floor(Math.random() * caracteres.length);
        senhaGerada.innerHTML += `${caracteres[caractereAleatorio]}`;
    }
}

geraSenha();

setInterval(() => {
    geraSenha();
}, 1000);

const copiaSenha = () => {
    var range = document.createRange();
    range.selectNode(senhaGerada);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    botaoCopia.textContent = "Senha copiada!";
    setTimeout(() => {
        botaoCopia.textContent = "Copiar senha";
    }, 1000);
}