function ItemUpOrDown(ListBoxId, interval)
{	
	var listControl = document.getElementById(ListBoxId);
	var listItemsCount = listControl.length;
	var selectedItemIndex = listControl.selectedIndex;
	var workIndex = selectedItemIndex - interval;
	var x = 0;
		
	if(interval == null || selectedItemIndex < 0 || workIndex < 0 || workIndex >= listItemsCount)
		return false;
	
	// Add new items	
	for(x = 0; x < listItemsCount; x++)
	{
		var newOptionElement = document.createElement("option");
		var i = 0;
				
		switch(x)
		{
			case workIndex:
				newOptionElement.setAttribute("value", listControl.options[selectedItemIndex].value);
				newOptionElement.innerText = listControl.options[selectedItemIndex].text;
				
				break;
			
			case (workIndex + interval):
				i = x - interval;
				if(i < 0){i = i * (-1);}
				newOptionElement.setAttribute("value", listControl.options[x - interval].value);
				newOptionElement.innerText = listControl.options[x - interval].text;
				
				break;
				
			default:
				newOptionElement.setAttribute("value", listControl.options[x].value);
				newOptionElement.innerText = listControl.options[x].text;
				
				break;
				
		}
		
		listControl.appendChild(newOptionElement);
	}	
	
	// Remove old items
	for(x = 0; x < listItemsCount; x++){listControl.options[0].remove();}
		
	listControl.options[workIndex].selected = "selected";	
	
	return true;
}