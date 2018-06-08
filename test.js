function AboutMe(){
	 document.getElementById('Field').innerHTML= "<font color=yellow><h3>Something about me</h3></font><font size=5vh><br>I`m gradute of Automatics and Robotics in Warsaw University of Technology.<br> However with time I noticed that I want to work in IT and started to slowly change my direction of study.<br> Now I`m trying to learn some Front-end with HTML and CSS. I also started to check C#, especially asp.net web application.";
	 document.getElementById('Field').style.overflowY="scroll";
}

function Experience(){
	 document.getElementById('Field').innerHTML= "<font color=yellow><h3>Something about work</h3></font><font size=5vh><br>I was working as IT support specialist for over a year. Company was offering big web application with POS, UI, Mobile, Managment application modules . My job was to fully understand the application from user perspective and be able to explain all of it`s features to client. I was also configurating peripheral devices and working a lot with database.";
	 document.getElementById('Field').style.overflowY="scroll";
}

function Contact(){
	 document.getElementById('Field').innerHTML= '<font color=yellow><h3>Contact me on:</h3></font><font size=5vh><br>You can contact me on my e-mail adress:<br> <a href="mailto:zajaczkowski-adam@wp.pl" target="_top" style="color: inherit; ">zajaczkowski-adam@wp.pl</a><br> or just get in touch with phone:<br> +48 502-879-863';
	 document.getElementById('Field').style.overflowY="scroll";
}	

function Work(){
	 document.getElementById('Field').innerHTML= "<font color=yellow><h3>I was working:</h3></font><font size=5vh><br>I`m looking for a job in my area of interests. As right now my skills may be insufficient, the best way would be to find a training job offer. Contact me if you are interested in my candidacy. ";
	 document.getElementById('Field').style.overflowY="scroll";
}		

function PriviousSite(){
	var x = document.referrer;
	document.location.replace("../Main.html");
}