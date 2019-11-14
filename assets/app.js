//popper on movie card
    var reference = document.querySelector('.movie-card');
    var popper = document.querySelector('.movie-popper');
    var popperInstance = new Popper(reference, popper, {
        
    });
    var popper = new Popper(referenceElement, onPopper, {
        placement: 'right'
    });
