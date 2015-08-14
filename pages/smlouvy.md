---
layout:       default
title:        Projekt Otevřené smlouvy
description:  Projekt k vytvoření registru smluv pro městské samosprávy
permalink:    /projekty/smlouvy/
id:           autocircles
---

Projekt Otevřené smlouvy
========================

*Tento dokument shrnuje jeden z navrhovaných projektů, který by mohla uskutečnenit Otevřená města. Vyřešila by se tím poptávka pro funkčním a
nezávislém registru městských smluv.*

## Cíle projektu

Vytvořit otevřenou platformu pro zveřejňování smluv městy a dalšími institucemi.
Bude zřízena centrální databáze smluv, portál pro uživatele a rozhraní pro libovolné stávající systémy.

## Proč ano?

1. Pro veřejnost vznikne uživatelsky přívětivý portál, s rozhraním otevřených dat pro nadstavbové aplikace.
2. Zveřejňování ve standardizovaném formátu oslabí monopol stávajících dodavatelů IT, vytvoří tlak na kvalitnější interní evidenci smluv.
3. Sestavy smluv a jejich plnění se budou automaticky propisovat na web města.
4. Pomocí registru půjde snadno sledovat i podřízené organizace (příspěvkové organizace, městské firmy apod.)
5. Systém umožní i lepší kontrolu zevnitř ₋ zastupitelé budou mít přístup k smlouvám a plnění takřka v reálném čase.
6. Povinnost zveřejňovat v státním registru časem pravděpodobně vznikne, toto je však příležitost začít zveřejňovat už dříve, a výrazně lépe. Přenos smluv mezi oběma registry bude realizován automaticky, aby nedocházelo k zbytečným nákladům.

Návrh se doplňuje se současným i plánovaným státním registrem smluv, bude však informačně bohatší a přístupnější veřejnosti.

V ostrém provozu bude první verze 6 měsíců od schválení projektu, s náklady nepřevyšujícími 1 mil. Kč.

Projekt bude moci realizovat Datlab s.r.o., Centrum aplikované ekonomie, o.s. a Oživení, o. s. (např. vsechnyzakazky.cz, bezkorupce.cz, zindex.cz)

## O registru

Projekt předkládají sdružení Centrum aplikované ekonomie, o.s. a Oživení, o.s. jako návrh, který mohou realizovat pro koalici měst. Projekt má poskytnout robustní řešení pro poskytování informací občanům, a zároveň přispět k standardizaci a levnějšímu dlouhodobému vývoji interních evidencí.

Projekt není v kolizi s připravovaným ani současným státním registrem smluv, naopak navrhuje takové řešení, které v stávající situaci umožní plynulý přechod z uveřejňování v současném registru včetně migrace dat. Oproti chystanému státnímu registru (pokud se legislativní proces úspěšně dovrší) bude významně širší informačně bohatší ₋ například o evidenci plnění, smluvních lhůt nebo dokumentů v platném znění. Umožní tím pádem i mnohem lepší poskytování datasetů otevřených dat.

## Architektura systému

Systém se sestává z několika modulů, soustředěných kolem jádra ₋ centrálního repozitáře evidujícího dokumenty. Tato architektura jednak umožňuje postupný vývoj a zprovozňování dílčích částí, dále zbytečně nenutí uživatele k využívání jednotného software ₋ ať pro zveřejňování smluv, nebo naopak jejich zobrazování na webu či další práci s nimi.

## Struktura systému

*Systém se sestává z následujících součástí:*

1. **Repozitář dokumentů** (dále jen **„Repozitář“**) představuje jádro systému,
   evidující dokumenty ₋ smlouvy, dodatky, přílohy (volitelně další typy dokumentů) a metadata. Obsahuje strojové rozhraní pro:
     * Publikaci dat (z externích systémů)
     * Získávání dat (všech dosud publikovaných)

   Repozitář tedy nemá “lidské” rozhraní, na vstupu i výstupu předpokládá softwarového klienta, mezi které se budou řadit i následující moduly. Bude mít dobře zdokumentované rozhraní, nad kterým mohou být stavěny i další nástroje.

   Součástí Repozitáře bude i evidence uživatelů (resp. uživatelských systémů ₋ např. evidence smluv konkrétního města), sloužící k jejich autentifikaci. Základem pro tuto evidenci bude Seznam orgánů veřejné moci, zejména obsažených elektronických podatelen a datových schránek, které budou použity pro autentifikaci.

2. Publikační nástroj – pro subjekty, které nebudou publikaci dokumentů řešit
   vlastním softwarem (Např. nemají evidenci smluv vůbec softwarově řešenu, nebo poskytovatel jejich řešení bude mít problém s propojením smluv a následného plnění) je dostupný jednoduchý nástroj pro ruční publikaci a správu publikovaných dokumentů.

3. Nástroj pro migraci z [Portálu veřejné správy](http://portal.gov.cz/portal/rejstriky/ogd/x-registr-smluv.html) (stávající registr smluv,
   pomocí kterého některé samosprávy již nyní své smlouvy zveřejňují) ₋ bude automaticky přenášet všechny smlouvy a další dokumenty zde uveřejněné do Repozitáře. Díky tomuto nástroji mohou zájemci publikovat smlouvy už nyní (i když jen s omezenými metadaty podporovanými PVS). Uživatel tak najde všechny zveřejněné smlouvy na jednom místě, nehledě na původním způsobu uveřejnění.

