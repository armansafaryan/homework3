const name1 = function (number1,number2,number3) {
	return number1*number2-number3+number1;
};
    const name01 = name1(2,4,3);
    console.log(name01);


const name2 = function ()   {
	return 'yay'
};


const name3 = function (x,y) {
		console.log(x)
};


const name4 = function (value1,value2,value3) {
	if(value1.length >= value2.length && value1.length >= value3.length) {
		console.log(value1)};
	else if(value2.length >= value1.length && value2.length >= value3.length)  {
		console.log(value2)};
	else if(value3.length >= value1.length && value3.length >= value2.length)	{
		console.log(value3)
	};
};


const name5 = function(num1,num2) {
	if(num1 = num2) {return 0}
	else if (num1>num2) {return 1}
	else if (num1<num2) {return -1}
}
 

 const name6 = function(num1,num2) {
 	return  num1*num2
 };
 console.log(name6(7,8))


const name7 = function(num1,num2) {
	return num1/num2
};
    console.log(name7(8,2))


const triangleArea = function(base, height) {
      return base*height/2
};
    console.log(triangleArea(8,2))


const numlength = function(num1) {
	return lenght(num1)
};
    const name09 = numlength(111)
    console.log(name09)


 const h = function(string1,string2,number){
 	let h=string1=string2
   if (h.length>number)
  {return 1 };
  else
  {return -1}
}