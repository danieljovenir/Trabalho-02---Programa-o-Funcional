const validarEntrada = (valor) => {
    if (isNaN(valor) || valor <= 0) {
      return { valido: false, mensagem: "O valor deve ser um número positivo." };
    }
    return { valido: true, mensagem: "" };
  };
  
  const calcularConversao = (valor, taxa) => {
    return valor * taxa;
  };
  
  const obterEntradas = () => {
    return [
      parseFloat(document.getElementById("valor").value),
      parseFloat(document.getElementById("taxaCambio").value),
      document.getElementById("moedaOrigem").value,
      document.getElementById("moedaDestino").value,
    ];
  };
  
  const exibirResultado = (resultado, moedaDestino) => {
    document.getElementById("resultado").innerText = 
      `Valor convertido: ${resultado.toFixed(2)} ${moedaDestino}`;
  };
  
  const converterMoeda = () => {
    const [valor, taxaCambio, moedaOrigem, moedaDestino] = obterEntradas();
    
    const validacoes = [valor, taxaCambio].map(validarEntrada);
    
    if (!validacoes[0].valido) {
      document.getElementById("resultado").innerText = validacoes[0].mensagem;
      return;
    }
    
    if (!validacoes[1].valido) {
      document.getElementById("resultado").innerText = validacoes[1].mensagem;
      return;
    }
  
    if (moedaOrigem === moedaDestino) {
      document.getElementById("resultado").innerText = "As moedas de origem e destino não podem ser as mesmas.";
      return;
    }
  
    const valorConvertido = calcularConversao(valor, taxaCambio);
    exibirResultado(valorConvertido, moedaDestino);
  };
  
  document.getElementById("converterBtn").addEventListener("click", converterMoeda);
  