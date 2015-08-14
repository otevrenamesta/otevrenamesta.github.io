---
layout:       default
title:        Open source pro města
description:  open source, FLOSS, svobodný software
permalink:    /open-source/
---

Open source pro města
=====================

Open source software, tedy software s otevřeným zdrojovým kódem, je pojem úzce spjatý s problematikou vývoje a údržby software. Proto jsme se rozhodli sepsat pár základních poznatků, abychom napomohli orientaci i laiků.

## Slovníček

**Zdrojový kód:** Tento kód je text počítačového programu, jak ho pomocí jednotlivých příkazů píše programátor. Pokud má být ve fungování počítačového programu něco změněno (včetně některých typů běžných údržeb), tak ho potřebujeme. U komerčně dostupného software je zdrojový kód často předmětem obchodního tajemství. Bez zdrojového kódu nelze změnit sebemenší funkcionalitu (pokud to software neumožňuje např. pomocí modulů), čímž se stává uživatel programu na jeho dodavateli závislým. Pokud je zdrojový kód zveřejněn, mluvíme o tzv. open source software.

**Program/aplikace/binární soubor/spustitelný soubor:** Zdrojovému kódu rozumí programátor, zatímco počítač rozumí jedničkám a nulám, velmi jednoduchým instrukcím pro procesor. Tyto instrukce jsou pak spustitelné počítačové programy (aplikace). Procesor je srdce počítače, kde počítač zpracovává početní úlohy a řeší problémy převedené do strojového kódu, kterému rozumí. To je to, co běžně používáme, když např. spustíme internetový prohlížeč. Uživatel nepotřebuje zdrojový kód k běžnému používání, ale programátor ho může potřebovat, pokud chce provést změny (např. uvést program do souladu s novou legislativou).

**Licence**: Aby směl uživatel počítačový program legálně používat, musí mít platnou licenci od výrobce počítačového programu. Licence je souhlas toho, kdo má k programu copyright. Licence může být poskytnuta za úplatu či bezplatně. Licence se může vztahovat i na zdrojový kód. Pokud licence umožňuje bezplatné šíření a změny zdrojového kódu, mluvíme o tzv. svobodném softare. Pro jednoduchost zde pojmy svobodného software a open source ztotožňujeme.

**Maintenance** (servisní podpora): Během prodeje programu v konkrétní verzi je možné jej prodávat i také v řadě menších verzí. Dodávání drobných oprav se nazývá maintenance. Jedná se např. o opravu k novému operačnímu systému, či změna výše DPH zabudované v programu (relativně jednoduchá změna, bez které je program nepoužitelný). To znamená drobné opravy ano, velké změny (nové funkce) ne.
Také open source software má často komerční dodavatele, kteří zaručují jeho funkčnost a poskytují k němu podporu. Rozdíl proti proprietárnímu software spočívá v tom, že jsou placeni z maintenance a nikoliv z licence a díky otevřenost kódu nevzniká závislost na jednom dodavateli.


## Obchodní modely

### Dnes obvyklý model

1. Autor (programátor) postupně píše počítačový program. Jedná o soustavný proces, kdy stále vytváří nové funkcionality, vylepšuje vzhled etc. Zde je důležité říci také, že původní autor může zkrachovat a je-li počítačový program chráněn autorskými právy, nikdo nemusí mít možnost produkt dále rozvíjet.

2. Autor má nasmlouvané smluvní partnery (resellery), kteří poskytují podporu. Základní podporu (jak software nainstalovat nebo používat) zvládnou reselleři sami, ale pro větší změny musí kontaktovat autora, který jediný má zdrojový kód.

3. Uživatel vybere poskytovatele podpory ve veřejné soutěži ze smluvních partnerů. Tu poté poskytuje vítěz.

Pro města je tento princip postavený tak trochu na hlavu. A to proto, že velkou část nákladů vynaložil autor a zůstává fixní. Jelikož on má jediný zdrojový kód, tak se vytrácí smysl soutěže – všichni mohou nabídnout stejnou, nebo podobnou cenu podpory. Šetří se potom jen na operátorech, kteří zvedají telefon a na marketingu (nadsázka).

#### Příklady

1. Společnost Marbes má smluvní partnery. Nicméně tito partneři jsou silně personálně provázáni. Právě na Marbes je vidět, že skutečná soutěž je potom jen iluzorní a de facto se jedná o kartel.

2. Společnost Gordic nemá smluvní partnery a prodává své produkty sama. Nicméně v segmentu účetnictví pro velké samosprávy nemá konkurenci. Jedná se o monopol.

### Open source model

