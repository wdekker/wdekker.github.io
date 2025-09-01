---
layout: default
title: Contact
---

<section class="section">
  <h2>Get in Touch</h2>
  <div class="card">
    <p>
      I'm always interested in connecting with fellow engineers, architects, and innovators. 
      Whether you'd like to discuss platform engineering, developer experience, innovation strategies, 
      or potential collaboration opportunities, I'd love to hear from you.
    </p>
    
    <h3>Professional Inquiries</h3>
    <p>
      For speaking engagements, consulting opportunities, or technical discussions about 
      architecture and platform engineering, please reach out through LinkedIn or email.
    </p>
    
    <h3>Ways to Connect</h3>
    <div class="contact-methods">
      <div class="contact-item">
        <h4>💼 LinkedIn</h4>
        <p>Best for professional discussions and networking</p>
        <a href="https://www.linkedin.com/in/{{ site.social.linkedin }}/" class="btn primary">Connect on LinkedIn</a>
      </div>
      
      <div class="contact-item">
        <h4>🐙 GitHub</h4>
        <p>For technical discussions and code-related topics</p>
        <a href="https://github.com/{{ site.social.github }}" class="btn">View GitHub Profile</a>
      </div>
      
      <div class="contact-item">
        <h4>📧 Email</h4>
        <p>For detailed inquiries or speaking requests</p>
        <a href="mailto:willem@dekker.dev" class="btn">Send Email</a>
      </div>
    </div>
    
    <h3>Speaking & Presentations</h3>
    <p>
      I regularly speak about platform engineering, developer experience, and innovation in large organizations. 
      Previous talks have covered topics like:
    </p>
    <ul>
      <li>Building developer platforms for thousands of engineers</li>
      <li>Golden Paths and reducing cognitive load</li>
      <li>Innovation adoption in regulated industries</li>
      <li>The fallacies of distributed computing</li>
      <li>Testing in production strategies</li>
    </ul>
    
    <p>
      Check out my <a href="{{ '/talks' | relative_url }}">speaking history</a> for examples of previous presentations.
    </p>
    
    <h3>Response Time</h3>
    <p>
      I typically respond to professional inquiries within 2-3 business days. 
      For urgent matters, please mention this in your initial message.
    </p>
  </div>
</section>

<style>
.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
  margin: var(--space-6) 0;
}

.contact-item {
  padding: var(--space-4);
  border: 1px solid var(--border);
  border-radius: 12px;
  background: color-mix(in srgb, var(--card) 50%, transparent);
}

.contact-item h4 {
  margin: 0 0 var(--space-2);
  color: var(--text);
  font-size: var(--text-lg);
}

.contact-item p {
  margin: 0 0 var(--space-3);
  color: var(--muted);
  font-size: var(--text-sm);
}

@media (max-width: 768px) {
  .contact-methods {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>