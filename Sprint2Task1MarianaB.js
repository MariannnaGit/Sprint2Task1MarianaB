/*Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.*/

const add = (num1, num2) => num1 + num2;
function showMessage() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    let result = `El resultat es ${add(num1, num2)}`;
    document.getElementById("result").innerHTML = result        
}

/*Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.*/
function randomNum() {
    randomNumber = randomNumResult => randomNumResult = Math.floor(Math.random() * 101);
    document.getElementById("randomNumResult").innerHTML = randomNumber()
    }

/*Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.*/

const person = {
    name: ""
}

class Ordenador {
    #name;
    constructor(name) {
      this.#name = name;
    }
    getName() {
      return this.#name;
    }
  
    setName(newName) {
      this.#name = newName;
    }
    
    greet() {
        return document.getElementById("heyNewFriend").innerHTML = `Hola ${this.#name}`
    }
  }

function addFriend() {
const newFriendName = document.getElementById("newFriendName").value;
const newFriend = new Ordenador(newFriendName);
newFriend.greet()
}

/*Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.
conduirResult
*/
function driverCheck() {
    const age = Number(document.getElementById("age").value);
    return document.getElementById("conduirResult").innerHTML = age > 18 && age < 70 ? 'Pots conduir' : 'No pots conduir';
}

/*Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.*/
function checkBiggerNum() {
    const checkBigger1 = Number(document.getElementById("checkBigger1").value);
    const checkBigger2 = Number(document.getElementById("checkBigger2").value);
    return document.getElementById("biggerNum").innerHTML = checkBigger1 > checkBigger2 ? `${checkBigger1} és més gran` : `${checkBigger2} és més gran`;
}
/*Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.*/
function calculateDinnerTotal(totalPrice) {
    return totalPrice *= 24
}
function printDinnerTotal(totalPrice) {
    document.getElementById("priceTotal").innerHTML = `Preu total del sopar: ${totalPrice} euros`
}

function dinnerTotal() {
    const ghestsNum = Number(document.getElementById("ghestssNum").value);
    return printDinnerTotal(calculateDinnerTotal(ghestsNum))
    }

/*Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.*/
function calculateFriendsDinnerTotal(dinnerFriendsNum, indivPrice) {
    return dinnerTotal = dinnerFriendsNum * indivPrice;
}
function showDinnerTotal(dinnerTotal) {
    document.getElementById("dinnerPriceTotal").innerHTML = `Preu total del sopar: ${dinnerTotal} euros`
}

function dinnerTotalTwoValues() {
    const dinnerFriendsNum = Number(document.getElementById("dinnerFriendsNum").value);
    const indivPrice = Number(document.getElementById("indivPrice").value);
    return showDinnerTotal(calculateFriendsDinnerTotal(dinnerFriendsNum, indivPrice))
    }
/*Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.*/
function showFriends(){
    const susanFriends = ['Sean', 'Sam', 'Simon', 'Sue'];
    const johnFriends = ['Jeff', 'Jacky', 'Julie', 'Jean'];
    const coupleFriends = [...susanFriends, ...johnFriends];
    document.getElementById("coupleFriends").innerHTML = `Els amics de la parella: Susan i John son: ${coupleFriends.join(", ")}.`
}
/*Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.*/
const baseNums = [1, 2, 3, 4, 5, 6];
function showSquare() {
    const squareNums = baseNums.map(num => {return num * num});
    document.getElementById("squareResult").innerHTML =  `Els quadrats son: ${squareNums}`;        
}
/*Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.*/
function showEvenNums() {
    const evenNums = baseNums.filter(number => number % 2 == 0);
    document.getElementById("evenNumsResult").innerHTML =  `Els parells son: ${evenNums}`;     
}
/*Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.*/
function showBiggerTen() {
    const givenNums = [1, 10, 8, 11];
    const biggerTen = givenNums.find(num => num < 10) + 1;
    document.getElementById("biggerTenResult").innerHTML =  `El primer 10 és a la posició: ${biggerTen}`; 
}
/*Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.*/
function showAddition() {
    const givenNums = [13, 7, 8, 21];
    const additionResult = givenNums.reduce((accumulator, currentValue) => { return accumulator + currentValue});
    document.getElementById("additionResult").innerHTML =  `La suma total és: ${additionResult}`; 
}
const names = ['Anna', 'Bernat', 'Clara'];
function showNames() {
    names.forEach(names => {console.log(val)});
    document.getElementById("checkConsole").innerHTML =  `Fet. Veure la console`; 
}
/*for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];*/
function showNamesForOf() {
    for (let valName of names) {
        console.log(valName);
    }
    document.getElementById("checkConsole2").innerHTML =  `Fet. Veure la console`; 
}
/*filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];*/
function showEvenNums2() {
    const evenNums2 = baseNums.filter(number => number % 2 == 0);
    document.getElementById("evenNumsResult2").innerHTML =  `Els parells son: ${evenNums2}`;     
}
/*Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.*/
async function promisedMessage() {
    let myPromisedMessage = new Promise (function(resolve) {
        setTimeout(function() {resolve('Hola, món');}, 2000);
    })
    document.getElementById("showPromisedMessage").innerHTML = await myPromisedMessage;
}
/*Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.*/
function promisedMessageThen() {
    const myPromisedMessageThen = new Promise (function(resolve) {
        resolve('Hola, món');})
    }
myPromisedMessageThen.then(
        function(value) {console.log(value);
            document.getElementById("showPromisedMessage2").innerHTML = value;
        }
    )

/*Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.*/
function myPromisedMessageReject() {
const myPromiseReject = new Promise (function(myResolve, myReject) 
{   
    let x = 'Hola';
    if (x == 'Hola') {
        setTimeout(() => myResolve('Hola'), 2000); 
    } else {
        setTimeout(() => myReject("Error"), 2000); 
    }
    
});

myPromiseReject.then(
    function(myResolve) {console.log(myResolve)},
    function(myReject) {console.log(myReject)}
)
}
/*Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.*/
async function myPromisedMessageAwait() {
    let myPromisedAwait = new Promise (function(myResolve, myReject) 
    {   
        let x = 'Hola';
        if (x == 'Hola') {
            setTimeout(() => myResolve('Hola'), 2000); 
        } else {
            setTimeout(() => myReject("Error"), 2000); 
        }
        
    })
    document.getElementById("showPromisedAwait").innerHTML = await myPromisedMessageAwait;
}