// select birth month and day

// click a button
// event listener
document.getElementsByTagName('button')[0].onclick= horoscope
  function horoscope(){

    // generate value of month
    var month = document.getElementsByTagName('select')[0].value

    // geenrate valye of day
    // Determine Horoscope
    // conditional for each sign
    var day = document.getElementsByTagName('select')[1].value

    console.log(month,day)

    if ((month == 1 && day <= 19) || (month== 12 && day >=22)){
      document.getElementsByTagName("h5")[0].innerHTML = "Capricorn- goats are not good pets";
    }
    else if ((month == 1 && day >=20) || (month== 2 && day <=18)){
      document.getElementsByTagName("h5")[0].innerHTML = "Aquarius- pool parties are in your near future";
    }
    else if ((month == 2 && day >=19) || (month== 3 && day <=20)){
      document.getElementsByTagName("h5")[0].innerHTML = "Pisces- Just keep swimming just keep swimming";
    }
    else if ((month == 3 && day >=21) || (month== 4 && day <=19)){
      document.getElementsByTagName("h5")[0].innerHTML = "Aries- you will find a career in coding";
    }
    else if ((month == 4 && day >=20) || (month== 5 && day <=20)){
      document.getElementsByTagName("h5")[0].innerHTML = "Taurus- dont go to Spain, they kill bulls for sport";
    }
    else if ((month == 5 && day >=21) || (month== 6 && day <=20)){
      document.getElementsByTagName("h5")[0].innerHTML = "Gemini- you are a multiverse, explore all verrsions of self";
    }
    else if ((month == 6 && day >=21) || (month== 7 && day <=22)){
      document.getElementsByTagName("h5")[0].innerHTML = "Cancer- be kind to others";
    }
    else if ((month == 7 && day >=23) || (month== 8 && day <=22)){
      document.getElementsByTagName("h5")[0].innerHTML = "Leo- You got heart kiddo";
    }
    else if ((month == 8 && day >=23) || (month== 9 && day <=22)){
      document.getElementsByTagName("h5")[0].innerHTML = "Virgo- a coding Bootcamp graduation is in your near future";
    }
    else if ((month == 9 && day >=23) || (month== 10 && day <=22)){
      document.getElementsByTagName("h5")[0].innerHTML = "Libra- you cool sometimes but chill out and go with le flow";
    }
    else if ((month == 10 && day >=23) || (month== 11 && day <=21)){
      document.getElementsByTagName("h5")[0].innerHTML = "Scorpio- yall are allllll wild, yall need to announce your presence around virgo's";
    }
    else if ((month == 11 && day >=22) || (month== 12 && day <=21)){
      document.getElementsByTagName("h5")[0].innerHTML = "Sagittarius- you have good luck";
    }
    else{

      console.log("bad logic")
    }
}




    // display horoscope


  // // event listener for roll
  // document.getElementByTagName('button')[0].onclick= randomRoll
  // // randomize a result from 1-x
  // function randomRoll(){
  // 	// value out of inpput
  //  var sideNumber = document.getElementsByTagName("input")[0].value
  //  // value is getting an output out of input
  // 	// get result of die roll
  // 	var results = Math.ceil(Math.random()*sideNumbers)
  // 	// display result
  // 	document.getElementByTagName("h1")[0].innerHTML = results
  // }
