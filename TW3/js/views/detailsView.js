function DetailsView(props){
	return(
	<div>
		<h1>{props.dish.title}</h1>
		<div class="upper">
			<img class="left" src={props.dish.image} height="200" width="200"/>
			<div class="right">
				<p>price: {props.dish.pricePerServing} </p>
				<p>for {props.people} guests: {(props.people*props.dish.pricePerServing).toFixed(2)}</p>
			</div>
		</div>
		
		<div>
			{props.dish.extendedIngredients.map(x =>{
			return(
				<p key={x.id}>{x.amount.toFixed(2)} {x.unit} {x.nameClean}</p>
				)})}
		</div>
		
		<p class="instructions">{props.dish.instructions}</p>

		<span>
			<a href={props.dish.sourceUrl}>More information</a>
			<button class="add"  disabled={props.isDishInMenu} onClick={event=>{props.dishAdded(); window.location.hash="#search";}}>Add to menu!</button>
			<button class="cancel" onClick={e=>window.location.hash="#search"}>Cancel</button>
		</span>
	</div>		
		);	
}