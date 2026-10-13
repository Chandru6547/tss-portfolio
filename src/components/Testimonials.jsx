import React, { useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Varshini Boothapelli',
    branch: 'ECE',
    role: 'Student & Placement Aspirant',
    avatar: 'VB',
    rating: 5,
    tag: 'Structured Learning & Interview Prep',
    review:
      'The TSS sessions set precise learning objectives from day one, which brought tremendous clarity to our preparation. They start by reinforcing core fundamentals before gradually leveling up to advanced topics. The targeted guidance on coding interview patterns, LeetCode, and HackerRank problems bridged the gap between academic theory and technical hiring. Plus, the daily trainer feedback loops ensured no student got left behind.',
  },
  {
    name: 'Bhanadithya Nandala',
    branch: 'CSE',
    role: 'Software Engineering Trainee',
    avatar: 'BN',
    rating: 5,
    tag: 'Hands-on Project Mentorship',
    review:
      'I had an outstanding learning journey with TechSign Solutions. The dedicated mentors went beyond standard lectures and guided me step-by-step through developing real-world projects independently. That practical, hands-on experience gave me the confidence to write clean, deployable code on my own.',
  },
  {
    name: 'Aanchal Thakur',
    branch: 'CSE',
    role: 'Aspiring Developer',
    avatar: 'AT',
    rating: 5,
    tag: 'Inspiring Mentorship',
    review:
      'I am truly grateful to have had such dedicated mentors at TSS. The instructors break down complex architectural and algorithmic concepts into remarkably intuitive explanations. Their encouragement and personalized attention made learning enjoyable and genuinely inspiring.',
  },
  {
    name: 'Vinay Manchisaraf',
    branch: 'MECH',
    role: 'Alumnus & Upskilling Graduate',
    avatar: 'VM',
    rating: 5,
    tag: 'Foundations to Advanced',
    review:
      'Superb teaching methodology! TSS exemplifies how to build technical competencies right from the ground up. Coming from a core engineering background, their structured roadmap helped me comfortably transition from foundational concepts into advanced problem-solving.',
  },
  {
    name: 'Keerthana Aanugu',
    branch: 'EEE',
    role: 'Undergraduate Engineering Student',
    avatar: 'KA',
    rating: 5,
    tag: 'Engaging Delivery',
    review:
      'The sessions were engaging, interactive, and easy to follow throughout. The instructors explain every nuance clearly and patiently, making even challenging technical topics feel approachable and enjoyable.',
  },
];

export default function Testimonials() {
  const [filter, setFilter] = useState('ALL');

  const branches = ['ALL', 'CSE', 'ECE', 'EEE', 'MECH'];

  const filteredTestimonials =
    filter === 'ALL'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.branch === filter);

  return (
    <section id="testimonials" className="ts-testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">Student Stories</span>
          <h2 id="testimonials-heading" className="testimonials-title">
            Empowering students from <br />
            <span className="testimonials-highlight">foundations to dream careers.</span>
          </h2>
          <p className="testimonials-subtitle">
            See how learners across disciplines use TechSign Solutions to master coding,
            conquer technical interviews, and build real-world software engineering confidence.
          </p>

          {/* Department Filter Tabs */}
          <div className="testimonials-filter-bar">
            {branches.map((b) => (
              <button
                key={b}
                type="button"
                className={`filter-chip ${filter === b ? 'active' : ''}`}
                onClick={() => setFilter(b)}
              >
                {b === 'ALL' ? 'All Departments' : `${b} Branch`}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {filteredTestimonials.map((item, idx) => (
            <article key={idx} className="testimonial-card">
              {/* Card Top: Stars & Tag */}
              <div className="card-meta">
                <div className="stars-row" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="card-tag">{item.tag}</span>
              </div>

              {/* Card Quote */}
              <blockquote className="card-quote">
                "{item.review}"
              </blockquote>

              {/* Card Author */}
              <div className="card-author">
                <div className="author-avatar">{item.avatar}</div>
                <div className="author-info">
                  <div className="author-name-row">
                    <h3 className="author-name">{item.name}</h3>
                    <span className="author-branch-pill">{item.branch}</span>
                  </div>
                  <p className="author-role">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Stat Summary */}
        <div className="testimonials-footer-stat">
          <div className="stat-circle">
            <span className="circle-num">4.9</span>
            <span className="circle-out">/ 5.0</span>
          </div>
          <div className="stat-text-group">
            <h4 className="stat-heading">Average Student Satisfaction Score</h4>
            <p className="stat-sub">Aggregated across thousands of hands-on training sessions and campus placement batches.</p>
          </div>
        </div>

      </div>
    </section>
  );
}