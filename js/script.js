function decKg()
{
   var currentQuantity = parseInt(document.getElementById("qnt-apple").innerHTML);
   if(currentQuantity>1)
   {
     currentQuantity--;
     document.getElementById('qnt-apple').innerHTML = currentQuantity;
   }

}

function incKg(fruitName)
{
  if(fruitName=="apple")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-apple').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-apple').innerHTML = currentQuantity;
  }
  else if(fruitName=="banana")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-banana').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-banana').innerHTML = currentQuantity;
  }
  else if(fruitName=="grapes")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-grapes').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-grapes').innerHTML = currentQuantity;
  }
  else
  {
    var currentQuantity = parseInt(document.getElementById('qnt-orange').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-orange').innerHTML = currentQuantity;
  }
 
}