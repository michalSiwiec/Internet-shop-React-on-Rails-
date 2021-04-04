# README
KauflandOnRails

1) Zasada działania interfejsu

	Aplikacja działa w trybie użytkownika oraz admina.
Użytkownik początkowo odwiedzając aplikację jest przekierowywany na główną jej część.
Domyślnie użytkownik nie jest zalogowany, natomiast interfejs pozwala mu na to.
Zalogowany użytkownik może dodać opinię o serwise która zostanie przypisana do jego konta.

Aplikacja umożliwia również składanie zamówień zarówno dla użytkowników posiadających konto i zalogowanych jak i użytkowników którzy nie chcą zakładać konta. W sytuacji gdy użytkownik zaloguj się do serwisu nie musi wypełniać formularza – zostanie on automatycznie wypełniony danymi z jego konta w przeciwieństwie do nie zalogowanego użytkownika. 

Aby zamówienie mogło zostać zrealizowane należy dodać przynajmniej jeden produkt do koszyka, w późniejszym etapie przy podsumowaniu koszyka możliwa jest edycja ilości produktu lub usunięcie go całkowite z koszyka.

Po założeniu konta lub złożeniu zamówienia do użytkownika zostaje wysłany email wraz z odpowiednią informacją.

Aby dostać się do panelu administratora należy usunąć część ścieżki /home/... i zamienić ją na /admin. Po przejściu pod ten adres zalogować się z danymi min:

login: michsiw439
hasło 1234

Aby zalogować się do serwisu jako jeden z wielu użytkowników można użyć danych:

login: michsiw439
hasło: 1234

2) Opis użytych technologi

Interfejs użytkownika został napisany z użyciem biblioteki React, w którym zamiast zwykłego JavaScriptu używam TypeScript, do zarządzania stanem aplikacji używam zarówno  technologi Redux oraz zwykłego Reacta. Użycie Reduxa w projekcie nie ma wielkiego uzasadnienia, został od zastosowany w celach naukowych. 

Do wystylizowania aplikacji użyto preprocesora Sass, a do uzyskania efektu responsywności media-queries.

Jako bazy danych użyłem PostgreSQL, a do stworzenia strony back-endowej frameworka RubyOnRails. Użytkownik komunikuje się z bazą danych za pomocą zapytań do  API (metoda fetch) które są dopasowywane do odpowiednich akcji w kontrolerach, dzięki temu mamy możliwość pobierania, dodawania, edycji i usuwania odpowiednich danych. 


1) Problem with keys
6) Check if emails work
7) Style into admin panel
8) Regex
9) My Routing works fine with BrowserRouter but not with Router (and history) - but both approachs don't solve my problem with arrow back
10) Stars with opinions
11) I'm able to submit order with hollow fields xD
12) Problem with Window after do order (transmit params to URL)
13) Better css and html structure for opinions (headerr and button in the same div)