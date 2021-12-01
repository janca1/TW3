function SummaryPresenter(props){  
   return <SummaryView persons={props.model.numberOfGuests}
					   dishes={props.model.dishes}
					   ingredients={props.model.getIngredients(props.model.dishes)}
					   />
}
