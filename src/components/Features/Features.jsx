import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    { 
      icon: '🎬', 
      title: 'Vertical Cinema', 
      desc: 'Experience movies and series reimagined for your phone. Perfect blockbuster experience for vertical viewing.'
    },
    { 
      icon: '🔥', 
      title: 'Swipe & Discover', 
      desc: 'No more endless browsing. Our smart feed learns what you love and serves fresh content instantly.'
    },
    { 
      icon: '💎', 
      title: 'Exclusive Drops', 
      desc: 'Watch original series and movies you won\'t find anywhere else. New content added weekly.'
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>Why you'll love Snaplay</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="features-bottom">
          <p>Ready to get started?</p>
          <a href="https://play.google.com/store" className="features-btn">
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;