function Show(props){
	const [hashState, setHashState]=React.useState(window.location.hash);
	
	React.useEffect( function(){  
			  function obs(){ setHashState(window.location.hash); }
			  window.addEventListener('hashchange', obs);                               // 1. subscribe
			  return function(){ window.removeEventListener('hashchange', obs)}        // 2.unsubscribe
		   }, [])
	
		return  <div className= {(hashState!=props.hash) ? "hidden":""}>{props.children}</div> 
}  

