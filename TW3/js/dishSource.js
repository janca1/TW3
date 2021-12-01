const  DishSource={   // JS object creation literal

   apiCall(params) {
		return fetch(BASE_URL+params, {
			"method": "GET",              // HTTP method
			"headers": {                  // HTTP headers
				'X-Mashape-Key' : API_KEY,
				"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			}
		})
		.then(response=>{ 
						//if(response.ok)
						if(response.ok)
						{return response}
						else
						{throw new Error(response.statusText); /*return response;*/}
		})  

		  // from HTTP response headers to HTTP response data
		  .then(response => response.json())   ;
   }
   
   ,   // comma between object entries
searchDishes(params){ 

	if(params.query && params.type){
	return DishSource.apiCall("/recipes/search?" + new URLSearchParams({query:params.query, type:params.type}))
	//.then(data=>console.log(data.results))
	.then(data=>data)
	}
	else if(params.query && (params.type==undefined))
	return DishSource.apiCall("/recipes/search?" + new URLSearchParams({query:params.query}))
	//.then(data=>console.log(data.results))
	.then(data=>data)

	else if((params.query==undefined) &&(params.type))
	return DishSource.apiCall("/recipes/search?" + new URLSearchParams({type:params.type}))
	//.then(data=>console.log(data.results))
	.then(data=>data)

	else
	return DishSource.apiCall("/recipes/search?" + new URLSearchParams({query:"chicken", type:"main course"}))
	//.then(data=>console.log(data.results))
	.then(data=>data)
}								

   ,   
   getDishDetails(id){ return DishSource.apiCall("/recipes/"+id+"/information"); }
};