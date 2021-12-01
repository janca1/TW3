/*
function SidebarPresenter(props){   
   return <SidebarView guests={props.model.numberOfGuests} 
		               setGuests={guests=>props.model.setNumberOfGuests(guests)}
					   dishes={props.model.dishes}
					   removeDish={dish=>props.model.removeFromMenu(dish)}
					   dishChoice={id=>props.model.setCurrentDish(id)}
    />
}
*/

function SidebarPresenter(props){   
	const [number, setNumber]=React.useState(props.model.numberOfGuests);
	const [dish, remove]=React.useState(props.model.dishes);
	
	React.useEffect( function(){  
			  function obs(){ setNumber(props.model.numberOfGuests); remove(props.model.dishes);}
			  props.model.addObserver(obs);                               // 1. subscribe
			  return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
		   }, [])
		   
	return <SidebarView guests={number} setGuests={x=>myModel.setNumberOfGuests(x)} dishes={props.model.dishes}
	removeDish={dish=>props.model.removeFromMenu(dish)} dishChoice={id=>props.model.setCurrentDish(id)}  />
}
