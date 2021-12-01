function SummaryView(props){
    return (  
		<div>
			<div><button onClick={e=> window.location.hash="#search"}>Back to Search</button></div>
          Summary for <span title="nr. guests">{props.persons}</span> guests:
		  	<table>
				<tbody>
					<tr>
						<td>Ingredient</td>
						<td>Aisle</td>
						<td>Quantity</td>
					</tr>
					
				{[...props.ingredients].sort(compareIngredients).map(ingredient =>{
				return(
					<tr key={ingredient.id}>
						<td>{ingredient.name}</td>
						<td>{ingredient.aisle}</td>
						<td>{(ingredient.amount*props.persons).toFixed(2)} {ingredient.unit}</td>
					</tr>
				)})}
					
				</tbody>
			</table>
	
		</div>
    );
}

function compareIngredients(a,b){
    if(a.aisle < b.aisle)
	   return -1;
   
	else if(a.aisle > b.aisle)
	   return 1;

	else{
		if(a.name < b.name)
		   return -1;
	   
		else if(a.name > b.name)
		   return 1;
		
		else{
			return 1;
			//throw new Error('Ingredient names are not unique');
		}	
	}
}