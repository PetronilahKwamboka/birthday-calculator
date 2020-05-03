
function getAkanName() {
  var cc = document.getElementById("cc-input").value;
  var yy = document.getElementById("yy-input").value;
  var mm = document.getElementById("mm-input").value;
  var dd = document.getElementById("dd-input").value;


  var male = document.getElementById("male-input").value;
  var female = document.getElementById("female-input").value;

if (male.checked === true){
  return male.value;
} else if (female.checked === true) {
      return female.value;
} else {
  console.log("No gender selected");
}

 function mmValidator() {
   if (mm < 1 || mm > 12) {
     return false;
   } else {
     return true;
   }
 }

 function ddValidator() {
   if (mm === 2 && yy%4 === 0 ) {
     if (dd > 28 || dd < 1) {
       return false;
     }else if (mm === 2 && dd > 29) {
       return false;
     } else if (mm === 2 && dd < 1) {
       return false;
     } else {
       return true;
     }
   } else if (dd < 1  || dd > 31) {
     return false;
   } else {
     return true;
   }
 }

 var dayOfWeekNumber = Math.floor((((cc/4)-2*cc-1)+
          ((5*cc/4))+((26*(mm+1)/10))+dd)%7);

var maleNames = [
  "Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];

var femaleNames = [
  "Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"
];

if (male.value === "male" && mmValidator() && ddValidator()) {
  switch (dayOfWeekNumber) {
    case 1:
     document.getElementById("answer").textContent = "Sunday" + "" + maleNames[0]

      return false;
      break;

    case 2:
      document.getElementById("answer").textContent = "Monday" + " " +  maleNames[1]

      return false;
      break;

    case 3:
      document.getElementById("answer").textContent  = "Tuesday" + " " + maleNames[2]

      return false;
      break;


    case 4:
      document.getElementById("answer").textContent  =  "Wednesday" + " " + maleNames[3]

      return false;
      break;


    case 5:
      document.getElementById("answer").textContent = "Thursday" + " " + maleNames[4]

      return false;
      break;
    case 6:
      document.getElementById('answer').textContent = "Friday"  + " " +  male[5];

       return false;
       break;
    case 7:
       document.getElementById('answer').textContent = "Saturday" + " " +  male[6];

        return false;
        break;
    case 0:
       document.getElementById('answer').textContent = "Sunday" + " " +  male[0];

       return false;
       break;
    default:
      alert("invalid result");

  }
} else if (female.value === "female"  && mmValidator() && ddValidator()) {
  switch (dayOfWeekNumber) {
    case 1:
      document.getElementById("answer").textContent = "Sunday" + "" + femaleNames[0]

      return false;
      break;

      case 2:
        document.getElementById("answer").textContent = "Monday" + "" + femaleNames[1]

        return false;
        break;

      case 3:
        document.getElementById("answer").textContent = "Tuesday" + "" + femaleNames[2]

        return false;
        break;
      case 4:
         document.getElementById("answer").textContent = "Wednesday" + "" + femaleNames[3]

         return false;
         break;

       case 5:
          document.getElementById("answer").textContent = "Thursday" + "" + femaleNames[4]

            return false;
            break;

        case 6:
           document.getElementById("answer").textContent = "Friday" + "" + femaleNames[5]

           return false;
           break;

       case 7:
          document.getElementById("answer").textContent = "Saturday" + "" + femaleNames[6]

          return false;
          break;

       case 0:
          document.getElementById("answer").textContent = "Sunday" + "" + femaleNames[0]

          return false;
          break;
    default:
    alert("invalid result")
  }

  }else {
    alert(" You entered invalid month or day");

}

}
