const REF= "dinnerModel"+124 ; 

function persistModel(model){
	let loadingFromFirebase=false;
	
    model.addObserver(function(){
		if(loadingFromFirebase) return;
         	firebase.database().ref(REF).set({  
			guests: model.numberOfGuests,
			dishes: model.dishes,
			currentDish: model.currentDish
		});
		//console.log("observer call check");
    });
	
	firebase.database().ref(REF).on("value", function(data){
		loadingFromFirebase= true;
		if(data.val()){
			model.setNumberOfGuests(data.val().guests);
			model.setDishes(data.val().dishes || []);
			model.setCurrentDish(data.val().currentDish || null);
		}
		loadingFromFirebase= false;
	});	
}
