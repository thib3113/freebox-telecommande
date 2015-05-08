var FreeboxTVKeys = {
    RED : "red", // Bouton rouge
    GREEN : "green", // Bouton vert
    BLUE : "blue", // Bouton bleu
    YELLOW : "yellow", // Bouton jaune


    POWER : "power", // Bouton Power
    LIST : "list", // liste of channel
    TV : "tv", // Bouton tv

    NUM_0 : "0", // Bouton 0
    NUM_1 : "1", // Bouton 1
    NUM_2 : "2", // Bouton 2
    NUM_3 : "3", // Bouton 3
    NUM_4 : "4", // Bouton 4
    NUM_5 : "5", // Bouton 5
    NUM_6 : "6", // Bouton 6
    NUM_7 : "7", // Bouton 7
    NUM_8 : "8", // Bouton 8
    NUM_9 : "9", // Bouton 9

    BACK : "back", // Bouton jaune (retour)
    SWAP : "swap", // Bouton swap

    INFO : "info", // Bouton info
    EPG : "epg", // Bouton epg (fct+)
    MAIL : "mail", // Bouton mail
    MEDIA : "media", // Bouton media (fct+)
    HELP : "help", // Bouton help
    OPTIONS : "options", // Bouton options (fct+)
    PIP : "pip", // Bouton pip

    VOL_INC : "vol_inc", // Bouton volume +
    VOL_DEC : "vol_dec", // Bouton volume -

    OK : "ok", // Bouton ok
    UP : "up", // Bouton haut
    RIGHT : "right", // Bouton droite
    DOWN : "down", // Bouton bas
    LEFT : "left", // Bouton gauche

    PRGM_INC : "prgm_inc", //Bouton programme +
    PRGM_DEC : "prgm_dec", // Bouton programme -

    MUTE : "mute", // Bouton sourdine
    HOME : "home", // Bouton Free
    REC : "rec", // Bouton Rec

    BWD : "bwd", // Bouton << retour arrière
    PREV : "prev", // Bouton |<< précédent
    PLAY : "play", // Bouton Lecture / Pause
    FWD : "fwd", // Bouton >> avance rapide
    NEXT : "next" // Bouton >>| suivant
};

function Freebox(id_player, code_telecommande){

    var send = function(key, long_press, repeat){
        long_press = long_press || false;
        long_press = (long_press)? "true" : "false";

        repeat = repeat || 1;

        var url = "http://hd"+this.id_player+".freebox.fr/pub/remote_control?code="+this.code_telecommande+"&key="+key+"&long="+long_press+"&repeat="+repeat; 
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
    
    var pressTimer;
    var already_press;

}