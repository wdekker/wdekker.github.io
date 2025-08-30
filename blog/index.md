---
layout: default
title: Blog
permalink: /blog/
---

<section class="section">
  <h2>Blog</h2>
  <div class="card">
    <ul>
      {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-meta"> — {{ post.date | date: "%B %d, %Y" }}</span>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
