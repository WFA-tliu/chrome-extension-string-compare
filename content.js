function Case_Edit() 
{ 	  
	//Under the case edit webpage, we have "System", "System Detail" and "Program" 3 fields to fill-in
	//For System field, its ID is set as "00N40000001hYWR"
    element_Name = document.getElementById("00N40000001hYWR");
	
	//if there is no "System" field, we just return directly
	if( element_Name == null )
	{
	  console.log("There is no System field, so we may be not at case-edit page. Just return."); 	
	  return;
	}
	
	//Set the value of System field as "Software"
    element_Name.value = "Software"
	
	//For System Detail field, its ID is set as "00N40000001wPlj"
	element_Name = document.getElementById("00N40000001wPlj");
	
	//if there is no "System Detail" field, we just return directly
	if( element_Name == null )
	{
	  console.log("There is no System Detail field, so we may be not at case-edit page. Just return.");//Actually, it will return directly when checking the "System" field  	
	  return;
	}

    //Set the value of System Detail field as "UCC Core"
    element_Name.value = "UCC Core"
	
	
	
	//For Program field, its ID is set as "00N33000002rqMH"
	element_Name = document.getElementById("00N33000002rqMH");
	
	//if there is no "Program" field, we just return directly
	if( element_Name == null )
	{
	  console.log("There is no Program field, so we may be not at case-edit page. Just return.");//Actually, it will return directly when checking the "System" field  	
	  return;
	}

    //Set the value of Program field as "EasyMesh"
    element_Name.value = "EasyMesh"
	
	//For Status field, its ID is set as "cas7"
	element_Name = document.getElementById("cas7");
	
	//if there is no "Status" field, we just return directly
	if( element_Name == null )
	{
	  console.log("There is no Status field, so we may be not at case-edit page. Just return.");//Actually, it will return directly when checking the "System" field  	
	  return;
	}

    //Set the value of Status field as "Hold/Waiting"
    element_Name.value = "Hold/Waiting"


	//Following is for testing, we create one constant string to compare the content in the "Description" field
	//const System_Software = 'Thank you';//It is just for testing purpose
	const System_Software = 'thank you';//It is just for testing purpose
	
	//For Description field, its ID is set as "cas15"
	var strText = document.getElementById("cas15").value;
	const sentence = new String(strText)
	
	//if there is no content in the "Description" field, we just return directly
	//The possibility would be very low, since the content is the part within the original mail body from member
	if( strText == null )
	{
	  console.log("There is no content from the Description field, so we may be not at case-edit page. Just return.");//Actually, it will return directly when checking the "System" field  		
	  return;
	}
	else
	{
		console.log(`Case-1: The word "${System_Software}" ${sentence.includes(System_Software) ? 'is' : 'is not'} in the sentence`); //since it is case-sensitive, we shall use following method instead
		console.log(`Case-2: The word "${System_Software}" ${sentence.toLowerCase().includes(System_Software.toLowerCase()) ? 'is' : 'is not'} in the sentence`); 
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
	Case_Edit();
}

