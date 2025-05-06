function select()
{
	event.preventDefault();
	let name=document.getElementById("name");
	let m=document.getElementById("Maharashtrian");
	let s=document.getElementById("South Indian");
	let c=document.getElementById("Chinese");
	let msg=document.getElementById("msg");

	
	if(name.value==="")
	{
		alert("please enter your name");
		msg.innerHTML="";
		name.focus();
		return;
	}
	if(name.value.trim()==="")
	{
		alert("name cannot be blankspace");
		msg.innerHTML="";
		name.value="";
		name.focus();
		return;
	}
	if(!name.value.match(/^[A-Za-z ]+$/))
	{
		alert("Name should only contain alphabets");
		msg.innerHTML="";
		name.value="";
		name.focus();
		return;
	}
	let choice="";
	if(m.checked)
		choice=" Maharashtrian ";
	if(s.checked)
		choice=" South Indian ";
	if(c.checked)
		choice=" Chinese ";
	msg.innerHTML = `Hello ${name.value}, your favorite food is ${choice}!`;
		
}