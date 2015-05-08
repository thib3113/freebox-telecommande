    var pressTimer, already_press;
    
    //numéro du player à controlé, 1 si vous n'en avez qu'un
    var numero_du_player = 1;

    //mettre son code de télécommande
    var code_telecommande = 5818261;



    $("[data-navigation]").mouseup(function(){
        clearTimeout(pressTimer)
        if(already_press) return false;

        select_press = $(this).data("navigation");
        sendToFreebox(select_press, false);
        
        return false;
    }).mousedown(function(){
        var parent = this;
        already_press = false;

        pressTimer = window.
        setTimeout(function() {
                short_press = $(parent).data("navigation");
                lg_press = $(parent).data("lg-press");
                already_press = true;

                select_press = lg_press || short_press;
                console.log("long press : "+select_press);
                sendToFreebox(select_press, true);
            },1000);

        return false; 
    });

var Freebox = function(id_player, code_telecommande){

    var send = function(key, long_press){
        long_press = long_press || false;
        long_press = (long_press)? "true" : "false";

        var url = "http://hd"+this.id_player+".freebox.fr/pub/remote_control?code="+this.code_telecommande+"&key="+key+"&long="+long_press; 
        $.get(url)
        .fail(function(){

        });
    }

    var setHDplayer = function(id_player){
        this.id_player = id_player;
    }

    var setTelecommandCode = function(code_telecommande){
        this.code_telecommande = code_telecommande;
    }

}