**Open source:** Program, jehož zdrojový kód je veřejně dostupný. V ten moment má každý reseller stejné podmínky. Příklady takového software jsou: Mozilla Firefox, LibreOffice (bývalý OpenOffice), mnoho webových portálů (CMS) ₋ např. Joomla, WordPress, Drupal. Z větších enterprise aplikací můžeme zmínit třeba programovací jazyky (C, C++, C#, PHP, Python, Java), webový server Apache, či KnotDNS. Z open source vychází i velmi rozšířený operační systém Android pro mobilní telefony.

#### Rozšíření Open source

Faktem je, že open source se rozvíjí obrovským tempem, což lze shrnout do následujících údajů:

* **Superpočítače**. Z 500 nejvýkonnějších superpočítačů používá Linux 485. Pouze jeden používá Windows. Linux zde jednoznačně dominuje.
* **Cloudy**. Z velkých společností, které používají cloudy, běží 75 % na Linuxu a 23 % na Windows.
* **Web servery**. Na webových serverech Linux dominuje skoro 20 let. Open source servery Apache a nginx mají celkem 65 % podíl na trhu.
* **Mobilní telefony a tablety**. 84 % nových mobilních telefonů má operační systém Android, který je open source, druhý Apple má pouhých 12 %. Podobné rozložení je i u tabletů.[^clanek]

[^clanek]: Glyn Moody: [2015: Open Source Has Won, But It Isn't Finished](http://www.computerworlduk.com/blogs/open-enterprise/open-source-has-won-3592314/)

Velké firmy jako Google, Adobe, IBM uvolňují některé své projekty jako open source, aby se více rozšířily a získaly kolem sebe komunitu. V některých oblastech se stal Open source faktickým standardem, jak ukazuje následující graf:

![Procentuální tržní podíl open source u jednotlivých aplikací](/media/graf.png)
Procentuální tržní podíl open source u jednotlivých aplikací

#### Mýty o OpenSource

U Opensource se typicky uvádějí následující nevýhody:

* **Roztříštěnost:** Klasická vlastnost volného trhu, která jen dokazuje, že zde opravdu volný trh funguje. Přestože existují tisíce svobodných programů, prim hrají projekty, které se používají již velmi dlouho bez výraznějších změn (jsou stabilní). Nasazeny jsou v tisících případech; jedná se napřklad o webový server Apache či Red Hat Linux.

* **Pomalejší vývoj**: Vývoj je samozřejmě tak rychlý, jak rychlý je programátor. Nicméně Open source obecně netrpí potřebou dodržování přesných termínů, stále nových funkcionalit etc. Namísto toho se obvykle zaměřuje na dobrou funkčnost a dobrý kód.

* **Horší podpora:** Podpora je opět záležitostí nabídky na trhu. Dnes je podpora horší tam, kde software není rozšířený – stejně jako u proprietárního software. Ale např. podpora od společností Novell a Red Hat je rozhodně kvalitní, neboť je dobře rozšířena i v soukromém sektoru. Na tom je dobře vidět, že open source není záležitost amatérů, ale že na tomto principu fungují i velké a komerční firmy.

To, co bychom mohli považovat za slabosti, představuje pro veřejný sektor spíše výhody. Veřejný sektor nepotřebuje každý měsíc inovovat, nebo revolučně měnit rozhraní. Veřejný sektor naopak oceňuje stabilitu, nezávislost a možnost dokoupení dalších služeb. Veřejný sektor z principu nemůže mít strategické partnery, ale měl by se chovat tržně zcela neutrálně. A to nejlépe zajistí konkrétními menšími objednávkami na dané služby. Současná praxe přitom bývá zcela opačná: dochází k zadávání obřích zakázek, které vždy vyhrává jeden subjekt.

### Open source ve veřejném sektoru

Ve výsledku Open source ocení rovněž trh jako celek, který má následně rovné podmínky pro poskytování svých služeb. S veřejným sektorem se vzájemně potřebuje, bez něho může jen omezeně asistovat největším hráčům.

![Open source ve veřejném sektoru](/media/open-source.png)

Jak vyplývá z výše uvedené infografiky, veřejný sektor může již dnes používat open source software např. pro webové prohlížeče, servery, databáze, webové portály, portály pro otevřená data, virtualizaci, řízení projektů, nastavení identit apod.

Je jasné, že open source nevyřeší všechno, pořád je třeba hledat kvalitní software v dané oblasti pro veřejnou správu. Na druhou stranu veřejný sektor ocení klíčové **výhody open source**:

* stabilitu,
* konzervativnost,
* kvalitu,
* otevřenost,
* nezávislost,
* často i nižší náklady.
