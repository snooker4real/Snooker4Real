import React from 'react';

function About() {
  return (
    <section className="mb-12">
      <div className="grid gap-4">
        <InfoItem icon="🔭" text="I'm currently working on Server Manager" link="https://github.com/Snooker4Real/server" />
        <InfoItem icon="🌱" text="I'm currently learning Swift & Flutter" />
        <InfoItem icon="👯" text="I share mostly on Github" link="https://github.com/Snooker4Real" />
        <InfoItem icon="🤝" text="I'm looking for help with Server Manager" link="https://github.com/Snooker4Real/server" />
        <InfoItem icon="👨‍💻" text="All of my projects are available at Github" link="https://github.com/Snooker4Real" />
        <InfoItem icon="💬" text="Ask me about Java Spring" />
        <InfoItem icon="📫" text="How to reach me: cindanojonathan@icloud.com" />
        <InfoItem icon="⚡" text="Fun fact: I'm a cool guy ;)" />
      </div>
    </section>
  );
}

function InfoItem({ icon, text, link }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xl">{icon}</span>
      <p className="text-gray-700">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {text}
          </a>
        ) : (
          text
        )}
      </p>
    </div>
  );
}

export default About;