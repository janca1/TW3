function SearchPresenter(props){   
	const [promise, setPromise]=React.useState(null);
	const [data, setData]=React.useState(null);
	const [error, setError]=React.useState(null);
	const [searchQuery, setQuery]=React.useState("");
	const [searchType, setType]=React.useState("");

	React.useEffect( function(){  	
		 setPromise(DishSource.searchDishes({}));
		 // return function(){ setData(null); setError(null);}        
	}, [])
  
	React.useEffect(function(){ 
		setData(null); 
		setError(null); 
		let cancelled=false;
		
		if(promise)
			promise.then(function(dt){  if(!cancelled) setData(dt);})
		   .catch(function(er){ if(!cancelled) setError(er);});
	   
		return function(){ cancelled=true; };
	}, [promise]);

		   
	return <div>
			 <SearchFormView options={["starter", "main course", "dessert"]} 
			 onText={x=>setQuery(x)} onDishType={x=>setType(x)} 
			 onSearch={()=>setPromise(DishSource.searchDishes({query:searchQuery, type:searchType}))} />
			 {promiseNoData(promise,data,error) ||
				 <SearchResultsView searchResults={data} dishChosen={id=>props.model.setCurrentDish(id)}/>}
		   </div>
}