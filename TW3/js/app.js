function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){ 
	defaultRoute();    
   return  ( 
        <div class="flexParent">
            <div class="sidebar debug"><SidebarPresenter model={props.model}  /></div>
            <div class="mainContent debug">
				<Show hash="#search"><SearchPresenter model={props.model} /></Show>
				<Show hash="#details"><DetailsPresenter model={props.model} /></Show>
				<Show hash="#summary"><SummaryPresenter model={props.model} /></Show>
			</div>
         </div>  
    );
}

function defaultRoute(){
	if(!isKnown(window.location.hash)) window.location.hash="#search";
}
 
function isKnown(x){
	return	["#search", "#summary", "#details"].find(k=>k==x);
}
