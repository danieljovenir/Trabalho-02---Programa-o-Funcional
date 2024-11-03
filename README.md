# Conversor de Moedas: Programação Funcional

Este projeto é um conversor de moedas criado para a disciplina de **Linguagem de Programação e Paradigmas**. A aplicação é uma prática de programação funcional e tem como principais características a utilização de funções puras, imutabilidade e funções de ordem superior.

---

## 📋 Funcionalidades

1. **Conversão entre Moedas**: Permite a conversão de valores entre USD, EUR, e BRL.
2. **Taxa de Câmbio Personalizada**: O usuário pode informar a taxa de câmbio ou utilizar a taxa padrão (USD para BRL: 5.87).
3. **Validação de Entrada**: Apenas valores numéricos e positivos são aceitos para conversão.
4. **Exibição Precisa do Resultado**: O valor convertido é exibido com duas casas decimais para maior precisão.

---

## ⚙️ Tecnologias Utilizadas

- **HTML e CSS**: Interface do usuário, com layout responsivo e estilização profissional.
- **JavaScript**: Programação funcional com ênfase em funções puras e manipulação de dados.

---

## 📐 Estrutura do Código

O código utiliza três funções principais que seguem os princípios de programação funcional:

### Funções Principais

- **`validarEntrada`**: Verifica se o valor inserido é válido, ou seja, numérico e positivo. 
  - **Tipo**: Função pura.
  - **Saída**: Retorna `true` para valores válidos, `false` para valores inválidos.

- **`calcularConversao`**: Aplica a taxa de câmbio fornecida ao valor de entrada sem alterar o valor original.
  - **Tipo**: Função pura.
  - **Saída**: Retorna o valor convertido.

- **`converterMoeda`**: Função principal que combina as funções `validarEntrada` e `calcularConversao`. Valida as entradas usando a função de ordem superior `filter` e, em seguida, calcula o valor convertido.
  - **Tipo**: Função composta e de ordem superior.
  - **Uso de Imutabilidade**: Gera um novo valor para o resultado sem modificar a entrada original.

---

## 🎓 Conceitos de Programação Funcional

1. **Funções Puras**: Todas as funções são puras, ou seja, cada função retorna o mesmo resultado para os mesmos parâmetros, sem causar efeitos colaterais.

2. **Imutabilidade**: O código evita a alteração direta dos valores de entrada. Cada cálculo gera um novo valor em vez de modificar o valor original.

3. **Funções de Ordem Superior**: A função `filter` é usada para validar as entradas. Isso permite uma validação funcional e reutilizável dos dados fornecidos pelo usuário.

---

## 💰 Exemplo de Uso

- **Valor de entrada**: 1
- **Moeda de origem**: USD
- **Moeda de destino**: BRL
- **Taxa de câmbio**: 5,87 (padrão)

**Resultado esperado**: 
Valor convertido: 5,87 BRL

---

## 🔧 Instruções de Instalação e Execução

1. **Abra o arquivo HTML**: Navegue até o diretório do projeto e abra o arquivo `index.html` em um navegador de sua preferência.

2. **Uso**:
   - Insira o valor que deseja converter.
   - Selecione as moedas de origem e destino.
   - Informe a taxa de câmbio, ou deixe o valor padrão.
   - Clique em "Converter" para ver o valor convertido.

---

## 🚀 Exemplos de Conversão com Outras Taxas

- **USD para EUR**: Taxa de câmbio de exemplo: 0,91
- **EUR para BRL**: Taxa de câmbio de exemplo: 6,44

Esses valores são configuráveis na interface da aplicação, permitindo que o usuário realize as conversões desejadas.

---

## ✍️ Créditos e Contribuição

- Desenvolvido por: Daniel Jovenir Espindola e Rafael Batistti Munarin
- Este projeto foi criado para fins educacionais e para demonstrar o uso de programação funcional.

---

**Observação**: Todo o código foi desenvolvido com base nos conceitos da programação funcional, e documentado para que os princípios utilizados possam ser claramente identificados e compreendidos.