function addZero(x){
    if(x < 10){
        x = '0' + x;
    }
    return x;
}
    
setInterval(function(){
  
    let dateInstance = new Date();
    // getHours: Bring us the hour | geMinutes Bring us the minutes | getSeconds Bring us the seconds
    let hour = dateInstance.getHours();
    let minute = dateInstance.getMinutes();
    let secs = dateInstance.getSeconds();
    // hour, minute and secs shoud display at least 2 digits (Addzero Function)
    hour = addZero(hour);
    minute = addZero(minute);
    secs = addZero(secs);

    // Getting current date | Month | Year
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let day = days[ dateInstance.getDay() ];
    let today = dateInstance.getDate();
    let month = months[ dateInstance.getMonth() ];
    let fullYear = dateInstance.getFullYear();

    // Method 1:
    // document.getElementById("show-date").innerHTML = 
    //                                             "<h1>" + day + ", the " + today + "<sup>th</sup> of " +  month 
    //                                             + ", " + fullYear + "</h1>";
  
    // Method 2:
    // document.getElementById("show-date").innerHTML = `<h1> ${day}, the ${today}<sup>th</sup> of ${month}, ${fullYear} </h1>`;
    
    // Method 3:
    let displayDate = `<h1> ${day}, the ${today}<sup>th</sup> of ${month}, ${fullYear} </h1>`;
    document.getElementById("show-date").innerHTML = displayDate;
      
    // We use textContent to insert the hour, minute and secs in our HTML document
    document.getElementById('my-time').textContent = `${hour}:${minute}:${secs}`;
},1000);
