// To display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// To validate form
function validateForm() {
  // Retrive the values of form elements
  var clientFirstName = document.formClientInfo.clientFirstName.value;
  var clientLastName = document.formClientInfo.clientLastName.value;
  var clientGender = document.formClientInfo.clientGender.value;
  var clientMobile = document.formClientInfo.clientMobile.value;
  var clientEmail = document.formClientInfo.clientEmail.value;
  var clientJobTitle = document.formClientInfo.clientJobTitle.value;
  var clientAddressLine1 = document.formClientInfo.clientAddressLine1.value;
  var clientAddressLine2 = document.formClientInfo.clientAddressLine2.value;
  var clientCity = document.formClientInfo.clientCity.value;
  var clientState = document.formClientInfo.clientState.value;
  var clientZipCode = document.formClientInfo.clientZipCode.value;
  var clientMeetingScheduleTime = document.formClientInfo.clientMeetingScheduleTime.value;

  // Define error variables with a defualt value
  var firstNameErr = lastNameErr = genderErr = mobileErr = emailErr = jobTitleErr = addressLine1Err = addressLine2Err = cityErr = stateErr = zipCodeErr = clientMeetingScheduleTimeErr = true;

  // Validate first name
  if( clientFirstName == "" ) {
    printError( "firstNameErr", "Please enter your first name." );
  } else {
    // Regular expression for basic name validation
    var regex = /^[a-zA-Z\s]+$/;  
    if( regex.test( clientFirstName ) === false ) {
      printError( "firstNameErr", "Please enter a valid first name." );
    } else {
      printError( "firstNameErr", "" );
      firstNameErr = false;
    }
  }

  // Validate last name
  if( clientLastName == "" ) {
    printError( "lastNameErr", "Please enter your last name." );
  } else {
    // Regular expression for basic name validation
    var regex = /^[a-zA-Z\s]+$/;                
    if( regex.test( clientLastName ) === false ) {
      printError( "lastNameErr", "Please enter a valid last name." );
    } else {
      printError( "lastNameErr", "" );
      lastNameErr = false;
    }
  }

  // Validate gender selection
  if( clientGender == "Select" ) {
    printError( "genderErr", "Please select your gender." );
  } else {
      printError( "genderErr", "" );
      genderErr = false;
  }
  
  // Validate mobile number
  if( clientMobile == "" ) {
    printError( "mobileErr", "Please enter your mobile number." );
  } else {
    // Regular expression for basic phone number validation
    var regex = /^[1-9]\d{9}$/;                
    if( regex.test( clientMobile ) === false ) {
      printError( "mobileErr", "Please enter a valid 10-digit number." );
    } else {
      printError( "mobileErr", "" );
      mobileErr = false;
    }
  }

  // Validate email
  if( clientEmail == "" ) {
    printError( "emailErr", "Please enter your email." );
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;                
    if( regex.test( clientEmail ) === false ) {
      printError( "emailErr", "Please enter a valid email address." );
    } else {
      printError( "emailErr", "" );
      emailErr = false;
    }
  }

  // Validate job title name
  if( clientJobTitle == "" ) {
    printError( "jobTitleErr", "Please enter your job title." );
  } else {
    // Regular expression for basic name validation
    var regex = /^[a-zA-Z\s]+$/;                
    if( regex.test( clientJobTitle ) === false ) {
      printError( "jobTitleErr", "Please enter a valid job title name." );
    } else {
      printError( "jobTitleErr", "" );
      jobTitleErr = false;
    }
  }
  
  // Validate adress line 1
  if( clientAddressLine1 == "" ) {
    printError( "addressLine1Err", "Please enter your address." );
  } else {
    // Regular expression for basic address validation
    var regex = /^([a-zA-z0-9/\\''(),\#\-\s]{2,255})$/;                
    if( regex.test( clientAddressLine1 ) === false ) {
      printError( "addressLine1Err", "Please enter a valid address." );
    } else {
      printError( "addressLine1Err", "" );
      addressLine1Err = false;
    }
  }

  // Validate adress line 2
  if( clientAddressLine2 !== "" ) {
    // Regular expression for basic address validation
    var regex = /^([a-zA-z0-9/\\''(),\#\-\s]{2,255})$/;                
    if( regex.test( clientAddressLine2 ) === false ) {
      printError( "addressLine2Err", "Please enter a valid address." );
    } else {
      printError( "addressLine2Err", "" );
      addressLine2Err = false;
    }
  }

  // Validate city name
  if( clientCity == "" ) {
    printError( "cityErr", "Please enter your city name." );
  } else {
    // Regular expression for basic city name validation
    var regex = /^[a-zA-Z\s]+$/;                
    if( regex.test( clientCity ) === false ) {
      printError( "cityErr", "Please enter a valid city name." );
    } else {
      printError( "cityErr", "" );
      cityErr = false;
    }
  }

  // Validate state name
  if( clientState == "" ) {
    printError( "stateErr", "Please enter your state name." );
  } else {
    // Regular expression for basic state name validation
    var regex = /^[a-zA-Z\s]+$/;                
    if( regex.test( clientState ) === false ) {
      printError( "stateErr", "Please enter a valid state name." );
    } else {
      printError( "stateErr", "" );
      stateErr = false;
    }
  }

  // Validate zip code
  if( clientZipCode == "" ) {
    printError( "zipCodeErr", "Please enter your zip code." );
  } else {
    // Regular expression for basic number validation
    var regex = /^[1-9]\d{4}$/;                
    if( regex.test( clientZipCode ) === false ) {
      printError( "zipCodeErr", "Please enter a valid 5-digit zip code." );
    } else {
      printError( "zipCodeErr", "" );
      zipCodeErr = false;
    }
  }

  // Validate meeting time selection
  if( clientMeetingScheduleTime == "Select" ) {
    printError( "clientMeetingScheduleTimeErr", "Please select your meeting time." );
  } else {
      printError( "clientMeetingScheduleTimeErr", "" );
      clientMeetingScheduleTimeErr = false;
  }


  if((firstNameErr || lastNameErr || genderErr || mobileErr || emailErr || jobTitleErr || addressLine1Err || addressLine2Err || cityErr || stateErr || zipCodeErr || clientMeetingScheduleTimeErr) == true) {
    return false;
  } else {
    // Create a string from input data for preview
    var dataPreview = "This is what you have entered: \n" +
                      "First Name: " + clientFirstName + "\n" +
                      "Last Name: " + clientLastName + "\n" + 
                      "Gender: " + clientGender + "\n" + 
                      "Mobile Number: " + clientMobile + "\n" +
                      "Email: " + clientEmail + "\n" +
                      "Job Title: " + clientJobTitle + "\n" +
                      "Address Line 1: " + clientAddressLine1 + "\n" +
                      "Address Line 2: " + clientAddressLine2 + "\n" +
                      "City: " + clientCity + "\n" +
                      "State: " + clientState + "\n" +
                      "Zip Code: " + clientZipCode + "\n" +
                      "Meeting Time: " + clientMeetingScheduleTime;
    alert(dataPreview);
  }
}
