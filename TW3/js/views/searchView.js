function SearchFormView(props){
    return (  
		<div>
		  <input type="search" onInput={e=>props.onText(e.target.value)}></input>
		  <select onChange={ev=>props.onDishType(ev.target.value)}>
			<option>Choose:</option>
			{props.options.map(function(opt){return <option key={opt}>{opt}</option>})}
		  </select>
		  <button onClick={event=>props.onSearch()}>Search!</button>
		  <button onClick={e=> window.location.hash="#summary"}>Summary</button>
		</div>
		);
}

function eventPrinter(evt){ console.log(evt);}

function SearchResultsView(props){
	return(
	<div>
		{props.searchResults.results.map(dish =>{
			return(
			  <span class="searchResult" key={dish.id} onClick={e=>{props.dishChosen(dish.id); window.location.hash="#details";}}>
				  <img src={"https://spoonacular.com/recipeImages/"+dish.image} height="100"/>
				  <div>{dish.title}</div>
			  </span>
				)})}
	</div>		
		);	
}

