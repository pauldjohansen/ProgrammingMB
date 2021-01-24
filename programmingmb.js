function bePrepared()
{
	var htmlOutput = "";

	var numMBs = document.getElementById('NumMeritBadges').value;
	var numMBsOver = numMBs - 21;
	var goldPalms, silverPalms, bronzePalms;
		
	if (numMBsOver > 14)
	{
		silverPalms = Math.floor(numMBsOver / 15)
		htmlOutput = htmlOutput + silverPalms + " silver palms<br/>";
		numMBsOver = numMBsOver - (silverPalms * 15);
	}
	
	if (numMBsOver > 9)
	{
		goldPalms = Math.floor(numMBsOver / 10)
		htmlOutput = htmlOutput + goldPalms + " gold palms<br/>";
		numMBsOver = numMBsOver - (goldPalms * 10);
	}
	
	if (numMBsOver > 4)
	{
		bronzePalms = Math.floor(numMBsOver / 5)
		htmlOutput = htmlOutput + bronzePalms + " bronze palms<br/>";
		numMBsOver = numMBsOver - (bronzePalms * 5);
	}

	if (numMBsOver > 0)
	{
		htmlOutput = htmlOutput + (5-numMBsOver) + " more merit badges to your next palm!";
	}
		
		document.getElementById('myAnswer').innerHTML = htmlOutput;
}


