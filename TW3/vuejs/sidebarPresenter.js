function SidebarPresenter(props){   
   return <SidebarView guests={props.model.numberOfGuests} 
		               setGuests={guests=>props.model.setNumberOfGuests(guests)}
					   dishes={props.model.dishes}
					   removeDish={dish=>props.model.removeFromMenu(dish)}
					   dishChoice={id=>props.model.setCurrentDish(id)}
    />
}