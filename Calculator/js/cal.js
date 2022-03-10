$(document).ready(function () {

    //retrieving last calculation
    // Check browser support
    if (typeof (Storage) !== "undefined") {
      // Retrieve
      $("#history-box").val(localStorage.getItem("history"));
    } else {
      $("#history-box").val("Sorry, last data cannot be retrieved...");
    }



    //functions to accept keyboard characters
    $(document).keydown(function (e) {
      if (e.which == 13) {
        /* enter press action */
        /*check if not function is pressed */
        if ($("#function-box").val() == "") {
          swal({
            title: 'Please select operation',
            animation: false,
            customClass: 'animated zoomInRight'
          });
        } else {
          /* assign to second box */
          $("#second-box").val($("#input-box").val());
          /* variables */
          var ans;
          var firstBox = $("#first-box").val();
          var secondBox = $("#second-box").val();
          /* calculation condition */
          if ($("#function-box").val() == "/") {
            ans = parseFloat($("#first-box").val()) / parseFloat($("#second-box").val());
          }
          if ($("#function-box").val() == "*") {
            ans = parseFloat($("#first-box").val()) * parseFloat($("#second-box").val());
          }
          if ($("#function-box").val() == "-") {
            ans = parseFloat($("#first-box").val()) - parseFloat($("#second-box").val());
          }
          if ($("#function-box").val() == "+") {
            ans = parseFloat($("#first-box").val()) + parseFloat($("#second-box").val());
          }

          /* adding first to history */
          $("#input-box").val(ans);
          $("#history-box").val($("#first-box").val() + "\t" + $("#function-box").val() + "\t" + $(
            "#second-box").val() + "\t=\t" + ans + '\n\n' + $("#history-box").val());
          localStorage.setItem("history", $("#history-box").val());
        }
      }
      /* one */
      if (e.which == 49) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("1")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "1");
        }
      }
      /* two */
      if (e.which == 50) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("2")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "2");
        }
      }
      /* three */
      if (e.which == 51) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("3")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "3");
        }
      }
      /* four */
      if (e.which == 52) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("4")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "4");
        }
      }
      /* five */
      if (e.which == 53) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("5")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "5");
        }
      }
      /* six */
      if (e.which == 54) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("6")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "6");
        }
      }
      /* seven */
      if (e.which == 55) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("7")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "7");
        }
      }
      /* eight */
      if (e.which == 56) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("8")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "8");
        }
      }
      /* nine */
      if (e.which == 57) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("9")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "9");
        }
      }
      /* dot */
      if (e.which == 190) {
        /* if the value is zero add dot*/
        if ($("#input-box").val() == "0" || $("#input-box").val() == "") {
          /* check if dot already exit */
          if ($("#input-box").val().indexOf(".") != -1) {
            swal({
              title: 'Cannot enter two dots',
              animation: false,
              customClass: 'animated zoomInRight'
            });
          } else {
            /* if there is no dot */
          }
          $("#input-box").val("0.")
        } /* if the value is zero append*/
        else {
          /* if there is dot */
          if ($("#input-box").val().indexOf(".") != -1) {
            swal({
              title: 'Cannot enter two dots',
              cancelButtonColor: '#d33',
              animation: false,
              customClass: 'animated bounceIn'
            });
          } else {
            /* if there is no dot */
            $("#input-box").val($("#input-box").val() + ".");
          }
        }
      }
      /* zero */
      if (e.which == 48) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0") {
          $("#input-box").val("0")
        } /* if the value is zero append*/
        else {
          $("#input-box").val($("#input-box").val() + "0");
        }
      }
      /* backspace */
      if (e.which == 46) {
        /* if the value is zero overright*/
        if ($("#input-box").val() == "0" || $("#input-box").val() == "" || $("#input-box").val().length ==
          1) {
          $("#input-box").val("0")
        } /* if the value is zero append*/
        else {
          $("#input-box").val(function (_, txt) {
            return txt.slice(0, -1);
          });
        }
      }
    });

    //activate keys
    $("#one").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("1")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "1");
      }
    });
    $("#two").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("2")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "2");
      }
    });
    $("#three").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("3")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "3");
      }
    });
    $("#four").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("4")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "4");
      }
    });
    $("#five").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("5")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "5");
      }
    });
    $("#six").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("6")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "6");
      }
    });
    $("#seven").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("7")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "7");
      }
    });
    $("#eight").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("8")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "8");
      }
    });
    $("#nine").click(function () {
      /* if the value is zero overright*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("9")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "9");
      }
    });
    $("#dot").click(function () {
      /* if the value is zero add dot*/
      if ($("#input-box").val() == "0" || $("#input-box").val() == "") {
        /* check if dot already exit */
        if ($("#input-box").val().indexOf(".") != -1) {
          swal({
            title: 'Cannot enter two dots',
            animation: false,
            customClass: 'animated zoomInRight'
          });
        } else {
          /* if there is no dot */
        }
        $("#input-box").val("0.")
      } /* if the value is zero append*/
      else {
        /* if there is dot */
        if ($("#input-box").val().indexOf(".") != -1) {
          swal({
            title: 'Cannot enter two dots',
            cancelButtonColor: '#d33',
            animation: false,
            customClass: 'animated bounceIn'
          });
        } else {
          /* if there is no dot */
          $("#input-box").val($("#input-box").val() + ".");
        }
      }
    });
    $("#zero").click(function () {
      /* if the value is zero do not add*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("0")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "0");
      }
    });
    $("#doublezero").click(function () {
      /* if the value is zero do not add*/
      if ($("#input-box").val() == "0") {
        $("#input-box").val("0")
      } /* if the value is zero append*/
      else {
        $("#input-box").val($("#input-box").val() + "00");
      }
    });
    $("#backspace").click(function () {
      /* if the value is do not delete it*/
      if ($("#input-box").val() == "0" || $("#input-box").val() == "" || $("#input-box").val().length == 1) {
        $("#input-box").val("0")
      } /* if the value is zero append*/
      else {
        $("#input-box").val(function (_, txt) {
          return txt.slice(0, -1);
        });
      }
    });

    $("#clear").click(function () {
      /* clear all the input-box data */
      $("#input-box").val("0");
    });
    $("#clearall").click(function () {
      /* clear all the input-box data and history data */
      $("#input-box").val("0");
      $("#history-box").val("");
    });

    //function keys
    $("#div").click(function () {
      /*asign the first number to the input first*/
      $("#first-box").val($("#input-box").val()); /* asign function box */
      $("#function-box").val("/"); /* clear input box for second number */
      $("#input-box").val("0");
    });
    $("#mul").click(function () {
      /*asign the first number to the input first*/
      $("#first-box").val($("#input-box").val()); /* asign function box */
      $("#function-box").val("*"); /* clear input box for second number */
      $("#input-box").val("0");
    });
    $("#sub").click(function () {
      /*asign the first number to the input first*/
      $("#first-box").val($("#input-box").val()); /* asign function box */
      $("#function-box").val("-"); /* clear input box for second number */
      $("#input-box").val("0");
    });
    $("#add").click(function () {
      /*asign the first number to the input first*/
      $("#first-box").val($("#input-box").val()); /* asign function box */
      $("#function-box").val("+"); /* clear input box for second number */
      $("#input-box").val("0");
    });

    //equal operation
    $("#equal").click(function () {
      /*check if not function is pressed */
      if ($("#function-box").val() == "") {
        swal({
          title: 'Please select operation',
          animation: false,
          customClass: 'animated zoomInRight'
        });
      } else {
        /* assign to second box */
        $("#second-box").val($("#input-box").val());
        /* variables */
        var ans;
        var firstBox = $("#first-box").val();
        var secondBox = $("#second-box").val();
        /* calculation condition */
        if ($("#function-box").val() == "/") {
          ans = parseFloat($("#first-box").val()) / parseFloat($("#second-box").val());
        }
        if ($("#function-box").val() == "*") {
          ans = parseFloat($("#first-box").val()) * parseFloat($("#second-box").val());
        }
        if ($("#function-box").val() == "-") {
          ans = parseFloat($("#first-box").val()) - parseFloat($("#second-box").val());
        }
        if ($("#function-box").val() == "+") {
          ans = parseFloat($("#first-box").val()) + parseFloat($("#second-box").val());
        }

        /* adding first to history */
        $("#input-box").val(ans);
        $("#history-box").val($("#first-box").val() + "\t" + $("#function-box").val() + "\t" + $(
          "#second-box").val() + "\t=\t" + ans + '\n\n' + $("#history-box").val());
        localStorage.setItem("history", $("#history-box").val());
      }
    });



  });