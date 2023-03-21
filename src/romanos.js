function numRomanos(num) {
  var numRom = "";

  while(num != 0)
  {

    if (num == 1)
    {
      numRom = numRom + "I";
      num -= 1;
    }
    else{
      if(num == 5)
      {
        numRom = numRom + "V";
        num -= 5;
      }else{
        if(num == 9)
        {
          numRom = numRom + "IX";
          num -= 9;
        }
        else{
          if (num == 10){
            numRom = numRom + "X";
            num -= 10;
          }
          else{
            if(num == 50 ){
              numRom = numRom + "L";
              num -= 50;
            }else{
              if(num == 90){
                numRom = numRom + "XC";
                num -= 90;
              }
              else{
                if(num == 100)
                {
                  numRom = numRom + "C";
                  num -= 100;
                }
              }
            }
          }
        }
      }
    } 
  }
  return numRom;
  }
  
  export default numRomanos;
  