4. Prezentační portál – bude veřejnosti uživatelsky přívětivě poskytovat data z
   Repozitáře (přehled smluv za subjekt, vyhledávání, sdílení, filtrace apod). Bude rovněž obsahovat rozhraní pro jednoduché zobrazení specifického výběru smluv na stránkách města ₋ např. nejnovějších smluv města a jeho podřízených organizací.


## Harmonogram implementace

|Měsíc|Aktivita|Výstup|Počet pracovních dní|
|-----|------|--------------------|---|
|1.|Specifikace standardu|Datový standard pro evidenci smluv|40|
|2.-4.|Vývoj repozitáře, sběr dat pro autentifikaci|Funkční repozitář s dokumentací API, připravený pro testování třetími stranami|90|
|5.|Vývoj migrace z PVS, testování API s vývojáři třetích stran|Do repozitáře jsou přenesena data z PVS, je odzkoušen pro použití třetími stranami|30 (+ externisté)|
|5.-6.|Vývoj Prezentačního portálu|Funkční portál pro veřejnost, který bude obsahovat přinejmenším smlouvy z PVS|60|
|6.-8.|Vývoj Publikačního nástroje|Publikační nástroj, s pomocí kterého lze zveřejnit všechny položky standardu, nejméně v kvalitě B|60|

## Náklady

*Náklady vývoje se odrážejí od výše zmíněných náročností.*

|Položka|Jednotky|Celkem|
|-------|--------|------|
|Vývoj navržené architektury|220 pracovních dní|880.000 Kč (jednorázově)|
|Provoz včetně administrace|4 MD + 20.000 Kč hosting|36.000 Kč (měsíčně)|

Měsíční náklady na provoz mohou růst v řádu až menších desítek tisíc, v závislosti na potřebné úložné kapacitě, zejména v případě, že bude připuštěn nadměrně velký formát PDF bez strojové čitelnosti.

## Reference CAE, Datlab

*Relevantní pro projekt Otevřených smluv*

Centrum aplikované ekonomie, o. s. (dále jen „CAE“) a Datlab, s.r.o. (dále jen „Datlab“) jsou sesterské organizace s vývojářským týmem tvořeným stejnými lidmi. CAE je určena pro akademické projekty s veřejnými daty, Datlab pro komerční vývoj aplikací. S ohledem na čitelnější administraci a ručení lze považovat za vhodnější za vhodnější, aby projekt formálně realizoval Datlab (ale není to podmínkou).

### Vývoj webových aplikací

1. VsechnyZakazky.cz (pro Oživení, o. s. ₋ návrh, vývoj, provoz) – aplikace
   umožňující přehledně vyhledávat nad cca 130.000 veřejnými zakázkami vypsanými od roku 2006.
2. PolitickeFinance.cz (pro AV ČR, dnes CAE ₋ návrh, vývoj, provoz) – databáze
   dárců politickým stranám
3. zIndex.cz (pro CAE ₋ návrh, vývoj, provoz) – web srovnávající zadávací praxi
   měst, kombinující data z osmi zdrojů
4. zInfo.cz (pro EEIP, a.s. – návrh, vývoj, provoz) – nástroj pro transparentní
   uveřejňování dat městy. Obsahuje certifikovaný profil zadavatele, modul pro uveřejňování nabídek nemovitého majetku, nástroj pro validaci dat na (libovolném) profilu zadavatele.

Návštěvnost uvedených serverů se pohybuje mezi 1.000 a 5.000 uživateli měsíčně, vše je provozováno na vlastních serverech hostovaných u renomované společnosti Hetzner. Použité technologie: Java, Python (Django Framework), PHP (Nette Framework), PostgreSQL, Apache, Debian Linux.

### Open data a standardy

1. Open data API pro VsechnyZakazky.cz, PolitickeFinance.cz (všechny návrh, vývoj, provoz), databáze nabídek Vasmajetek.cz (návrh, vývoj)
2. Rozšířený datový standard veřejné zakázky pro profily zadavatele (pro Ministerstvo pro místní rozvoj, EEIP a.s. – návrh, vývoj standardu)
3. Validační nástroj pro profily zadavatele (pro EEIP, a.s., návrh, vývoj, provoz) – nástroj pro kontrolu správnosti a úplnosti otevřených dat zveřejněných na profilech zadavatele, nyní dostupný na zInfo.cz
4. Backend Tender.Sme.sk (pro Transparency International Slovensko ₋ vývoj, provoz) řešení pro sběr a uveřejnění zakázek v pokročilém API, sloužícím jako podklad pro prezentační vrstvu

### Datové migrace (relevantní pro napojení s registrem Ministerstva vnitra)

1. Těžba dat do vlastní databáze (vestnikverejnychzakazek.cz , uvo.gov.sk – obojí veřejné zakzáky, portal.gov.cz – seznam datových schránek, Obchodní rejstřík, Insolvenční rejstřík, databáze ERÚ, CENIA, ÚOHS aj.)
2. Migrace nabídek VasMajetek.cz, zInfo.cz na reality.cz (pro Vasmajetek.cz ₋ návrh, implementace)

[Datový standard pro registr smluv](http://www.bezkorupce.cz/wp-content/uploads/2014/08/Datový-standard-pro-registr-smluv1.pdf)
