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
