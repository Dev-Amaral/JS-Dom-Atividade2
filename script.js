//1ª questão
const minhalista = document.querySelector('#lista')
const ul = minhalista.querySelector('ul')
console.log("Quantidade de filhos da lista: "+ ul.children.length)

//2ª questão
ul.children[1].innerHTML = "<li>Item Modificado</li>"

//3ª questao
ul.innerHTML += "<li>Novo Item</li>"

//4ª questao
function adicionarItem(){
    let novoItem = document.createElement("li")
    novoItem.innerHTML = ("Item Criado Dinamicamente");
    ul.appendChild(novoItem)
}
adicionarItem()

//5ª questao
function ocultarSenha(){
    const senha = document.querySelector('input')
    if(senha.type == 'password'){
    senha.setAttribute('type','text')
    }else{
    senha.setAttribute('type','password')
    }
}

//6 ª questão 
ul.children[2].style.color = "red";
ul.children[3].style.fontWeight = "bold"


//7ª questão
function antes(){
    minhalista.before("<< Antes da lista >>")
}

function depois(){
    minhalista.after("<< Depois da Lista >>")
}

function novoItemInner(){
    ul.innerHTML += "<li>Novo Item</li>"
}


