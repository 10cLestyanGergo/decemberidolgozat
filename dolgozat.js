function isTriangle(a,b,c)
{
   return a+b>c&&a+c>b&&b+c>a;
}
function timeConvert(num) {
  
    if(num<=0){
      return "00:00";
    }
    else{
      let orak=Math.floor(num/60);
      let percek=num-orak*60;
      if(orak>9){
        if(percek>9){
          return orak+":"+percek;
        }
        else{
          return orak+":"+"0"+percek;
        }
      }
      else{
        if(percek>9){
          return "0"+orak+":"+percek;
        }
        else{
          return "0"+orak+":"+"0"+percek;
        }
      }
      }
  }
  function maskify(str) {
    if (str.length <= 4) {
        return str;
    }
    return '#'.repeat(str.length - 4) + str.slice(-4);
}
function createArrayOfTiers(num) {
    let x='';
    return [...num+''].map((value)=>{
      return x+=value;
    })
  }