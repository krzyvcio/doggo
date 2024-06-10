# DogGo server side - StartUP 🚀

### Run the API in development mode

docker is requiered for posgres database

```shell
nest start --watch
docker compose up -d
npx prisma migrate deploy
# seeding right now is available  from REST API ex. localhost:3030/seed/all/

```

# Business model

**Przegląd:**
Usługa na żądanie spacery z psem/opieki nad zwierzętami, która łączy lokalnych spacerowiczów i opiekunów ze
właścicielami zwierząt poprzez przyjazną dla użytkownika aplikację. Właściciele mogą zlecać spacery, zabawę, karmienie
itp. dla swoich psów kiedykolwiek potrzebują.

**Propozycja wartości:**

-   **Wygoda** - opieka nad psem na żądanie rezerwowana bezproblemowo poprzez aplikację. Nie ma konieczności
    długoterminowych zobowiązań.
-   **Niezawodność** - Wstępnie sprawdzeni spacerowicze/opiekunowie zapewniają bezpieczeństwo i spokój ducha.
-   **Elastyczność** - możliwość rezerwacji spacerów/opieki w ciągu kilku godzin od zgłoszenia zapotrzebowania. Możliwość
    dostosowania rodzaju i długości usługi.
-   **Przystępność cenowa** - konkurencyjne ceny w porównaniu do tradycyjnych usług dla psów. Zniżki przy rezerwacji na
    większą skalę.

**Strumienie przychodów:**

-   Opłaty za usługę - procent pobierany od każdej rezerwacji zarówno od spacerowicza/opiekuna, jak i właściciela
    zwierzęcia.
-   Opłaty za wygodę - niewielkie opłaty za szybsze rezerwacje w ciągu 24 godzin lub niestandardowe żądania.
-   Napiwki - opcjonalne napiwki, które właściciele mogą dodać za wyjątkową usługę.

**Kluczowe działania:**

-   Rekrutacja i wdrażanie lokalnych spacerowiczów, opiekunów, groomerów, trenerów.
-   Przeprowadzanie kontroli pod kątem karalności usługodawców.
-   Zarządzanie rezerwacjami i planowanie poprzez platformę.
-   Marketing i pozyskiwanie klientów.

**Kluczowe zasoby:**

-   Spacerowicze z psami, opiekunowie, groomerzy, trenerzy.
-   Aplikacja mobilna i platforma internetowa ułatwiające rezerwacje.
-   Zespół obsługi klienta do obsługi problemów i skarg.

**Kluczowe partnerstwa:**

-   Przychodnie weterynaryjne - partnerstwa marketingowe i porady dotyczące opieki nad zwierzętami.
-   Sprzedawcy akcesoriów dla zwierząt - możliwości promocji krzyżowej.
-   Schroniska i organizacje ratujące zwierzęta - potencjalna promocja adopcji.

**Struktura kosztów:**

-   Rozwój i utrzymanie platformy i aplikacji.
-   Rekrutacja, sprawdzanie i wdrażanie usługodawców.
-   Polisy ubezpieczeniowe obejmujące spacerowiczów z psami.
-   Koszty marketingu i pozyskiwania klientów.
-   Wynagrodzenia personelu, np. obsługi klienta.

**Relacje z klientami:**

-   Interakcja bezpośrednia – konieczność rozwiązywania problemów i skarg klientów.
-   Komunikacja zdalna – kontakt z klientami za pośrednictwem wiadomości e-mail i czatu na żywo poprzez aplikację.
-   Marketing i promocje - komunikowanie się z klientami na temat nowych ofert i promocji.
-   Prowadzenie ankiety satysfakcji klienta - zbieranie informacji zwrotnych od klientów na temat usług i wprowadzanie
    ulepszeń w oparciu o ich opinie.

**Kanały dystrybucji:**

-   Aplikacja mobilna - główne narzędzie rezerwacji usług i komunikacji między właścicielami psów a opiekunami.
-   Strona internetowa - zapewnia informacje o usługach, zarówno dla potencjalnych opiekunów, jak i właścicieli psów.
-   Media społecznościowe - pomocne w marketingu i promocji ofert.
-   E-mail marketing - służy do wysłania newsletterów, promocji i ogólnych aktualizacji do klientów.

**Segmenty klientów:**

-   Właściciele psów, którzy często są poza domem z powodu pracy lub innych zobowiązań.
-   Właściciele zwierząt szukający tymczasowej opieki, np. podczas podróży.
-   Osoby starsze lub niepełnosprawne, które mogą potrzebować pomocy w opiece nad zwierzętami.
-   Rozpocząć współpracę z klientami biznesowymi, takimi jak biura, które oferują usługi opieki nad zwierzętami jako część
    pakietu świadczeń dla pracowników.

