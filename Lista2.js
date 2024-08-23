//Atividade1:
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    pesquisa(valor) {
        let current = this.head;
        while (current !== null) {
            if (current.data === valor) {
                return 1; // Encontrado
            }
            current = current.next;
        }
        return 0; // Não encontrado
    }
}

//Atividade2:
class LinkedList {
    constructor() {
        this.head = null;
    }

    isCrescente() {
        if (this.head === null || this.head.next === null) {
            return true; // Lista vazia ou com um único elemento é considerada crescente
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.data > current.next.data) {
                return false; // Encontrado elemento fora de ordem
            }
            current = current.next;
        }
        return true;
    }
}

//Atividade3:
class LinkedList {
    constructor() {
        this.head = null;
    }

    removePares() {
        while (this.head !== null && this.head.data % 2 === 0) {
            this.head = this.head.next; // Remove elementos pares no início
        }

        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.next.data % 2 === 0) {
                current.next = current.next.next; // Remove o elemento par
            } else {
                current = current.next;
            }
        }
    }
}

//Atividade4:
function somaVetor(vetor, n) {
    if (n === 0) {
        return 0;
    } else {
        return vetor[n - 1] + somaVetor(vetor, n - 1);
    }
}

// Exemplo de uso:
let vetor = [1, 2, 3, 4, 5];
console.log(somaVetor(vetor, vetor.length)); // Saída: 15

//Atividade5:
function decimalParaBinario(n) {
    if (n === 0) {
        return "0";
    } else if (n === 1) {
        return "1";
    } else {
        return decimalParaBinario(Math.floor(n / 2)) + (n % 2).toString();
    }
}

// Exemplo de uso:
console.log(decimalParaBinario(10)); // Saída: "1010"

//Atividade6:
function h(m, n) {
    if (m === 0) {
        return n + 1;
    } else if (m > 0 && n === 0) {
        return h(m - 1, 1);
    } else {
        return h(m - 1, h(m, n - 1));
    }
}

// Exemplo de uso:
console.log("Resultado de h(3, 3): " + h(3, 3)); // Saída: 61