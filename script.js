/*--------------1------------*/
let temperature = -1;

if (temperature < 0)
{
    console.log(`Temperatura aerului este de ${temperature} °C deci avem înghețuri`);
}
else if (temperature >= 0 && temperature <= 10)
{
    console.log(`Temperatura aerului este de ${temperature} °C deci este frig`);
}
else if (temperature >= 11 && temperature <= 25)
{
    console.log(`Temperatura aerului este de ${temperature} °C avem un timp moderat`);
}
else if(temperature > 25)
{
    console.log(`Temperatura aerului este de ${temperature} °C avem un timp cald`);
}
else 
{
    console.log(`Valoarea nu este valida`);
}

/*--------------2------------*/
let ziuaSaptamanii = 4;

if (ziuaSaptamanii == 1)
{
    console.log(`Luni`);
}
else if(ziuaSaptamanii == 2)
{
    console.log(`Marti`);
}
else if(ziuaSaptamanii == 3)
{
    console.log(`Miercuri`);  
}
else if(ziuaSaptamanii == 4)
{
    console.log(`Joi`);     
}
else if(ziuaSaptamanii == 5)
{
    console.log(`Vineri`);
}
else if(ziuaSaptamanii == 6)
{
    console.log(`Sambata`);           
}
else if(ziuaSaptamanii == 7)
{
    console.log(`Duminica`);              
}
else {
    console.log(`Valoarea nu este valida`);
}

/*--------------3------------*/

let numar = 8;

if (numar % 2 == 0)
{
    console.log(`Numarul ${numar} este par`);
}
else 
{
    console.log(`Numarul ${numar} este impar`);
}


/*--------------4------------ */

 let purchaseAmount = 20;

 if (purchaseAmount >= 100)
 {
    purchaseAmount = purchaseAmount - (purchaseAmount*10/100) ;
    purchaseAmount = purchaseAmount + (purchaseAmount*5/100);

    console.log(`${purchaseAmount}`);

 }
 else{
    purchaseAmount = purchaseAmount + (purchaseAmount*5/100);
    console.log(`${purchaseAmount}`);
 }

/*--------------5------------*/
let password = "Alexandra344566";
const chars = Array.from(password);

if ((password.length >= 12) && 
    (chars.some(char => /[A-Z]/.test(char))) && 
    (chars.some(char => /[a-z]/.test(char))) && 
    (chars.some(char => !isNaN(char) && char !== ' ')))
{
  console.log(`Parolă foarte sigură`);
}
else if((password.length >= 8) && 
        (chars.some(char => /[A-Z]/.test(char))) && 
        (chars.some(char => /[a-z]/.test(char))))
{
    console.log(`Parolă sigură`);
}
else if((password.length >= 6) && 
        (chars.some(char => /[a-z]/.test(char))))
{
    console.log(`Parolă slaba`);
}
else {
    console.log(`Parolă nesigură`);
}




/*--------------6------------*/

let num = 87;
let count = 0;
let isPrime = false;

if (num > 1)
{
    for ( let i = 2; i <= num; i++){
        if (num  % i == 0)
        {
        count++;
        }
    }
}
    
if (count == 1)
{
    isPrime = true;
}

if (isPrime)
{
    console.log(`Numarul ${num} este prim `);
}
else{
    console.log(`Numarul ${num} nu este prim `);
}

/*--------------7------------*/

let l1 = 3, l2 = 5, l3 = 4;

if ((l1 + l2 > l3) && (l1 + l3 > l2) && (l2 + l3 > l1))
{
    console.log(`Triunghiul poate fi creat`);
}
else{
    console.log(`Triunghiul nu poate fi creat`);
}

if ((l1**2) == ((l2**2) + (l3**2)))
{
   console.log(`Triunghi dreptunghic cu
                cateta =  ${l2}, catela = ${l3}
                si ipotenuza = ${l1}`);
}
 
if((l2**2) == ((l1**2) + (l3**2)))
{
    console.log(`Triunghi dreptunghic cu
                cateta = ${l1}, catela = ${l3}
                si ipotenuza = ${l2}`);
}

if((l2**2) == ((l1**2) + (l2**2)))
{
    console.log(`Triunghi dreptunghic cu
        cateta = ${l1}, catela = ${l2}
        si ipotenuza = ${l3}`);
}
    

