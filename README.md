# Calculadora de IMC

Este projeto é uma **calculadora de IMC (Índice de Massa Corporal)** simples, implementada em HTML, CSS e JavaScript. O IMC é uma ferramenta usada para avaliar a relação entre peso e altura de um indivíduo, ajudando a determinar sua classificação de peso, como "peso normal", "sobrepeso" e "obesidade". O cálculo é feito de acordo com os critérios estabelecidos pela Organização Mundial da Saúde (OMS).

## Funcionalidades

- **Cálculo de IMC**: Insira seu peso (em kg) e altura (em metros) para calcular seu IMC.
- **Classificação IMC**: Após o cálculo, a calculadora fornece a classificação do IMC, que pode ser:
  - Abaixo do Peso
  - Peso Normal
  - Sobrepeso
  - Obesidade Grau 1
  - Obesidade Grau 2
  - Obesidade Grau 3
- **Máscara de entrada**: Os campos de entrada para peso e altura têm uma máscara que permite ao usuário inserir os valores no formato correto (usando ponto como separador decimal).
- **Interatividade**: O IMC é recalculado automaticamente enquanto o usuário digita seus dados, sem a necessidade de pressionar o botão "Calcular".
- **Limpeza de campos**: O botão "Limpar" permite ao usuário limpar os campos de entrada e o resultado.

## Como Usar

1. Clone o repositório ou baixe os arquivos para o seu computador.
2. Abra o arquivo `index.html` em seu navegador.
3. Insira seu peso e altura nos campos apropriados.
4. O IMC será calculado automaticamente e a classificação será exibida.
5. Caso queira fazer um novo cálculo, clique no botão "Limpar" para resetar os campos.


## Detalhes do Código

### HTML
O arquivo `index.html` contém a estrutura da página, com os seguintes elementos principais:
- **Campo de entrada de altura**: O usuário insere a altura em metros.
- **Campo de entrada de peso**: O usuário insere o peso em quilos.
- **Botão "Calcular"**: O cálculo do IMC é disparado quando o usuário clica nesse botão.
- **Botão "Limpar"**: Limpa os campos de entrada e o resultado exibido.

### CSS
O arquivo `style.css` contém as regras de estilo para tornar a interface amigável e responsiva. Isso inclui o layout da página, a formatação dos campos de entrada, e a exibição do resultado.

### JavaScript
O arquivo `script.js` contém a lógica da calculadora:
- **Máscaras de entrada**: As máscaras para os campos de altura e peso são aplicadas para garantir que o usuário insira os valores no formato correto.
- **Classe `TextoIMC`**: A classe responsável por criar e exibir o conteúdo informativo sobre o IMC na página.
- **Cálculo do IMC**: A função `calcularImc` recebe os valores de peso e altura, calcula o IMC e exibe a classificação correspondente.

### Exemplo de Cálculo do IMC:
- **Peso**: 70 kg
- **Altura**: 1.75 m
- **IMC Calculado**: 22.86
- **Classificação**: Peso Normal

## Como Contribuir

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b feature/novos-recursos`).
3. Realize as alterações necessárias.
4. Envie um pull request com a descrição das mudanças feitas.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).