Ten model biznesowy prezentuje holistyczne podejście do biznesu w zakresie opieki nad zwierzętami, w którym rozważane są
wszystkie aspekty działalności, od propozycji wartości po strukturę kosztów. Przemyślane strategie złożone w taki sposób
pomagają w efektywnym zarządzaniu organizacją i prowadzeniu rentownego biznesu. W zależności od konkretnego biznesu,
niektóre z tych elementów mogą być bardziej lub mniej istotne.

## Opis usługi

Nasza usługa na żądanie to nowoczesne rozwiązanie dla miłośników zwierząt, które łączy właścicieli psów ze
spacerowiczami i opiekunami w swojej lokalnej okolicy. Dzięki przyjaznej dla użytkownika aplikacji, właściciele psów
mogą na bieżąco zlecać spacery, zabawy, karmienie - wszystko, czego potrzebuje ich pupile, kiedy tylko pojawi się taka
potrzeba.

Aplikacja jest łatwa w użyciu i pozwala użytkownikom przeglądać profile dostępnych opiekunów, czytać recenzje, zobaczyć
zdjęcia oraz jest możliwe śledzenie spacerów swojego psa na żywo. Można również wystawiać oceny i dzielić się
doświadczeniami z innymi właścicielami zwierząt.

Nasi opiekunowie to przede wszystkim miłośnicy zwierząt, których sprawdzamy zarówno pod kątem kompetencji, jak i
nieposzlakowanej przeszłości, aby zapewnić najwyższą jakość usług. Oferują pełen zakres usług- od krótkich spacerów po
długie zabawy na świeżym powietrzu, a nawet przyspieszone nauki najważniejszych komend dla psów.

Oferujemy również opcję elastycznego harmonogramu, dzięki czemu właściciele zwierząt mogą dostosować usługi do swoich
konkretnych potrzeb, czy to na godziny, dni, tygodnie czy dłużej.

Nasze usługi są dostępne 24 godziny na dobę, 7 dni w tygodniu, aby zapewnić pomoc tam, gdzie jest najbardziej potrzebna.
Bez względu na to, czy jesteś poza miastem na wakacjach, czy po prostu masz zaplanowane późne wyjście, nasza usługa jest
zawsze gotowa, aby zapewnić, że twoje zwierzę jest zadbane, szczęśliwe i zdrowe.

O naszej usłudze można myśleć jak o społeczności, która skupia miłośników zwierząt. Możemy nie tylko pomóc Ci znaleźć
najlepszego opiekuna dla Twojego pupila, ale również dajemy Ci szansę na nawiązanie nowych znajomości wśród innych
właścicieli zwierząt. Wspólnie tworzymy przestrzeń, w której każde zwierzę jest traktowane z miłością i szacunkiem.

## Slogany

1. "Twojemu Pupilowi na Pewno się Spodoba!"
2. "Niech Twój Pies Doświadczy Przygody Każdego Dnia!"
3. "Dbamy o Twojego Psa, Gdy Ty Nie Możesz!"
4. "Zabawa, Spacer, Opieka - My Zadbamy o Twój Komfort i Komfort Twojego Zwierzaka!"
5. "Radosne Psy, Szczęśliwi Właściciele!"
6. "Wsparcie dla Twojego Zwierzaka 24/7!"
7. "Spaceruj z Nami, dla Szczęścia Twojego Pupila!"
8. "Opieka nad Zwierzętami na Wyciągnięcie Ręki!"
9. "Twoje Zwierzę W Dobrych Rękach, Kiedykolwiek Będziesz Potrzebował!"
10. "Z Nami - Każdy Dzień Twojego Zwierzaka to Przygoda!"


## Preambuła

**Wprowadzenie**
W dzisiejszym zabieganym świecie, gdzie praca i inne zobowiązania często odciągają nas od naszych ukochanych pupili, usługa opieki nad zwierzętami na żądanie staje się niezbędna. Właściciele psów zasługują na spokój ducha wiedząc, że ich czworonożni przyjaciele otrzymują najlepszą możliwą opiekę, nawet gdy oni sami nie mogą być obecni.
To właśnie ta potrzeba zainspirowała nas do stworzenia innowacyjnej platformy, która łączy troskliwych i doświadczonych opiekunów zwierząt z właścicielami psów potrzebującymi wygodnej, niezawodnej i dostosowanej do ich potrzeb usługi opieki. Naszym celem jest nie tylko zapewnienie najwyższej jakości opieki dla psów, ale także zbudowanie społeczności, w której miłośnicy zwierząt mogą się łączyć, dzielić doświadczeniami i wspierać nawzajem.
Rozumiemy wyjątkową więź między właścicielami a ich psami i dokładamy wszelkich starań, aby zapewnić spersonalizowane doświadczenie, które odzwierciedla tę więź. Nasi starannie dobrani opiekunowie traktują każdego psa tak, jakby był ich własnym, zapewniając mu miłość, uwagę i stymulację, na jaką zasługuje.
Dzięki naszej przyjaznej dla użytkownika aplikacji, rezerwacja opieki nad psem jest tak prosta, jak kilka dotknięć ekranu. Właściciele mogą przeglądać profile opiekunów, wybierać usługi dostosowane do potrzeb ich psa i śledzić aktywność swojego pupila w czasie rzeczywistym, gdziekolwiek są.
Dołącz do nas w naszej misji, aby uczynić opiekę nad zwierzętami bardziej dostępną, wygodną i osobistą niż kiedykolwiek wcześniej. Z naszą usługą na żądanie, Twój pies będzie szczęśliwy, zdrowy i kochany - a Ty zyskasz spokój ducha, na jaki zasługujesz.

