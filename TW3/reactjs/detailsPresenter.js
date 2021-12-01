function DetailsPresenter(props){   

	const [currentDish, setCurrentDish]=React.useState(props.model.currentDish);
	const [currentDishDetails, setDetails]=React.useState(props.model.currentDishDetails);
	const [currentDishError, setError]=React.useState(props.model.currentDishError);
	const [number, setNumber]=React.useState(props.model.numberOfGuests);
	
	React.useEffect( function(){  
		  function obs(){ setNumber(props.model.numberOfGuests); setCurrentDish(props.model.currentDish); 
						  setDetails(props.model.currentDishDetails); setError(props.model.currentDishError);}
		  props.model.addObserver(obs);                               // 1. subscribe
		  return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
	   }, [number, currentDishError, currentDishDetails, currentDish])
   
	return <div>
				{promiseNoData(currentDish,currentDishDetails,currentDishError) ||
				<DetailsView	isDishInMenu={ props.model.dishes.find(d=> d.id==currentDish)}
								dishAdded={()=>props.model.addToMenu(currentDishDetails)}
								people={number} dish={currentDishDetails}/>}
		   </div>
}