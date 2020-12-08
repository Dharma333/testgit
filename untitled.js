function msg(){  
 // alert("Hello Javatpoint");  
 // document.getElementById("demo").innerHTML = "My First JavaScript";
 username=document.getElementById("username").value;
 document.getElementById("usernamevalue").innerHTML =username ;
 var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);

  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(y);
  document.getElementById("myTable").appendChild(y);
  document.getElementById("myTable").appendChild(y);

  var z = document.createElement("TD");
  var t = document.createTextNode(username);
  z.appendChild(t);
  z.appendChild(t);
  z.appendChild(t);
  document.getElementById("myTr").appendChild(z);

}  


