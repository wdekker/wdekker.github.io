---
layout: default
title: Blog
permalink: /blog/
---

<section class="section">
  <h2>Blog</h2>
  <div class="card">
    <p>
      Thoughts on platform engineering, developer experience, innovation, and technology leadership.
      <a href="{{ '/feed.xml' | relative_url }}" class="rss-link">📡 RSS Feed</a>
    </p>
    
    {% if site.posts.size > 0 %}
    <div class="post-list">
      {% for post in site.posts %}
      <article class="post-preview">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
          {% if post.excerpt %}
          <span class="reading-time">• ~{{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
          {% endif %}
        </div>
        {% if post.excerpt %}
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
        {% endif %}
      </article>
      {% endfor %}
    </div>
    {% else %}
    <div class="empty-state">
      <p>No posts yet. Check back soon for insights on platform engineering and innovation!</p>
    </div>
    {% endif %}
  </div>
</section>
