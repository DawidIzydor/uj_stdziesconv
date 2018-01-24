function liczNiepew()
{
	var niepew = $("#niepewnosc").val();
	
	while(niepew.indexOf(",") != -1) niepew = niepew.replace(",", ".");
	while(niepew.indexOf("  ") != -1) niepew = niepew.replace("  ", " ");
	while(niepew.indexOf("	") != -1) niepew = niepew.replace("	", " ");
	while(niepew.indexOf("N ") != -1) niepew = niepew.replace("N ", "N");
	while(niepew.indexOf("E ") != -1) niepew = niepew.replace("E ", "E");
	while(niepew.indexOf("’ ") != -1) niepew = niepew.replace("’ ", "’");
	while(niepew.indexOf("° ") != -1) niepew = niepew.replace("° ", "’");
	while(niepew.indexOf("’’E") != -1) niepew = niepew.replace("’’E", "’’ E");
	while(niepew.indexOf("’E") != -1) niepew = niepew.replace("’E", "’ E");
	while(niepew.indexOf("’\n") != -1) niepew = niepew.replace("’\n", "’ ");
	while(niepew.indexOf("’’N") != -1) niepew = niepew.replace("’’N", "’’ N");
	while(niepew.indexOf("’N") != -1) niepew = niepew.replace("’N", "’ N");
	
	niepew.trim();
	
	$("#niepewnosc").val(niepew);
	
	niepew = niepew.split(" ");

	var dlugosc = niepew.length;
	
	if(dlugosc < 2){
		return;
	}

	var newval = "";
	
	for(var a = 0; a < dlugosc; a++)
	{
		if(niepew[a].length < 2) continue;
		
		var wspol;
		var firstLetter = niepew[a][0];
		
		//if(firstLetter != "N" && firstLetter != "E") continue;
		
		if(firstLetter == "N" && newval != ""){
			newval += "\n";
		}else if(firstLetter == "E")
		{
			newval += " ";
		}else{
			continue;
		}
		
		niepew[a] = niepew[a].slice(1, niepew[a].length);
		
		var toconvert = niepew[a].slice(3, niepew[a].length);
		
		
	}
	
}