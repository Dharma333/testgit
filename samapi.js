function msg(){  
 username=document.getElementById("username").value;
var request = new XMLHttpRequest()
request.open('GET', 'https://creator.zoho.com/api/v2/creatorteam/craft/report/All_Tasks/recordcount?authtoken=fddc4fb77d747e3b422f0c450565b644&Tester=Dharmaraj&Status=Completed', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
  	document.getElementById("testcase").innerHTML =data.records_count;
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
    document.getElementById("testcase").innerHTML =errorMessage;
  }
}

request.send()
 // document.getElementById("testcase").innerHTML =username ;
 // document.getElementById("progress").innerHTML =username ;
 // document.getElementById("Yettostart").innerHTML =username ;
 // document.getElementById("passed").innerHTML =username ;
 // document.getElementById("Complted").innerHTML =username ;

}  


