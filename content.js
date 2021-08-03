function CheckField() 
{ 	  
	//假設你們的字串比對已經完成, 接下來要對各個 field 做設定...
	  
    //Get the "seleciotn field"
    //element_Selection = document.getElementById("language");
	
	//一個偷懶的檢查方式
	//if( element_Selection == null )
	//{
	//  return;
	//}
	  
    //Set the selection to "python"
    //element_Selection.value = "python"

    //-----------------------------------------
	
    //Get the "input field"
    //element_Name = document.getElementById("fname");
	
	//一個偷懶的檢查方式
	//if( element_Name == null )
	//{
	//  return;
	//}

    //Set the value
    //element_Name.value = "Flug Liu"
	
	//alert("step-1 at content.js");
	
	//Get the "input field"
    //element_Name = document.getElementById("System");
	element_Name = document.getElementById("00N40000001hYWR");
	
	//一個偷懶的檢查方式
	if( element_Name == null )
	{
	  alert("step-1a at content.js"); 	
	  return;
	}

	//Set the value
    element_Name.value = "Software"
	
	//alert("step-2 at content.js");
	
	//Get the "input field"
    //element_Name = document.getElementById("System Detail");
	element_Name = document.getElementById("00N40000001wPlj");
	
	//一個偷懶的檢查方式
	if( element_Name == null )
	{
	  alert("step-2a at content.js"); 	
	  return;
	}

    //Set the value
    element_Name.value = "UCC Core"
	
	//alert("step-3 at content.js");
	
	//Get the "input field"
    //element_Name = document.getElementById("Program");
	element_Name = document.getElementById("00N33000002rqMH");
	
	//一個偷懶的檢查方式
	if( element_Name == null )
	{
	  alert("step-3a at content.js"); 	
	  return;
	}

    //Set the value
    element_Name.value = "EasyMesh"
	
	//Get the "input field"
    //element_Name = document.getElementById("Program");
	element_Name = document.getElementById("cas7");
	
	//一個偷懶的檢查方式
	if( element_Name == null )
	{
	  alert("step-4a at content.js"); 	
	  return;
	}

    //Set the value
    element_Name.value = "Hold/Waiting"


	//Get the "textarea field"
	//const System_Software = 'Thank you';//It is just for testing purpose
	const System_Software = 'thank you';//It is just for testing purpose
	
	var strText = document.getElementById("cas15").value;
	const sentence = new String(strText)
	
	//一個偷懶的檢查方式
	if( strText == null )
	{
	  alert("step-5a at content.js"); 	
	  return;
	}
	else
	{
		//alert(strText);		
		console.log('Wahaha ' + sentence)
		console.log(`Case-1: The word "${System_Software}" ${sentence.includes(System_Software) ? 'is' : 'is not'} in the sentence`); //since it is case-sensitive, we shall use following method instead
		console.log(`Case-2: The word "${System_Software}" ${sentence.toLowerCase().includes(System_Software.toLowerCase()) ? 'is' : 'is not'} in the sentence`); 
		alert(sentence);		
	}
	
	
	
	
	
	//Get the "Save button" and "Click" it
	document.getElementsByName("save")[0].click();
}


	
if(document.readyState !== 'complete') 
{
    window.addEventListener('load',afterWindowLoaded);
} 
else 
{
    afterWindowLoaded();
}

function afterWindowLoaded()
{
	//alert("OK 123 at content.js");
	CheckField();
}

