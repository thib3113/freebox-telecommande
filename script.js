$(function(){
        //numéro du player à controlé, 1 si vous n'en avez qu'un
    var numero_du_player = 1;

    //mettre son code de télécommande
    var code_telecommande = 5818261;
    var freebox = new Freebox(1, code_telecommande);


    $("[data-navigation]").mouseup(function(){
        clearTimeout(pressTimer)
        if(already_press) return false;

        select_press = $(this).data("navigation");
        freebox.send(select_press, false);
        
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
                freebox.send(select_press, true);
            },1000);

        return false; 
    });
})