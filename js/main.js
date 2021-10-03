$(function () {
    var particles = Particles.init({
        selector: '.background',
        sizeVariations: 10,
        color: ['#f0f8ff', '#c0c0c0', '#afeeee'],
        connectParticles: true,
        maxParticles: 150,

        responsive: [
            {
                breakpoint: 1200,
                options: {
                    maxParticles: 100,
                    color: ['#f0f8ff', '#c0c0c0', '#afeeee'],
                    connectParticles: true
                }
            },
            {
                breakpoint: 600,
                options: {
                    maxParticles: 60,
                    color: ['#f0f8ff', '#c0c0c0', '#afeeee'],
                    connectParticles: true
                }
            },

            {
                breakpoint: 400,
                options: {
                    maxParticles: 30,
                    color: ['#f0f8ff', '#c0c0c0', '#afeeee'],
                    connectParticles: true
                    }
            }
        ]
    });

    $('#main-title').hide().fadeIn(3000);

    $(window).scroll(function() {
        $('.fadein').each(function() {
            var mainHeight = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > mainHeight - windowHeight) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });

});