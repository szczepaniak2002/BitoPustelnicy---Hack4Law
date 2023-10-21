window.onload = loading()
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function loading() {
            
            const elementsWithClass = document.getElementsByClassName('randomtextclass');
            const count = elementsWithClass.length;
            var texts = ["W dzisiejszym globalnym świecie, pełnym skomplikowanych problemów, ludzie często szukają rozwiązań, które pozwolą im zrozumieć współczesne wyzwania i wprowadzić pozytywne zmiany. \
                Edukacja odgrywa kluczową rolę w rozwoju społeczeństwa, umożliwiając jednostkom zdobywanie wiedzy i umiejętności potrzebnych do osiągnięcia sukcesu w życiu.",
                "W miarę jak technologia ewoluuje, komunikacja międzyludzka staje się coraz bardziej złożona, pozwalając na niesamowite możliwości interakcji i wymiany informacji na całym świecie.",
                "Wyobraźnia ludzka jest źródłem kreatywności i innowacji, co prowadzi do tworzenia nowych rozwiązań i osiągnięć w różnych dziedzinach.",
                "Wartość przyjaźni nie może być przeceniana, ponieważ to relacje z bliskimi ludźmi stanowią sedno naszego życia i przynoszą nam radość i wsparcie.",
                "Zdrowy styl życia obejmuje regularną aktywność fizyczną, zdrową dietę i dbałość o własne samopoczucie, co może znacząco wpłynąć na jakość życia. \
                Rozwój społeczności lokalnych ma kluczowe znaczenie dla zachowania dziedzictwa kulturowego i utrzymania silnych więzi międzyludzkich.",
                "Zrozumienie różnorodności kulturowej pozwala nam docenić unikalność każdej kultury i tworzyć otwarte i tolerancyjne społeczeństwa.\
                Ochrona środowiska naturalnego jest obowiązkiem każdego człowieka, ponieważ to nasza planeta dostarcza nam zasobów potrzebnych do życia.",
                "Wykształcenie i nauka są kluczowymi narzędziami do walki z wyzwaniami współczesnego świata i osiągnięcia zrównoważonego rozwoju społeczeństwa."
              ];
            for (i = 0; i <= count; i++) {
                console.log(count)
                elementsWithClass[i].textContent = texts[getRandomNumber(0,texts.length-1)];
            }
        }