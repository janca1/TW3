function promiseNoData(promise, data, error){
	if(promise==null){
		return (<span>no data</span>);
	}
	
	else if(data==undefined && error){
		return (<span>{error}</span>);
	}
	
	else if(data==undefined){
		return(<img src="https://www.csc.kth.se/~cristi/loading.gif"/>);
	}
		
	else{
		return false;
	}
}