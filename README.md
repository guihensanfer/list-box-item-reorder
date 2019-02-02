# list-box-item-reorder
ListBox Items Index Reorder using pure Javascript (Web)

![alt text](https://github.com/guihensanfer/list-box-item-reorder/blob/master/simple_example.jpg)

```html
    		<!--ListBox-->
   		<select id="listBox1" size="5">
			<option selected="selected" value="1">Item 1</option>
			<option value="2">Item 2</option>	
			<option value="3">Item 3</option>
			<option value="4">Item 4</option>
			<option value="5">Item 5</option>			
		</select>
		<!-- Buttons inline align -->
		<ul id="list">
			<li>
				<a id="buttonUp" href="#" title="Up Selected Item (+1)" onclick="ItemUpOrDown('listBox1', 1)">
					Up Item (+1)
				</a>
			</li>
			<li>
				<a id="buttonDown" href="#" title="Down Selected Item (-1)" onclick="ItemUpOrDown('listBox1', -1)">
					Down Item (-1)
				</a>				
			</li>
		</ul>
```

## How to use:

Add for your select list two buttons with onclick event. Call the method Javascript ItemUpOrDown with two parameters:

1º: listboxItemId:
  Insert the ID of your listbox control.
  
2º interval:
  if you want reorder item to top, then add positive number interval. For reorder to bottom, insert negative number interval.
  
  ```javascript
  // onclick event buttons
  // Item to top reorder
  ItemUpOrDown('listBox1', 1);
  // Or, if you wanna reorder to bottom
  ItemUpOrDown('listBox1', -1);
  
  // You can use any numbers based in your list items count
  // Example
  ItemUpOrDown('listBox1', -4);
  ItemUpDown('listBox1', 3);
```
