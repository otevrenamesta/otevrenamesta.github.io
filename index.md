---
layout: default
title: Dobrovolný svazek
description: Dobrovolný svazek Otevřená města prosazuje, koordinuje a financuje zavádění, vývoj a údržbu svobodného software pro výkonnou, hospodárnou a bezpečnou veřejnou správu
keywords: FOSS, Opensource, verejna zprava
---

<h1 class="mvl">Dobrovolný svazek Otevřená města</h1>

<p>
Projekt je v procesu zakládání.
Řeší se <a href="/stanovy.html">stanovy</a> a jiné organizačně právní detaily.
</p>

<div class="row">

	<div class="large-4 columns">
		<h3><i class="fa fa-users"></i> Kdo?</h3>
		<p>
			Města a obce, které mají na rozhodujících místech lidi, kteří pochopily a rozumí výhodám
				<a href="http://cs.wikipedia.org/wiki/Otev%C5%99en%C3%BD_software">opensource software</a>.
			Univerzity<i class="fa fa-university"></i>, které chtějí zapojit své studenty do praxe.
			Jednotlivci, kteří umí a chtějí podpořit dobrou věc.
			Ti všichni chtějí společně podporovat a tvořit <i class="fa fa-heart-o"></i> <a href="http://git-">opensource software</a>.
		</p>
	</div>

	<div class="large-4 columns">
		<h3><i class="fa fa-unlock-alt"></i> Proč?</h3>
		<p>
			Svazek prosazuje, koordinuje a financuje zavádění, vývoj a údržbu svobodného software
			a dalších otevřených technologií pro výkonnou, hospodárnou a bezpečnou veřejnou správu.
		</p>
	</div>

	<div class="large-4 columns">
		<h3><i class="fa fa-anchor"></i> Kde?</h3>
		<p>
			Veškeré výstupy (i zdrojové kodý) nalezneš <a href="https://github.com/otevrenamesta/"><i class="fa fa-github"></i> našem githubu</a>.
			Každý celek má svůj repositář.
			Vše je verzovnáno <a href="http://cs.wikipedia.org/wiki/Git">systémem <i class="fa fa-git"></i></a>.
		</p>

		<p>
			I ty múžeš pomoci!
			Každý <i class="fa fa-code-fork"></i>
			<a href="http://git-scm.com/book/cs/v1/Distribuovan%C3%BD-charakter-syst%C3%A9mu-Git-P%C5%99isp%C3%ADv%C3%A1n%C3%AD-do-projektu">pull request</a> je vítán.
		</p>

	</div>

</div>

<div class="row"><a name="podporuji"></a>
	<div class="medium-12 large-12 small-centered column">

		<h3>Svoji podporu přislíbily</h3>

		<div class="row">
			<div class="large-2 small-4 columns">
				<a target="_blank" href="http://www.praha.eu/">
					<img src="http://foto.prahainfo.cz/Logo.jpg" alt="Praha">
				</a>
			</div>
			<div class="large-4 small-8 columns">
				<a target="_blank" href="https://www.brno.cz">
					<img src="http://www.topr-klima.cz/_admin/files/userfiles/images/logo_brno.jpg" alt="Brno">
				</a>
			</div>
			<div class="large-2 small-4 columns">
				<a target="_blank" href="http://www.muml.cz/">
					<img src="http://mlok.wz.cz/trojuhelnik/ml-logomain.png" alt="Mariánské lázně">
				</a>
			</div>
		</div>

		<h4><a href="/stanovy.html"><i class="fa fa-user-plus"></i> Jak se přidat</a> najdeš ve stanovách.</h4>

	</div>
</div>

<h3>Novinky</h3>
<div class="row">
	<div class="medium-12 large-12 small-centered column">
		{% for post in site.posts limit:3 %}
		<a href="{{ post.url }}">{{ post.title }}</a>
		{% endfor %}
	</div>
</div>
