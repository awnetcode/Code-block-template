function copyCode(button) {
    const codeBlock = button.parentElement.nextElementSibling.querySelector('code');
    const code = codeBlock.innerText;

    // Skopiowanie kodu do schowka
    navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Skopiowano!";
        setTimeout(() => {
            button.innerText = "Skopiuj kod";
        }, 2000);
    }).catch(err => {
        console.error('Nie udało się skopiować kodu: ', err);
    });
}
