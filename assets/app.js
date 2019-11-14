//popper on movie card
    var reference = $(".movie-card");
    var popup = $(".movie-popper");
    popup.hide();

    reference.click(function(){    
        popup.show();
    })