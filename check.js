function check(bp, fbs) {
  let status = "Not found!!" //1
  if (//2
    bp <= 120 && 
    fbs < 100)
    {
    status = "General"
  }else if(//3
    bp >= 120 &&
    bp <= 139 && 
    fbs >= 100 &&
    fbs <= 125)
    {
    status = "Risk"
  }else if(//4
      bp > 139 && 
      bp < 160 &&
      fbs > 125 &&
      fbs < 155)
      {
      status = "High Risk Level 1"  
  }else if(//5
        bp >= 160 &&
        bp < 180 &&
        fbs >= 155 &&
        fbs < 183)
        {
        status = "High Risk Level 2"
  }else if(//6
      bp >=180 && 
      fbs >= 183)
      {
      status = "High Risk Level 3"   
  }
  return status;//7
  }
  module.exports = check;
  