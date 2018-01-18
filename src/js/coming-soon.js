( function () {
    var buttons = ['about', 'contact', 'team'];
    var hideAll = function(){
        for (var i = 0 ; i < buttons.length ; i++){
            window.document.getElementById('cnt-'+buttons[i]).style.display = "none";
        }
    }
    var showContent = function(button){
        hideAll();
        window.document.getElementById('cnt-'+button.target.id).style.display = "block";
    }
    window.onload = function(e){
        for (var i = 0 ; i < buttons.length ; i++){
            window.document.getElementById('btn-'+buttons[i])
                .addEventListener('click', function(button){
                    showContent(button)}, true);
        }
    }
})();

