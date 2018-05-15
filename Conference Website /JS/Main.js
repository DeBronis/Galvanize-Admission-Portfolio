/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function alert1(){
    var jane = document.getElementById('janeDoe');
    var joe = document.getElementById('joeShmoe');
    var ron = document.getElementById('ronRae');
    var name = "";
    
    if(jane.checked){
        name = "Jane Doe";
    } else if(joe.checked){
        name = "Joe Shmoe";
    } else if(ron.checked){
        name = "Ron Rae";
    }
    alert("Thank you voting for " + name);
}

function registration(){
    var idNum = document.getElementById('idNum').value;
    var idName = document.getElementById('idName').value;
    var firstName = document.getElementById('1stName').value;
    var lastName = document.getElementById('lastName').value;
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zipCode = document.getElementById('zipCode').value;
    var telNum = document.getElementById('telNum').value;
    var email = document.getElementById('email').value;
    var compWeb = document.getElementById('compWeb').value;
    var compPos = document.getElementById('compPos').value;
    var compName = document.getElementById('compName').value;
    var mealPlan;
    var fullMeal = document.getElementById('fullMeal');
    var secondDin = document.getElementById('2nDin');
    var noMeal = document.getElementById('noMeal');
    if(fullMeal.checked){
        mealPlan = "Full Meal";
    } else if (secondDin.checked){
        mealPlan = "Second Day Dinner Only";
    } else if (noMeal.checked){
        mealPlan = "No Meal Plan";
    }
    
    var firstNameCC = document.getElementById('firstNameCC').value;
    var lastNameCC = document.getElementById('lastNameCC').value;
    var visa = document.getElementById('visa').value;
    var amEx = document.getElementById('amEx').value;
    var masterCard = document.getElementById('masterCard').value;
    var cardNum = document.getElementById('cardNum').value;
    var csv = document.getElementById('csv').value;
    var expY = document.getElementById('expY').value;
    var expM = document.getElementById('expM').value;
    var workShopsone;
    var workShopstwo;
    var workShopsthree;
    var jsB = document.getElementById('jsB');
    var Fjs = document.getElementById('Fjs');
    var jsE = document.getElementById('jsE');
    if(jsB.checked){
        workShopsone = "JavaScript for Beginners";
    } else if (Fjs.checked){
        workShopsone = "Fundamentals of JavaScript";
    } else if (jsE.checked){
        workShopsone = "JavaScript for Experts";
    }
    
    
    var htmlcssB = document.getElementById('htmlcssB');
    var htmlcssF = document.getElementById('htmlcssF');
    var htmlcssE = document.getElementById('htmlcssE');
    if(htmlcssB.checked){
        workShopstwo = "HTML/CSS for Beginners";
    } else if (htmlcssF.checked){
        workShopstwo = "Fundamentals of HTML/CSS";
    } else if (htmlcssE.checked){
        workShopstwo = "HTML/CSS for Experts";
    }
    
    
    var webB = document.getElementById('webB');
    var webI = document.getElementById('webI');
    var webM = document.getElementById('webM');
    if(webB.checked){
        workShopsthree = "Website Building for Beginners";
    } else if (webI.checked){
        workShopsthree = "Website Building Intermediate";
    } else if (webM.checked){
        workShopsthree = "Master My Website";
    }
    
    var array = [idNum, idName, firstName, lastName, address1, address2, city,
        state, zipCode, telNum, email, compWeb, compPos, compName, mealPlan,
        fullMeal, secondDin, noMeal, firstNameCC, lastNameCC, visa, amEx, masterCard,
        cardNum, csv, expY, expM, workShopsone, workShopstwo, workShopsthree, jsB, Fjs,
        jsE, htmlcssB, htmlcssF, htmlcssE, webB, webI, webM];
    
    localStorage.setItem("registration", array);
    console.log(localStorage.getItem("registration"));    
}

function populate(){
    localStorage.getItem("registration");
    var array = localStorage.getItem('registration').split(',');
 document.getElementById('idNum').innerHTML =  array[0];
 document.getElementById('title').innerHTML = array[1];
 document.getElementById('1stName').innerHTML = array[2];
 document.getElementById('lastName').innerHTML = array[3];
}