## Rozwinięcie Usługi i Plany na Przyszłość 

#### Ciągłe Doskonalenie Usług

W miarę rozwoju naszej firmy, nieustannie poszukujemy sposobów na ulepszenie i rozszerzenie naszych usług. Słuchamy uważnie opinii naszych klientów i opiekunów, wykorzystując ich cenne spostrzeżenia do udoskonalania każdego aspektu doświadczenia użytkownika. Naszym celem jest nie tylko spełnianie oczekiwań, ale ich przekraczanie, zapewniając wyjątkową opiekę i obsługę klienta, która wyróżnia nas na tle konkurencji.

#### Rozszerzanie Zasięgu Geograficznego

Choć zaczynamy lokalnie, naszą ambicją jest rozszerzenie usług na nowe miasta i regiony. Pragniemy, aby jak najwięcej właścicieli psów i ich pupili mogło skorzystać z wygody i spokoju ducha, jakie zapewnia nasza platforma. W miarę powiększania się naszej sieci opiekunów, będziemy strategicznie wchodzić na nowe rynki, dostosowując nasze usługi do unikalnych potrzeb i preferencji każdej społeczności.

#### Innowacyjne Funkcje Aplikacji

Nasza aplikacja jest sercem naszej usługi i jesteśmy zaangażowani w jej ciągłe ulepszanie. Planujemy wprowadzić szereg nowych funkcji, takich jak spersonalizowane zalecenia opiekunów w oparciu o rasę, temperament i poziom energii psa, a także rozszerzone opcje rezerwacji dla powtarzających się lub długoterminowych zleceń. Dodatkowo, zamierzamy zintegrować interaktywne elementy, takie jak wyzwania treningowe i kamienie milowe w rozwoju psa, aby wzmocnić więź między właścicielami psów a ich pupilami.

#### Wprowadzenie Opaski Bluetooth Low Energy dla Psów

Jednym z naszych najbardziej ekscytujących planów na przyszłość jest zaprojektowanie i wprowadzenie innowacyjnej opaski Bluetooth Low Energy (BLE) dla psów, która będzie synchronizować się bezproblemowo z naszą aplikacją. Ta inteligentna opaska nie tylko pozwoli opiekunom na śledzenie lokalizacji psa podczas spacerów, ale także będzie monitorować aktywność, wzorce snu i ogólny stan zdrowia zwierzęcia.

Dane zebrane przez opaskę będą analizowane przez nasze zaawansowane algorytmy, dostarczając właścicielom psów cennych informacji i spersonalizowanych zaleceń dotyczących dobrego samopoczucia ich pupili. W przypadku wykrycia jakichkolwiek niepokojących anomalii, aplikacja wyśle właścicielom powiadomienia, umożliwiając wczesną interwencję i potencjalnie ratując życie.

Co więcej, opaska BLE umożliwi opiekunom jeszcze lepszą interakcję z psami podczas spacerów. Zintegrowane funkcje, takie jak wirtualne nagrody i interaktywne gry, wzmocnią więź między opiekunem a psem, sprawiając, że każdy spacer będzie radosnym i wzbogacającym doświadczeniem dla nich obu.

Wprowadzenie tej przełomowej technologii noszonej dla psów nie tylko podniesie poprzeczkę w branży opieki nad zwierzętami, ale także podkreśli nasze zaangażowanie w innowacyjność, dobrostan zwierząt i wygodę właścicieli psów. To kolejny krok w naszej misji rewolucjonizowania sposobu, w jaki ludzie opiekują się swoimi ukochanymi czworonożnymi przyjaciółmi.

#### Podsumowanie

W naszym dążeniu do zapewnienia najlepszej możliwej opieki nad zwierzętami, nieustannie poszukujemy możliwości innowacji, ekspansji i doskonalenia. Poprzez strategiczne rozszerzanie zasięgu geograficznego, ciągłe ulepszanie naszej aplikacji i przełomowe dodatki, takie jak opaska BLE dla psów, jesteśmy gotowi kształtować przyszłość opieki nad zwierzętami domowymi. 

Naszym ostatecznym celem jest stworzenie świata, w którym każdy pies otrzymuje miłość, uwagę i opiekę na jaką zasługuje, a każdy właściciel psa ma narzędzia i wsparcie potrzebne do zapewnienia swoim pupilom najlepszego możliwego życia. Razem, możemy uczynić tę wizję rzeczywistością.