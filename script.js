
var continuar = true;
let pessoas = []; 

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
while(continuar){


var nome = prompt("Digite o seu nome:");
var idade = Number(prompt("Digite a idade do usuario:"));
var newpessoa = new Pessoa(nome, idade);
pessoas.push(newpessoa);
continuar = confirm("Voce deseja adicionar mais algum usuario? (N/S)");
}
console.log(pessoas);

function pessoaMaisVelha(pessoa){
    pessoa.sort(function(a, b){
        return a.idade - b.idade;
    });
    let resultado = pessoa[pessoa.length - 1];
        return resultado;
}

function mostrarPessoa(){
   let velho =  pessoaMaisVelha(pessoas);
   console.log("A pessoa mais velha é: "+velho.nome+ " Com "+velho.idade+ " anos ");
}
mostrarPessoa();
    


 

   



   
