function enviarWhatsApp() {
    const numero = document.getElementById("numero").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!numero) {
        alert("Digite um número!");
        return;
    }

    const texto = encodeURIComponent(mensagem);
    const link = `https://wa.me/${numero}?text=${texto}`;

    window.open(link, "_blank");
}
