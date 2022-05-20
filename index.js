

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/*
1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)
*/
function numberGen()
{
    nOne = rand(1, 6);
    nTwo = rand(1, 6);
    header1 = document.getElementById("oneone");
    header2 = document.getElementById("onetwo");
    header1.setAttribute("style", "color:white");
    header2.setAttribute("style", "color:white");
    header1.innerText = nOne;
    header2.innerText = nTwo;
    
    if (nOne === nTwo)
    {
        header1.setAttribute("style", "color:red");
        header2.setAttribute("style", "color:red");
    }

}


/*
2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)
*/
numberStorage = [];

function numberGen2()
{

    number = rand(1, 10);
    numberStorage.push(number);
    console.log(numberStorage);

    header = document.getElementById("twoOne");
    if (header.innerText)
        oldNumber = parseInt( header.innerText );
    else
        oldNumber = 0;
    number += oldNumber;
    header.innerText = number;
}



/*
3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą africa. (4 taškai)
b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
*/

theList = document.getElementById("threeOne");
for(let i = 0; i < africa.length; i++)
{
    if(africa[i].length)
    {
        newItem = document.createElement("li");
        newItem.innerText = africa[i];
        theList.appendChild(newItem);
        console.log(newItem);
    }
}


/*
4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
Pasirinkite patys sau patogiausius metodus tai atlikti.
*/
function add()
{
    numberOne = parseFloat( document.getElementById("numberOne").value);
    numberTwo = parseFloat( document.getElementById("numberTwo").value);

    output = numberOne + numberTwo;
    document.getElementById("calcOutput").innerText = output;
}

function subtract()
{
    numberOne = parseFloat( document.getElementById("numberOne").value);
    numberTwo = parseFloat( document.getElementById("numberTwo").value);

    output = numberOne - numberTwo;
    document.getElementById("calcOutput").innerText = output;
}

/*
5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
*/

lastList = document.getElementById("fiveOne");
lastString = '';

for(let i = 0; i < australia.length; i++)
{
    newString = australia[i];
    lastString += newString;
    if(i < (australia.length - 1))
        lastString += ' ';

    newItem = document.createElement("li");
    newItem.innerText = newString;
    if(newString === "Dingo")
    {
        newItem.setAttribute("style", "background-color:blue");
        console.log(newItem);
    }
    lastList.appendChild(newItem);
}

lastList.appendChild(document.createElement('br'));
div = document.createElement("div");
div.innerText = lastString;
lastList.appendChild(div);


/*theList = document.getElementById("threeOne");
for(let i = 0; i < africa.length; i++)
{
    if(africa[i].length)
    {
        newItem = document.createElement("li");
        newItem.innerText = africa[i];
        theList.appendChild(newItem);
    }
}*/