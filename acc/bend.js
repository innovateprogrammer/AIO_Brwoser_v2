var pass1="****"
var c=0;
var i=0;
/*
if(c==0)
{
	password=prompt("Enter password");
if(password==pass1)
{
	alert("Correct Password...click Ok");
	c+=1;

}
else
{
	window.location="http/:msn.com";
}

}*/

var s1="";
	
		function ex1()
		{
			s1=document.getElementById("inp").value;
			if(s1!=""){
			window.open("https://www.google.com/search?q="+s1);}
		}
		
                window.addEventListener("keyup",checkKeyPress,false);
                function checkKeyPress(key)
                {
                        if(key.keyCode=="13")
                        {
                                ex1();
                        }
                }
var st="";
        const btn = document.getElementById('btn');
	
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
         
        recognition.onstart = function(){
        alert("Just say 'search for' and speak out the query");
        console.log('You can speak now!!!');
	
	
        }
	
        recognition.onresult = function(event){
        var text = event.results[0][0].transcript;
        //document.getElementById('result').innerHTML =text;
        console.log(text);
        
        read(text);
        }
        
        function op_goog(q)
        {
            url="https://www.google.com/search?q="+q;
            window.open(url);
        }
        
        function database(s)
        {
            s=s.toLowerCase();
            var d=s.substring(10,s.length);
            op_goog(d);
            return('Searching for '+d);
        }
       
        function read(text)
        {
        var speech = new SpeechSynthesisUtterance();
        speech.text =text; 
        var x;
        x=database(text);
        speech.text = x;
        window.speechSynthesis.speak(speech);
        if(i==0)
        {
                read1("Voice Search Activated");
                console.log(i);
                i+=1;
        }
	
/*
        const fs=require('fs')
        fs.writeFile('Output.txt',text,(err)=>{if (err) throw err;})*/
        
        }

	function read1(text)
        {
        var speech1 = new SpeechSynthesisUtterance();
        speech1.text =text; 
        window.speechSynthesis.speak(speech1);
/*
        const fs=require('fs')
        fs.writeFile('Output.txt',text,(err)=>{if (err) throw err;})
        */
        }
	