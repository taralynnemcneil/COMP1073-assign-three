/* ===============================================
		  File Name: App
          Authour: Tara McNeil
          Site Name: Portfolio | Tara McNeil
          File Description: Javascript
================================================ */

(function () {

    "use strict";
    // Instantiate new xhr object
    
    var request = new XMLHttpRequest();
    request.open('GET', '../../app.json', true);
    request.addEventListener('readystatechange', function() {
        
        // wait for file to load
        if (request.readyState === 4 && request.status === 200) {
            var text = {};

            // read json object
            text = JSON.parse(request.responseText);

            // declare local paragraph array
            var paragraphArray = [];
            
            // read paragraphs array from the json object
            paragraphArray = text.paragraphs;
            
            // store length of the array into a variable
            var paragraphArrayLength = paragraphArray.length;
            
            // loop through the array
            for(var number=0; number < paragraphArrayLength; number++) {
                
                // create a reference to each html paragraph element 
                var paragraph = document.getElementById("paragraph" + (number+1) );
                
                // set the innerHTML of the paragraph to the string from the paragraphArray
                paragraph.innerHTML = paragraphArray[number];
            }

        }
    });
    request.send();

    
    /* ==============================================
        CONTACT
    ============================================== */
    var contactName;
    contactName = document.getElementById("contact-name");
    var contactMail;
    contactMail = document.getElementById("contact-mail");
    var contactMessage;
    contactMessage = document.getElementById("contact-message");
    var button = document.getElementById('submit');
    button.addEventListener("click", function (){
        console.log(contactName.value);
        console.log(contactMail.value);
        console.log(contactMessage.value);
    });
    
})();