
    // Defining function to update connection status
    function updateConnectionStatus() {  
        var status = document.getElementById("status");
        if(navigator.onLine) {

           console.log('back again online');

        } else {
            status.style.display = 'flex';
            status.innerHTML = "Offline";
            status.style.color = 'red';
            status.style.border = '2px solid red';
            
            setTimeout(()=>{
                status.style.display = 'none';
              },2000);
  
        }
    }

    // Attaching event handler for the load event
    window.addEventListener("load", updateConnectionStatus);
    
  
  // update on online
  window.addEventListener("online", function(e) {
    updateConnectionStatus();
});

// update on offline
window.addEventListener("offline", function(e) {        
    updateConnectionStatus();
});


