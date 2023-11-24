        // Lógica para controlar o carrossel
        var currentSlide = 1;

        function showSlide(n) {
            var slides = document.getElementsByClassName('slide');
            var controlButtons = document.getElementsByClassName('control-button');
            
            // Oculta todos os slides
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                controlButtons[i].classList.remove('active');
            }

            // Exibe o slide desejado
            slides[n - 1].classList.add('active');
            controlButtons[n - 1].classList.add('active');
            currentSlide = n;
        }

        function nextSlide() {
            if (currentSlide < 4) {
                showSlide(currentSlide + 1);
            } else {
                showSlide(1);
            }
        }

        function prevSlide() {
            if (currentSlide > 1) {
                showSlide(currentSlide - 1);
            } else {
                showSlide(4);
            }
        }

        setInterval(nextSlide, 15000);


        