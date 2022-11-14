function validFormFieldInput()
  {
    
    //validate departure and arrive place
    if (document.getElementById('from').value == document.getElementById('to').value) 
      {
          alert("Please enter correct Departure and Arrive place.");
          document.getElementById('from').style.backgroundColor = '#FFFFFF';
          document.getElementById('to').style.backgroundColor = '#FFFFFF';
          document.getElementById('from').focus;
          return false;
      } else 
        { 
          document.getElementById('from').style.backgroundColor = '#90EE90';
          document.getElementById('to').style.backgroundColor = '#90EE90';
        }
    
    //validate departure and arrive date 
    var curdate = new Date();
    var curdateStr = curdate.toISOString().substring(0,10);
   
    if(document.getElementById('round').checked) 
      {
        if (document.getElementById('return') == "dd/mm/yyyy" || document.getElementById('return') == "") 
          {
            alert("Please select correct return date.");
            document.getElementById('return').style.backgroundColor = '#FFFFFF';
            document.getElementById('return').focus;
            return false;
          }
        
        if (document.getElementById('departure').value >= document.getElementById('return').value)
          {
            alert("Please select correct Departure and Arrive date.");
            document.getElementById('departure').style.backgroundColor = '#FFFFFF';
            document.getElementById('return').style.backgroundColor = '#FFFFFF';
            document.getElementById('departure').focus;
            return false;
          }

          document.getElementById('departure').style.backgroundColor = '#90EE90';
          document.getElementById('return').style.backgroundColor = '#90EE90';
      } else
          {
            if (document.getElementById('departure').value < curdateStr) 
              {
                alert("Please select correct Departure date.");
                document.getElementById('departure').style.backgroundColor = '#FFFFFF';
                return false;
               } else 
                  {
                    document.getElementById('departure').style.backgroundColor = '#90EE90';
                  }
          }

    
    //validate name1
    var vname1 = document.getElementById('name1').value;
    if (!vname1.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) && vname1.length<=5){
      alert("Please enter correct full Name for Passenger 1.");
      document.getElementById('name1').style.backgroundColor = '#FFFFFF';
      document.getElementById('name1').focus;
      return false;
    } else {
      document.getElementById('name1').style.backgroundColor = '#90EE90';
    }
        
    
    //validate dob1   
    var vdob1 = document.getElementById('dob1').value;
   
    if (vdob1>curdateStr) {
      alert( "Please enter the correct DOB for Passenger 1.");
      document.getElementById('dob1').style.backgroundColor = '#FFFFFF';
      return false;
    } else {
        document.getElementById('dob1').style.backgroundColor = '#90EE90';
    }
    
    document.getElementById('doc1').style.backgroundColor = '#90EE90';

    //validate name2 and dob2
    var vname2 = document.getElementById('name2').value;
    if (vname2 !== "") 
      {
        if (!vname2.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) && vname2.length<=5)
          {
            alert("Please enter correct full Name for Passenger 2.");
            document.getElementById('name2').style.backgroundColor = '#FFFFFF';
            document.getElementById('name2').focus;
            return false;
          } else
              {
                document.getElementById('name2').style.backgroundColor = '#90EE90';
              }
             
        var vdob2 = document.getElementById('dob2').value;
        if (vdob2 > curdateStr) 
          {
            alert( "Please enter the correct DOB for Passenger 2.");
            document.getElementById('dob2').style.backgroundColor = '#FFFFFF';
            return false;
          } else
             {
                document.getElementById('dob2').style.backgroundColor = '#90EE90';
             }
        }
    
    //validate name3 and dob3
    var vname3 = document.getElementById('name3').value;
    if (vname3 !== "") 
      {
        if (!vname3.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) && vname2.length<=5)
          {
            alert("Please enter correct full Name for Passenger 3.");
            document.getElementById('name3').style.backgroundColor = '#FFFFFF';
            document.getElementById('name3').focus;
            return false;
          } else
              {
                document.getElementById('name3').style.backgroundColor = '#90EE90';
              }
             
        var vdob3 = document.getElementById('dob3').value;
        if (vdob3 > curdateStr) 
          {
            alert( "Please enter the correct DOB for Passenger 3.");
            document.getElementById('dob3').style.backgroundColor = '#FFFFFF';
            return false;
          } else
             {
                document.getElementById('dob3').style.backgroundColor = '#90EE90';
             }
        }
    
    //validate payment name
    var vfname = document.getElementById('fname').value;
    if (!vfname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      alert("Please enter correct full Name for Payment.");
      document.getElementById('fname').style.backgroundColor = '#FFFFFF';
      document.getElementById('fname').focus;
      return false;
    } else {
      document.getElementById('fname').style.backgroundColor = '#90EE90';
    }

    //validate email
    let mymail=document.getElementById('femail').value;
    let attherate=mymail.indexOf("@");
    let atthedot=mymail.lastIndexOf(".");

    if (attherate<1 || atthedot<attherate+2 || atthedot>=mymail.length)
      {
          alert( "Please enter the correct email.");
          document.getElementById('femail').style.backgroundColor = '#FFFFFF';
          return false;
      } else 
        {
          document.getElementById('femail').style.backgroundColor = '#90EE90';
        }
    
    //validate mobile
    let mobile1 = document.getElementById('fmobile').value;

    if (mobile1.length !== 10)
       {
         document.getElementById('fmobile').style.backgroundColor = '#FFFFFF';
         alert( "Please enter the correct 10 digits mobile number.");
         return false;
       } else 
         {
          document.getElementById('fmobile').style.backgroundColor = '#90EE90';
         }

    //validate mobile
    let vcardno = document.getElementById('cardno').value;

    if (vcardno.length !== 16)
       {
         document.getElementById('cardno').style.backgroundColor = '#FFFFFF';
         alert( "Please enter the correct 16 digits credit card number.");
         return false;
       } else 
         {
          document.getElementById('cardno').style.backgroundColor = '#90EE90';
         }
    
    // comfirmation infor prepared
    
    /*
    var displayTxt = "";
    var passengerName = document.getElementById("name1").value; 
   
    if (document.getElementById("name2").value !== "") {
      passengerName = document.getElementById("name1").value + "&nbsp and &nbsp" + document.getElementById("name2").value;
      if(document.getElementById("name3").value !== "") {
        passengerName = passengerName + "&nbsp and &nbsp" + document.getElementById("name3").value;
      } 
    } else {
      if (document.getElementById("name3").value !== "") {
        passengerName = passengerName + "&nbsp and &nbsp" + document.getElementById("name3").value;
      }
    }

    if(document.getElementById('oneway').checked) {
      
        displayTxt = "Passenger:&nbsp" + passengerName + "&nbsp &nbsp Departure date:" + document.getElementById("deparure").value
        + "&nbsp &nbsp From:" + document.getElementById("from").value + "&nbsp &nbsp To:" + document.getElementById("to").value;

        // document.getElementById('disp').innerHTML = displayTxt; 

    } else if(document.getElementById('round').checked) {
        displayTxt = "Passenger:&nbsp" + passengerName
        + "&nbsp &nbsp From:" + document.getElementById("from").value 
        + "&nbsp &nbsp To:" + document.getElementById("to").value
        + "&nbsp &nbsp Departure date:" + document.getElementById("deparure").value
        + "&nbsp &nbsp Return date:" + document.getElementById("return").value;

        // document.getElementById('disp').innerHTML = displayTxt;
    } else {
      document.getElementById("error").innerHTML = "You have not selected any trip."; 
    }

    alert(displayTxt);

    localStorage.setItem("confirmationMsg", displayTxt);

    */

 }    


  function checkButton()
  {
    if(document.getElementById('round').checked) {
        document.getElementById("full_form").style.display = "block";
        document.getElementById("return_form").style.display = "block";
    } else {
        document.getElementById("full_form").style.display = "block";
        document.getElementById("return_form").style.display = "none";
    }
  }