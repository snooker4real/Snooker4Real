import React from 'react';

const skills = [
  { name: 'Bash', icon: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg' },
  { name: 'Java', icon: 'https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg' },
  { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' },
  { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg' },
  { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
  { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
  { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
  { name: 'MariaDB', icon: 'https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg' },
  { name: 'MSSQL', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
  { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
  { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
  { name: 'Symfony', icon: 'https://symfony.com/logos/symfony_black_03.svg' },
  { name: 'Jenkins', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg' },
  { name: 'Flutter', icon: 'https://cdn.worldvectorlogo.com/logos/flutter-logo.svg' },
  { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png' },
  { name: 'Django', icon: 'https://www.svgrepo.com/show/353657/django-icon.svg' },
  { name: 'Laravel', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' }
];

function Skills() {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">Languages and Tools:</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            title={skill.name}
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;