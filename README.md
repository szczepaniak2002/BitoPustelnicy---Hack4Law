# BitoPustelnicy - Hack4Law

## Spis treści
* [Przedstawienie zespołu](#przedstawienie-zespołu)
* [Wybór modułu](#wybór-modułu)
* [Nasz projekt](#nasz-projekt)
* [Perspektywy rozwoju](#perspektywy-rozwoju)
* [Instrukcja włączenia aplikacji](#instrukcja-włączenia-aplikacji)


## Przedstawienie zespołu
Witamy serdecznie na naszym hackatonowym repozytorium!!!\
Jesteśmy 4 osobową grupą studentów wydziału MINI Politechniki Warszawskiej i w tym roku dane nam było wziąć udział w 3. edycji Hack4Law.

  Oto skład naszej drużyny:
  - Mateusz Wiktorzak
  - Alicja Charuza
  - Mateusz Andryszak
  - Franciszek Szczepaniak
  
  Było to dla nas niezwykłe wyzwanie, które z pewnością zostanie na długo w naszej pamięci. 

  ## Wybór modułu
  Społeczeństwo rozwija się, a wraz z nim rozwija się przepływ informacji. Jednak istnieje pewna bariera - ludziom nie jest łatwo wyjść przed szereg i powiedzieć o temacie niewygodnym. Mimo, że działania te,często są oparte na poczuciu sprawiedliwości, to zazwyczaj kończą się krytyką. Nawet jeśli ktoś postawi się oszustwom i bezprawiu, to może czekać go za to kara przełożonych, dla których pewne niedociągnięcia mogły być na rękę. Chcieliśmy więc przyczynić się do chociaż najmniejszej zmiany. I tak o to postawiliśmy na moduł nr 2 - "Zasygnalizuj mi". Szczerze pragniemy, aby w kraju, gdzie panuje wolność słowa, nikt nie bał się zawalczyć o to co słuszne dla siebie, czy dla ogółu społeczeństwa. Dlatego postanowiliśmy rozszerzyć ten moduł. Moduł, w którym kluczowym elementem jest anonimowość. Dedykowany on jest zarówno Sygnalistom w organizacjach, jak i zwykłym ludziom, którzy mogli znaleźc się w sytuacji, gdzie potrzebna może być pomoc prawna, czy psychologiczna.

  ## Nasz projekt
  Chcieliśmy więc przedstawić aplikację mającą na celu anonimowe zgłaszanie nieprawidłowości oraz zwracanie się o pomoc. Oto **SurfSeek**:
  ![image](https://github.com/szczepaniak2002/BitoPustelnicy---Hack4Law/assets/101816148/460ca656-42f9-4b96-9fab-60b2da247cc8)
  Na pierwszy rzut oka aplikacja ta wygląda jak jedna z wielu dostępnych przeglądarek interenetowych. Podobieństwo to nie jest przypadkowe, a zamierzone. Jest ono ważnym elementem naszej anonimowości... W jaki     sposób? Już śpieszymy z wytłumaczeniem. Wiele osób podlega kontroli-chociażby przez przełożonych. W innej sytuacji, może to być ktoś znajdujący się w niebezpieczenśtwie. Niech ekstremalnym przypadkiem, będzie     kobieta, która pada ofiarą przemocy domowej. Powłoka naszej aplikacji, imituje przeglądarkę internetową. Daje to możliwość zareagowania przy zmniejszonym ryzyku, że ktoś to zauważy. 
   #### Użytkownik
  Jak to dokładniej działa? SurfSeek jest anonimowym czatem, gdzie po jednej stronie znajdują się użytkownicy, a po drugiej stronie czatu ktoś wykwalifikowany w zależności od kwestii w jakich używany jest          czat. Osoba, która odbiera nasze zgłoszenie nie ma dostępu do naszych danych osobowych. Jesteśmy więc anonimowi. Aby dostać się do czatu naszej aplikacji, w wyszukiwarkę musi zostać wpisana odpowiednia fraza     - "hasło".  Tylko ono aktywuje nasze okienko komunikacji. W innym przypadku zostaniemy przeniesieni na Googlowską stronę wyszukiwanego zdania. W czacie, możemy poprosić wykwalifikowaną osobę o pomoc czy           radę. Gdyby ktoś się uparł mógłby postrzegać to jako bardziej funkcyjny telefon zaufania. Interfejs stworzony jest tak, aby w jak największym stopniu imitować przeglądarkę. Nawet wiadomości wyglądają jak         wyniki wyszukiwania.

  ![image](https://github.com/szczepaniak2002/BitoPustelnicy---Hack4Law/assets/101816148/aeb0f7cd-7efa-47a8-9942-d7aa68a921dd)

  #### Konsultant
  Po drugiej stronie znajduje się interfejs konsultanta.Naszym zamysłem było, aby miał on dostęp do wielu czatów, przy czym nie widział żadnych informacji o osobie zgłaszającej się. Mógłby przełączać się           między czatami oraz widzieć ile osób czeka na odpowiedź. 
  
  ![image](https://github.com/szczepaniak2002/BitoPustelnicy---Hack4Law/assets/101816148/c64d88a9-f9d7-4da5-8616-6039e167d5b4)

  #### Co dalej? 
  W zależności od sprawy, za prośbą osoby zgłaszającej, konsultant może zgłosić sprawę do różnych organów. W organziacjach, może to być zarząd, czy nawet organy ścigania, na przykład Centralne Biuro                 Antykorupcyjne.
  Podobnie może być, gdy z czatu korzysta przysłowiowy "Kowalski" jak to nazywaliśmy przy rozmowach z mentorami. Dodatkowo, mógłby zaczerpnąć on konsultacji w sprawach prawnych, czy ewentualnych krokach, które       może należeć podjąć. W miejscu konsultanta, mógłby siedzieć też psycholog, który zapewniłby wsparcie w bardzo ciężkich i być może kluczowych dla kogoś chwilach. 

## Perspektywy Rozwoju
Zastanawiając się nad przyszłością aplikacji, przychodzą nam na myśl pewne ulepszenia. Chociażby zmiana imitowanych przez aplikację stron. Co gdyby była ona jeszcze bardziej 'ukryta'? Wyobraźmy sobie stronę imitującą sklep online, czy jakiś biurowy edytor tekstu. Może nawet coś przypominające swoim interfacem excela itp. Może ktoś mógłby poczuć się jeszcze spokojniej, wiedząc, że nie grozi mu inwigilacja.

## Instrukcja włączenia aplikacji
1. Pobieramy program xammp z strony https://www.apachefriends.org/pl/index.html
2. Wchodzimy w xammp control panel i instalujemy a następnie włączamy apache i mysql
3. Klikamy w przycisk admin w wierszu mysql
4. Klikamy w zakładce import i importujemy bazę danych incidentdb.sql znajdującą się w tym repozytorium
5. Otwieramy folder xammp na naszym komputerze a następnie folder htdocs
6. Wkładamy do folderu htdocs wszystkie pliki z naszego repozytorium
7. Po odpaleniu stron w przeglądarce powinny zadziałać


## Podziękowania
##### Dziękujemy, że zostaliście z nami do końca. Liczymy, że nasz pomysł, będzie miał kiedy okazję się rozwinąć i pomóc w szybki i łatwy sposób połączyć i skomunikować ze sobą dwa światy - ludzi potrzebujących pomocy z prawnikami pragnącymi pomagać

  
