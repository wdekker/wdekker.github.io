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

<style>
.rss-link {
  float: right;
  font-size: var(--text-sm);
  color: var(--muted);
  text-decoration: none;
  margin-left: var(--space-4);
}

.rss-link:hover {
  color: var(--link);
}

.post-list {
  margin-top: var(--space-6);
}

.post-preview {
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--border);
}

.post-preview:last-child {
  border-bottom: none;
}

.post-preview h3 {
  margin: 0 0 var(--space-2);
  font-size: var(--text-xl);
  font-weight: 600;
}

.post-preview h3 a {
  text-decoration: none;
  color: var(--text);
}

.post-preview h3 a:hover {
  color: var(--link);
}

.post-preview .post-meta {
  margin-bottom: var(--space-3);
  font-size: var(--text-sm);
  color: var(--muted);
}

.post-excerpt {
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}

.empty-state {
  text-align: center;
  padding: var(--space-8) 0;
  color: var(--muted);
}

@media (max-width: 768px) {
  .rss-link {
    float: none;
    display: block;
    margin-top: var(--space-2);
    margin-left: 0;
  }
  
  .post-preview h3 {
    font-size: var(--text-lg);
  }
}
</style>
