function SidebarView(props){
    return (  
		<div>
          <span>
			  <button disabled={props.guests<=1} onClick={event=>props.setGuests(props.guests-1)}>-</button>
			  <span> {props.guests} </span>
			  <button onClick={event=>props.setGuests(props.guests+1)}>+</button>
		  </span>
		  
		  <table>
			<tbody>
			
			{[...props.dishes].sort(compareDishes).map(dish =>{
			return(
				<tr key={dish.id}>
					<td> <button onClick={event=>props.removeDish(dish)}>x</button> </td>
					<td><a href="#details" onClick={e=>{event.preventDefault(); 
												props.dishChoice(dish.id);}}>{dish.title}</a></td>
					<td>{dishType(dish)}</td>
					<td class="price">{(dish.pricePerServing*props.guests).toFixed(2)}</td>
				</tr>
			)})}
			
				<tr>
					<td></td>
					<td>Total: </td>
					<td></td>
					<td class="price">{(props.dishes.reduce(( previousValue, currentValue) => previousValue + currentValue.pricePerServing*props.guests,0)).toFixed(2)}</td>
				</tr>
				
			</tbody>
		  </table>
		</div>
    );
}

const types=["starter", "main course", "dessert"];
function dishType(dish){
    if(dish.dishTypes){
    	const tp= dish.dishTypes.filter(value => types.includes(value));
    	if(tp.length)
	    return tp[0];
    }
    return "";
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
	
	if(ai<bi) return -1;
	else if(ai>bi) return 1;
	else return 0;
}

