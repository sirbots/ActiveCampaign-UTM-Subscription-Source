
/*********
 * Description: Creates a cookie with a visitor's initial landing page, then inserts the initial LP into a custom field for ActiveCampaign users.
 * Use: Distributed under the MIT License.
 * Creator: sirbots (https://github.com/sirbots)
 *********/

document.addEventListener('DOMContentLoaded', lpCookie);

// Uncomment this to use with a SquareSpace site:
// window.addEventListener('mercury:load', lpCookie); 

// run the script on page load
function lpCookie(){
  var cookieNames = document.cookie.split(';');
  var formFieldExists = !!document.querySelectorAll('input[data-name="initial_landing_page"]')[0]

  // Set the initialLP cookie with the current URL
  function setLandingPageCookie(currentUrl) {
    document.cookie = "initialLP=" + currentUrl + ";SameSite=Strict;Secure;Max-Age=2600000;path=/;" // You may have to remove 'Secure' if you're developing on an unsecured local server
  }

  // Retrieve the original LP from the initalLP cookie
  function getLandingPageCookie() {
    for (i=0 ; i < cookieNames.length ; i++) {
      if ( cookieNames[i].substring(0,10) == ' initialLP' || cookieNames[i].substring(0,9) == 'initialLP') {
          return cookieNames[i].split('initialLP=')[1];
      }
    }  
  }

  // If the LP cookie hasn't been set already...
  if (!getLandingPageCookie()) {
    // Bake the cookie
    setLandingPageCookie(document.URL);

    // And if the form field exists, fill it with the document.URL
    if (formFieldExists) { 
      document.querySelectorAll('input[data-name="initial_landing_page"]')[0].setAttribute("value", document.URL);
    }
      
  } else {
    // If the form field exists, fill it from the cookie
    if (formFieldExists) { 
      document.querySelectorAll('input[data-name="initial_landing_page"]')[0].setAttribute("value", getLandingPageCookie());
    }
  }

}


