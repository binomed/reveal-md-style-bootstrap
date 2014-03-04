var BOOTSTRAP_THEME = BOOTSTRAP_THEME || function(){


	function pageLoad(){
		
	
		if (Reveal){
			Reveal.sync();
		}
	}

	
	// API
    function init(){
            document.addEventListener('DOMContentLoaded', function(){
            	setTimeout(function() {
            		pageLoad();
            	}, 500);
            });
    }

	return{
		init : init
	}

}(); 

BOOTSTRAP_THEME.init();