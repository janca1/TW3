class DinnerModel{
constructor(guests = 2, dishes=[], currentDish=null, currentDishDetails=null, observers=[]){this.observers=[];
												 this.setNumberOfGuests(guests);
												 this.dishes=dishes;
												 this.setCurrentDish(currentDish);
												 this.getIngredients(dishes);}
	
	setNumberOfGuests(x){
		try
		{
		  if(x<=0 || !Number.isInteger(x))
			throw new Error("not a positive integer");
		  
		  this.numberOfGuests = x;
		  this.notifyObservers();
		} 
		  
		catch(error)
		{
		  console.log(error);
		}
	}
	
	addToMenu(dish){
		this.dishes = [...this.dishes,dish];
		this.notifyObservers();
	}
	
	removeFromMenu(dishData){
		this.dishes = this.dishes.filter(function(element){ return element.id != dishData.id;});
		this.notifyObservers();
	}

	setCurrentDish(id){
		if(this.currentDish === id) return;
		
		this.currentDish = id;
		this.currentDishDetails = null;
		this.currentDishError = null;
		this.notifyObservers();

		if(this.currentDish){
		DishSource.getDishDetails(this.currentDish)   
		.then( data=>{if(this.currentDish === id){
				this.currentDishDetails = data;
				this.notifyObservers();}}
			)
		.catch(
			error=>this.currentDishError=error, this.notifyObservers()
			) 
		}			
	}
	
	getIngredients(dishArr){
	   const result={}; 
	   dishArr.forEach(d=> d.extendedIngredients.forEach(i=>{
			if(!result[i.id])
			result[i.id]={...i};
		   else
			result[i.id].amount=i.amount+result[i.id].amount;
	   }))
	  return Object.values(result);
	}
	
	addObserver(observer){
		this.observers.push(observer);
	}
	
	removeObserver(observer){
		this.observers=this.observers.filter(x=> x != observer);
	}
	
	notifyObservers(){
		this.observers.forEach(cb => cb());
	}
	
	setDishes(dishes){ this.dishes= [...dishes]; this.notifyObservers();}
};