---
layout: default
title: Speaking & Talks
---

<section class="section">
  <h2>Speaking & Talks</h2>
  <div class="card">
    <p>
      I enjoy sharing insights about platform engineering, developer experience, and innovation 
      through speaking engagements. Here's a collection of my talks and presentations over the years.
    </p>
  </div>
</section>

<section class="section">
  <h2>Recent Talks</h2>
  
  <div class="talk-item">
    <div class="card">
      <h3>Rabobank TechTalk – Platform Engineering at Scale</h3>
      <div class="talk-meta">
        <span class="talk-date">2023</span>
        <span class="talk-venue">Rabobank Internal</span>
      </div>
      <p>
        A conversation with Bart Leurs about building developer platforms for 8,000+ engineers, 
        covering Golden Paths, orchestration, and the human side of platform adoption.
      </p>
      <div class="talk-links">
        <a href="https://www.youtube.com/watch?v=cbFZjLJe8VI" class="btn primary">Watch Video</a>
      </div>
    </div>
  </div>

  <div class="talk-item">
    <div class="card">
      <h3>Death to DTAP or: Stop Worrying and Test in Production</h3>
      <div class="talk-meta">
        <span class="talk-date">DevCon 2019</span>
        <span class="talk-venue">Utrecht, Netherlands</span>
      </div>
      <p>
        Challenging traditional testing environments and exploring modern approaches to 
        production testing, feature flags, and continuous delivery practices.
      </p>
      <div class="talk-topics">
        <span class="topic">Testing Strategy</span>
        <span class="topic">DevOps</span>
        <span class="topic">Continuous Delivery</span>
        <span class="topic">Production Testing</span>
      </div>
      <div class="talk-links">
        <a href="https://www.youtube.com/watch?v=pj5sdyx9QpI" class="btn primary">Watch Video</a>
      </div>
    </div>
  </div>

  <div class="talk-item">
    <div class="card">
      <h3>The Fallacies of Distributed Computing</h3>
      <div class="talk-meta">
        <span class="talk-date">J-Fall 2016</span>
        <span class="talk-venue">Ede, Netherlands</span>
        <span class="talk-collab">with Bert Ertman</span>
      </div>
      <p>
        A deep dive into the classic distributed computing fallacies and how they apply 
        to modern microservices architectures, with practical lessons learned from real-world systems.
      </p>
      <div class="talk-topics">
        <span class="topic">Distributed Systems</span>
        <span class="topic">Architecture</span>
        <span class="topic">Microservices</span>
        <span class="topic">System Design</span>
      </div>
      <div class="talk-links">
        <a href="https://www.youtube.com/watch?v=IB57w8z7zgk" class="btn primary">Watch Video</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2>Speaking Topics</h2>
  <div class="card">
    <p>I regularly speak about the following topics and am available for conferences, meetups, and corporate events:</p>
    
    <div class="topics-grid">
      <div class="topic-area">
        <h4>🚀 Platform Engineering</h4>
        <ul>
          <li>Building developer platforms at scale</li>
          <li>Golden Paths and paved roads</li>
          <li>Internal Developer Portals (IDPs)</li>
          <li>Developer productivity metrics</li>
          <li>Platform adoption strategies</li>
        </ul>
      </div>
      
      <div class="topic-area">
        <h4>🏗️ Software Architecture</h4>
        <ul>
          <li>Distributed systems design</li>
          <li>Microservices patterns and anti-patterns</li>
          <li>Event-driven architectures</li>
          <li>Cloud-native application design</li>
          <li>Architecture decision records</li>
        </ul>
      </div>
      
      <div class="topic-area">
        <h4>💡 Innovation & Leadership</h4>
        <ul>
          <li>Innovation in large organizations</li>
          <li>Technology adoption strategies</li>
          <li>Leading technical transformation</li>
          <li>Bridging business and technology</li>
          <li>Building high-performing teams</li>
        </ul>
      </div>
      
      <div class="topic-area">
        <h4>🔧 Developer Experience</h4>
        <ul>
          <li>Reducing cognitive load</li>
          <li>CI/CD pipeline optimization</li>
          <li>Testing strategies</li>
          <li>Observability and monitoring</li>
          <li>Developer tools and workflows</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <h2>Want me to speak?</h2>
  <div class="card">
    <p>
      I'm always interested in sharing knowledge and connecting with the tech community. 
      Whether you're organizing a conference, meetup, or corporate event, I'd love to hear about it.
    </p>
    <div class="speaking-cta">
      <a href="{{ '/contact' | relative_url }}" class="btn primary">Get in Touch</a>
      <p class="speaking-note">
        I'm particularly interested in events focused on platform engineering, developer experience, 
        and innovation in large organizations.
      </p>
    </div>
  </div>
</section>

<style>
.talk-item {
  margin-bottom: var(--space-6);
}

.talk-item h3 {
  margin: 0 0 var(--space-2);
  font-size: var(--text-xl);
  color: var(--text);
}

.talk-meta {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-3);
  font-size: var(--text-sm);
  color: var(--muted);
}

.talk-date {
  font-weight: 600;
}

.talk-venue::before {
  content: "📍 ";
}

.talk-collab::before {
  content: "👥 ";
}

.talk-topics {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: var(--space-3) 0;
}

.topic {
  padding: var(--space-1) var(--space-3);
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  color: var(--accent);
  border-radius: 20px;
  font-size: var(--text-xs);
  font-weight: 500;
  border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
}

.talk-links {
  margin-top: var(--space-4);
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-6);
}

.topic-area {
  padding: var(--space-4);
  background: color-mix(in srgb, var(--card) 50%, transparent);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.topic-area h4 {
  margin: 0 0 var(--space-3);
  font-size: var(--text-lg);
  color: var(--text);
}

.topic-area ul {
  margin: 0;
  padding-left: var(--space-4);
}

.topic-area li {
  margin-bottom: var(--space-1);
  color: var(--muted);
}

.speaking-cta {
  text-align: center;
  padding: var(--space-6) 0;
}

.speaking-note {
  margin-top: var(--space-3);
  font-style: italic;
  color: var(--muted);
  font-size: var(--text-sm);
}

@media (max-width: 768px) {
  .talk-meta {
    flex-direction: column;
    gap: var(--space-1);
  }
  
  .topics-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .talk-topics {
    margin: var(--space-2) 0;
  }
}
</style>