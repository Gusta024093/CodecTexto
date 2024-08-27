function codificar() {
    let texto = document.getElementById("text").value
    try {
        let utf8Bytes = new TextEncoder().encode(texto)
        let encodedText = btoa(String.fromCharCode.apply(null, utf8Bytes))
        document.getElementById("output").innerText = "Texto Codificado: " + encodedText
    } catch (e) {
        document.getElementById("output").innerText = "Erro: Texto inválido para codificação base64."
    }
}

function decodificar() {
    let texto = document.getElementById("text").value
    texto_limpo = texto.trim()
    try {
        let binaryString = atob(texto_limpo)
        let utf8Bytes = new Uint8Array([...binaryString].map(char => char.charCodeAt(0)))
        let decodedText = new TextDecoder().decode(utf8Bytes)
        document.getElementById("output").innerText = "Texto Decodificado: " + decodedText
    } catch (e) {
        document.getElementById("output").innerText = "Erro: Texto inválido ou não é base64."
    }
}
