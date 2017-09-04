function binarynumber(){
   var a = document.getElementById("target").value;
  while(a!=1) {
      var hold = a % 2;
      if (hold == 0 )
      {
        document.write(hold);
      }
      if(hold == 1)
      {
      document.write(hold);
      }
    a = a /2 ;
      }
 }
