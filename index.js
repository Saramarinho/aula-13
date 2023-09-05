//CONDICIONAIS
/*
let condicao1 = true
 if (condicao1){
// Como o valor da condição é true,
// o código desse bloco é executado
console.log('Entrei no if 1!')
 }

 let condicao2 = false
 if (condicao2){
// Como o valor da condição é false,
// o código desse bloco não é executado
console.log('Entrei no if 2!')
 }

 function numbers(num1, num2) {
let comparation = num1 === num2;
    if (comparation){
        return "sucesso";
    }
 }
 let usuario = Number(prompt("Insira o número"))
 let usuario2 = Number(prompt("Insira o número"))
console.log(numbers(usuario,usuario2));


function texto(nome, idade) {
let maioridade 
    if (idade >= 18) {
        return nome + ", você pode dirigir";
}
}
let usuarioN = prompt("Seu nome")
let usuarioI = Number(prompt("Sua idade")) 

console.log(texto(usuarioN, usuarioI))

let condicao = false

if (condicao) {
    console.log("Entrei no if!")
} else {
    // como o valor da condição é false,
    // o código de bloco else será executado
    console.log('Entrei no else!')
}

function numbers(num1, num2) {
    let comparation = num1 === num2;
        if (comparation){
            return "sucesso";
        }
        else{
            return "diferentes";
        }
     }
     let usuario = Number(prompt("Insira o número"))
     let usuario2 = Number(prompt("Insira o número"))
    console.log(numbers(usuario,usuario2)); 
    
   function comparaNumeros(num1, num2){
    if(num1 > num2){
        return "Numero 1 é maior do que o 2";
    }else if(num1 === num2){
        return "Numero 1 é igual ao numero 2";
    }else {
        return "Numero 1 é menor do que o numero 2";
    }
   }
  console.log(
    comparaNumeros(
        Number(prompt("Digitw o primeiro numero")),
        Number(prompt("Digite o segundo numero"))
    )
    );
  
   //Switch
   let paisDeOrigem
   switch (paisDeOrigem){
    case 'Brasil':
        console.log('brasileiro')
        break
    case 'EUA':
         console.log('norte americano')
        break
    case 'Inglaterra':
        console.log('inglês')
        break
        default:
            console.log('nacionalidade não encontrada')
            break
   }
   
   let pokémon = prompt("Qual o seu Pokémon")
   switch ("pokémon"){
    case "Bulbasauro":
        console.log('Planta e Veneno')
        break
    case "Charmander":
        console.log("Fogo")
        break
    case "Squirtle":
        console.log("Água")
        break
    default:
        console.log("Pokémon não encontrado")
        break;
   }
   */
  function pessoa(conclusão, idade, faculdade){
   if(conclusão == "sim" && idade >= 18 && faculdade == "não"){
    return "Pode estudar na faculdade";
   }else { return "Não pode estudar na faculdade";}
  }
console.log(pessoa(prompt("Concluiu o EM?").toLowerCase(),
Number(prompt("Sua idade?")),
prompt("EStá cursando outra faculdade?").toLowerCase(),
));
