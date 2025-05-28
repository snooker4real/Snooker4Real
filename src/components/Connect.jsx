import React from 'react';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/AstronoJONAS',
    icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jonathan-c-7298b2133/',
    icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg'
  }
];

function Connect() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-semibold mb-6">Connect with me:</h3>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={link.icon} alt={link.name} className="w-8 h-8" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Connect;