# KAJ
Client applications in JavaScript , summer semester

## Popis projektu
Projekt je semestrální prácí předmětu Vývoj klientských aplikací v JS, ČVUT FEL SIT 2018.
Poslední dobou kryptoměny vstoupily do masového povědomí. Mluví se o nich všude. Proto jsem rozhodla vybrat této téma pro svoji semestrální práci KAJ.

## Cíl projektu
Vytvoření funkční stránky s kryptoměnami, která splňuje všechny požadavky předmětu.

## Popis funkčnosti
Aplikace je napsána pomocí HTML, CSS a Javascriptu (jQuery). Není žádný server a hosting, běží lokálně.
Pracuju s kryptoměnami, které beru z API (coinmarketcap), data se obnovují každé 5 minut. Pokud není připojení, použivám statická data.

## Základní funkcionalita aplikace
1) Navigační menu. Název, odkazy na hlavní stránku a tabulku, logo. Je to jednostránková aplikace, takže používám History API pro funkční historii. Logo je nekresleno pomocí SVG v HTML (ručně nakreslený skoro bitcoin).
2) Marquee (běžicí řádek). Je udělána pomocí CSS animace a transformace. Obsahuje 5 prvních nejpopularnějších měn a jejich cenu v dolarech.
3) Zjištění nejpopularnější kryptoměny podle polohy. Po souhlasu uživatele se vypíše jeho geolokace a kryptoměna. Pomocí Geolocation API.
4) Podcast na téma kryptoměny. HTML Audio prvek.
5) Konverter měn. 3 kryptoměny a dollar.
6) Pie chart. Procenta ceny měn. Práce s SVG JS.

### HTML
* Validita. Stránka je validní (podle validator.w3.org)
* Cross-browser kompatibility. Zkoušela jsem všechny moderní prohlížeče (Chrome (66), Mozilla Firefox (60.0.1), Opera(53), Microsoft Edge).
* Semantické značky. Používala jsem nové HTML značky.
* Grafika SVG. Logo v navbaru. Circle, line, path.
* Média – Audio. Podcast na stránce.
* Formulářové prvky. Je validace, placeholder na inputech.
* Offline aplikace. Je možné použití aplikace bez připojení. Omezení na geolokace. Cache manifest.

### CSS
* Pokročilé selektory. Používala jsem pseudotřídy a kombinátory.
* Vendor prefixy. Především na animacích a transformacích.
* CSS Transformace. Marquee, pie chart, bitcoin svg logo.
* CSS transitions/animations. Pie chart, marquee, bitcoin svg logo.
* Media queries. Pro kontrolu designu na mobilních zařízeních jsem přidala do prohlížeče plugin Responsive Web Design Tester. Aplikace se nerozpadá.


### JS
* OOP Přístup. Je dědičnost, jsou prototypy a jmenné prostory.
* JS framework/knihovna. Pracuju v jQuery.
* Pokročilé JS API. Geolocation API pro zjištění polohy uživatele.
* Funkční historie. Funguje routování a posun tlačítek zpět/vpřed.
* Ovládání médií. Funguje na pie chartu. Při kliknutí na nějaké tlačítko, přehrává se zvuk. Zvuk je vyroben pomocí oscilátoru (Web Audio API).
* Offline aplikace. JS API pro zjištění stavu (navigator.onLine).
* JS práce s SVG. Pie chart.




