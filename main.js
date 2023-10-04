 const user=[
	{
		f:"mike",
		l:"sheridan",
		age:30
	},

	{
		f:"tim",
		l:"lee",
		age:45
	},

	{
		f:"john",
		l:"carte",
		age:25
	}
 ]

 document.write(JSON.stringify(user)+"<br>")

 let a=user.map(function(e){
	console.log(e)
	if(true){
		var join=e.l
	}

	return join
 })

 document.write(`<br>output =[  ${a} ]`)

 console.log(a)