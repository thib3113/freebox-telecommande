$(function(){


    var pressTimer;
    var already_press;

    //numéro du player à controlé, 1 si vous n'en avez qu'un
    var numero_du_player = 1;

    //mettre son code de télécommande
    var code_telecommande = localStorage.getItem("code_telecommande") || null;

    if(code_telecommande === null){
        do{
            code_tel = prompt("Merci de rentrer votre code télécommande freebox .");
            localStorage.setItem("code_telecommande", code_tel);            
        }
        while(!parseInt(code_tel));
        
    }

    


    var maFreebox = new Freebox(numero_du_player, code_telecommande);


    $("[data-navigation]").on("mouseup touchend", function(){
        clearTimeout(pressTimer)
        if(already_press) return false;

        select_press = $(this).data("navigation");
        maFreebox.press(select_press, false);
        
        return false;
    }).on("mousedown touchstart", function(){
        var parent = this;
        already_press = false;

        pressTimer = window.
        setTimeout(function() {
                short_press = $(parent).data("navigation");
                lg_press = $(parent).data("lg-press");
                already_press = true;

                select_press = lg_press || short_press;
                console.log("long press : "+select_press);
                maFreebox.press(select_press, true);
            },1000);

        return false; 
    });
})