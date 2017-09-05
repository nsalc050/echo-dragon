function binarynumber(){
   var a = document.getElementById("target").value;
   var strhold ='';
  while(a!=1) {
      var hold = a % 2;
      if (hold == 0 )
      {
        strhold += hold;
      }
      if(hold == 1)
      {
        strhold += hold;
      }
    a = a /2 ;
      }
     document.getElementById("destination").innerHTML = strhold;
 }
