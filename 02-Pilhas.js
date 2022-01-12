/* Pilhas são estruturas de dados que armazenam os elementos em um formato sequencial, empilhando um item acima do outro (imagine uma pilha de pratos, por exemplo). Estas estruturas permitem “empilhar” os itens que serão armazenados e “desempilhar” estes elementos da pilha quando precisarmos removê-lo. */

function Stack(params) {
  const items = []

  this.push = function (element) {
    // adiciona um novo item a pilha
    items.push(element)
  }

  this.pop = function () {
    // remove um item do topo da pilha
    return items.pop()
  }

  this.peek = function () {
    // devolve o elemento que esta no topo da pilha
    return items[items.length - 1]
  }

  this.isempty = function () {
    // informa se a pilha esta vazia
    return items.length === 0
  }

  this.clear = function () {
    // limpa a pilha
    items = []
  }

  this.size = function () {
    // informa o tamanho da pilha
    return items.length
  }

  this.print = function () {
    // imprime a pilha
    console.log(items.toString())
  }
}

const pilha = new Stack()

console.log(pilha.isempty())

pilha.push('5')
pilha.print()

pilha.push('8')
pilha.print()

pilha.push('11')
pilha.print()

pilha.push('15')
pilha.print()

console.log(`Removendo o topo da pilha`)
pilha.pop()
pilha.print()

pilha.pop()
pilha.print()

pilha.pop()
pilha.print()

pilha.pop()
pilha.print()

console.log(pilha.isempty())
