
var q1 = {'name': 'lokesh', 'age': 5};
var q2 = {'age': 5, 'name': 'lokesh'};
const isEqual = (q1, q2) => {
    var flag = true;
if(Object.keys(q1).length === Object.keys(q2).length)
{
for(key in q1) 
{
if(q1[key] == q2[key]) 
{
  continue;
  }
  else 
  {
  flag = false;
   }
  }
}
else 
{
flag = false;
 }
  console.log(flag);
}
isEqual(q1, q2);