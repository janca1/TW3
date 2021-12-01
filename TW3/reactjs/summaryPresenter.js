/*
function SummaryPresenter(props){  
   return <SummaryView persons={props.model.numberOfGuests}
					   dishes={props.model.dishes}
					   ingredients={props.model.getIngredients(props.model.dishes)}
					   />
}
*/

function SummaryPresenter(props){   
	const [number, setNumber]=React.useState(props.model.numberOfGuests);
	const [dish, remove]=React.useState(props.model.dishes);
	
	React.useEffect( function(){  
			  function obs(){ setNumber(props.model.numberOfGuests); remove(props.model.dishes);};
			  props.model.addObserver(obs);                               // 1. subscribe
			  return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
		   }, [])
		   
	return <SummaryView persons={number} dishes={props.model.dishes} ingredients={props.model.getIngredients(props.model.dishes)} />
}