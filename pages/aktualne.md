---
layout:       default
title:        Aktuálně
description:  Iniciativa pro spolupráci mezi městy na otevřeném fungování radnic, především na základě otevřeného software.
keywords:     transparence, otevřený, software, FOSS, města, obce
permalink:    /aktualne/
---

# Aktuálně

<div class="posts">
  {% for post in site.posts %}
    <article class="post">
    {% if page.image %}<img src="{{ page.image }}"/>{% endif %}
      <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

      <div class="entry">
        <span class="date">{{post.date | date: "%-d.%-m.%Y"}}</span> {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">dočíst  článek</a>
    </article>
  {% endfor %}
</div>
