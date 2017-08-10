


  let number = Math.floor(Math.random() * 10) + 1;
  console.log(number);
  if (number === 1) {
    window.alert("You're doing great!");
  }
  else if (number === 2) {
    window.alert("Keep up the good work!")
  }
  else if (number === 3) {
    window.alert("You got this!")
  }
  else if (number === 4) {
    window.alert("Woah")
  }
  else if (number === 5) {
    window.alert("Each refresh brings you closer to your solution.")
  }
  else if (number === 6) {
    window.alert("Oh God, does it work yet??!")
  }
  else if (number === 7) {
    window.alert("You're really pretty.")
  }
  else if (number === 8) {
    window.alert("Hope you are having a great day!")
  }
  else if (number === 9) {
    window.alert("Creativity and Design is unlimited")
  }
  else if (number === 10) {
    window.alert("Getting closer!")
  }

// window.onload = function(){
//
//   var current,
//     output,
//     screen,
//     limit,
//     zero,
//     period,
//     operator;
//
//     screen = document.getElementById("result");
//
//     var element = document.querySelector(".num");
//
//     var numLength = element.length;
//
//       for (var i = 0; i < numLength; i++) {
//         element[i].addEventListener("click", function(){
//           num = this.value;
//
//           output = screen.innerHTML +=num;
//
//             limit = output.length;
//             if(limit > 16 ) {
//
//                    alert("Sorry no more input is allowed");
//
//                  }
//
//                },false);
//
//               }
//             };

window.onload = function() {

var current,
    screen,
    output,
    limit,
    zero,
    period,
    operator;

    screen = document.getElementById("result");

var elem = document.querySelectorAll(".num");

      var len = elem.length;

      for(var i = 0; i < len; i++ ) {

        elem[i].addEventListener("click",function() {

            num = this.value;

            output = screen.innerHTML +=num;

            limit = output.length;
          console.log(output);

         if(limit > 16 ) {

         alert("Sorry no more input is allowed");

       }

     },false);

    }

      //find the difference between these two
    let idClear = document.getElementById("clear");
    let clear = document.querySelector("#clear");

    clear.addEventListener("click", function(){
      screen.innerHTML= "";
    })

    period = document.querySelector("#period");

    period.addEventListener("click", function(){
        period = this.value;
        output = screen.innerHTML +=period;

    })

    operator = document.querySelectorAll(".operator");
      opLength = operator.length;

    for (var i = 0; i < opLength; i++) {
      operator[i].addEventListener("click", function(){
        operatorD = this.value;
        output = screen.innerHTML +=operatorD;
    })

    }

    total = document.getElementById("equals").addEventListener("click", function(){
      screen.innerHTML = eval(output);
    })


  };
