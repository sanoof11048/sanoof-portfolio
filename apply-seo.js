const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Meta Tags Update
html = html.replace(
    /<title>Muhammed Sanoof \| Full Stack Developer at Bridgeon Solutions<\/title>/,
    `<title>Muhammed Sanoof | Frontend Developer & React Developer Portfolio</title>`
);

html = html.replace(
    /<meta name="description"\s*content="Portfolio of[^>]*" \/>/s,
    `<meta name="description" content="Explore the web developer portfolio of Muhammed Sanoof, a passionate React Developer and JavaScript Developer building modern web applications." />`
);

html = html.replace(
    /<meta name="keywords"\s*content="Muhammed Sanoof,[^>]*" \/>/s,
    `<meta name="keywords" content="frontend developer, React developer, web developer portfolio, JavaScript developer, modern web applications, Full Stack Developer, Kerala Developer" />`
);

html = html.replace(
    /<meta property="og:title" content="Muhammed Sanoof \| Full Stack Developer at Bridgeon Solutions" \/>/,
    `<meta property="og:title" content="Muhammed Sanoof | Frontend Developer & React Developer" />`
);

html = html.replace(
    /<meta property="og:description"\s*content="Explore the portfolio[^>]*" \/>/s,
    `<meta property="og:description" content="Discover modern web applications crafted by Sanoof. Expertise in React, JavaScript, and Full Stack development." />`
);

html = html.replace(
    /<meta name="twitter:title" content="Muhammed Sanoof \| Full Stack Developer at Bridgeon Solutions" \/>/,
    `<meta name="twitter:title" content="Muhammed Sanoof | Frontend Developer Portfolio" />`
);

html = html.replace(
    /<meta name="twitter:description"\s*content="Check out Plashoe[^>]*" \/>/s,
    `<meta name="twitter:description" content="Check out Plashoe, ADOTZEE, Webzio and more modern web applications built with React." />`
);

// 2. Schema JSON-LD Update
const newSchema = `<!-- Combined Website Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://sanoof-portfolio.vercel.app/#person",
          "name": "Muhammed Sanoof",
          "jobTitle": "Senior Frontend Developer",
          "url": "https://sanoof-portfolio.vercel.app/",
          "sameAs": [
            "https://www.linkedin.com/in/sanoof/",
            "https://github.com/sanoof11048",
            "https://www.instagram.com/ft.sanoof/"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Bridgeon Solutions"
          },
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Khuthubuzzaman English Medium High School"
            },
            {
              "@type": "EducationalOrganization",
              "name": "GHSS Peruvallur"
            }
          ],
          "knowsAbout": ["React", ".NET", "SQL", "Frontend Development", "JavaScript", "Tailwind CSS", "HTML", "CSS"]
        },
        {
          "@type": "WebSite",
          "@id": "https://sanoof-portfolio.vercel.app/#website",
          "url": "https://sanoof-portfolio.vercel.app/",
          "name": "Muhammed Sanoof Custom Web Developer Portfolio",
          "publisher": { "@id": "https://sanoof-portfolio.vercel.app/#person" }
        },
        {
          "@type": "CollectionPage",
          "@id": "https://sanoof-portfolio.vercel.app/#portfolio",
          "url": "https://sanoof-portfolio.vercel.app/#projects",
          "name": "Modern Web Applications Portfolio",
          "about": { "@id": "https://sanoof-portfolio.vercel.app/#person" }
        }
      ]
    }
    </script>`;

html = html.replace(
    /<!-- Person Schema -->.*?<\/script>\s*<!-- Separate CreativeWorks -->.*?<\/script>\s*<script type="application\/ld\+json">.*?<\/script>\s*<script type="application\/ld\+json">.*?<\/script>/s,
    newSchema
);

// 3. Navigation Semantics
html = html.replace(
    /<nav class="navbar navbar-expand-md navbar-light  shadow-sm px-4 py-2 rounded-4 custom-navbar">/,
    '<nav class="navbar navbar-expand-md navbar-light shadow-sm px-4 py-2 rounded-4 custom-navbar" role="navigation" aria-label="Main Navigation">'
);

html = html.replace(
    /<h1 class="d-block d-md-none headLogo text-center ps-3 mt-1">Sanoof<\/h1>/,
    '<div class="d-block d-md-none headLogo text-center ps-3 mt-1 fw-bold fs-3">Sanoof</div>'
);

html = html.replace(
    /aria-label="Toggle navigation">/,
    'aria-label="Toggle Navigation Menu">'
);

// 4. Main HTML5 Container wrap
html = html.replace(
    /<section id="home" class="fSection pt-5 pb-5">/,
    '<main role="main">\n\n    <section id="home" class="fSection pt-5 pb-5">'
);

html = html.replace(
    /<footer>/,
    '</main>\n\n    <footer>'
);

// 5. Hierarchy Fixes (H1 to H2/H3)
html = html.replace(/<h1 class="sec-head">About <span>Me<\/span><\/h1>/g, '<h2 class="sec-head">About <span>Me</span></h2>');
html = html.replace(/<h1 class="sec-head">My <span>Skills<\/span><\/h1>/g, '<h2 class="sec-head">My <span>Skills</span></h2>');
html = html.replace(/<h1 class="sec-head">My <span>Projects<\/span><\/h1>/g, '<h2 class="sec-head">My <span>Projects</span></h2>');
html = html.replace(/<h1 class="edu-title">Education <span>&amp; Experience<\/span><\/h1>/g, '<h2 class="edu-title">Education <span>&amp; Experience</span></h2>');
html = html.replace(/<h1 class="sec-head pb-5 con">Contact<\/h1>/g, '<h2 class="sec-head pb-5 con">Contact</h2>');

html = html.replace(/<h2 class="name-san">I'm Sanoof<\/h2>/g, '<h3 class="name-san">I\'m Sanoof</h3>');

// 6. About Me Content Upgrade
const aboutOld = `I am a Fullstack .NET developer based in Kerala, India, and the founder of
                        <a href="https://webzio-info.vercel.app" target="_blank" class="webzio-link">Webzio</a>,
                        a web development studio crafting custom digital solutions. I hold a Plus-two in Computer
                        Science
                        from GHSS Peruvallur and am deeply passionate about coding, building applications, and
                        pushing my technical boundaries. I thrive on Full-Stack projects and turning ideas into
                        scalable web experiences.`;
const aboutNew = `I am a passionate <strong>frontend developer</strong> and <strong>React developer</strong> based in Kerala, India. As the founder of 
                        <a href="https://webzio-info.vercel.app" target="_blank" class="webzio-link">Webzio</a>, 
                        I specialize in crafting <strong>modern web applications</strong> and custom digital solutions. With expertise as a <strong>JavaScript developer</strong> and Full-Stack engineer, I thrive on building scalable and performant architectures. Explore my <strong>web developer portfolio</strong> to see how I turn abstract ideas into engaging digital experiences.`;
html = html.replace(aboutOld, aboutNew);
html = html.replace(/<h5>Fullstack \.NET Developer & Founder of Webzio<\/h5>/g, '<h5>Frontend Developer & Founder of Webzio</h5>');

// 7. Image Alts and Lazy Loading
html = html.replace(/alt="Sanoof's profile picture"/, 'alt="Muhammed Sanoof - Experienced Frontend and React Developer"');

html = html.replace(/<img src="assets\/webzio-preview.png" alt="Webzio">/, '<img src="assets/webzio-preview.png" loading="lazy" alt="Webzio - Modern Web Applications and E-Commerce Solutions">');
html = html.replace(/<img src="assets\/mediConnect.png" alt="MediConnect">/, '<img src="assets/mediConnect.png" loading="lazy" alt="MediConnect - Medical Communication Platform">');
html = html.replace(/<img src="assets\/plashoe.png" alt="Plashoe E-commerce">/, '<img src="assets/plashoe.png" loading="lazy" alt="Plashoe - Full-stack E-commerce Application">');
html = html.replace(/<img src="assets\/Adotzee.png" alt="ADOTZEE">/, '<img src="assets/Adotzee.png" loading="lazy" alt="ADOTZEE - Educational Consultancy Web App">');
html = html.replace(/<img src="assets\/shoe-old.png" alt="Shoe E-commerce">/, '<img src="assets/shoe-old.png" loading="lazy" alt="Shoe E-commerce - Responsive React UI">');
html = html.replace(/<img src="assets\/portfolio1.png" alt="Old Portfolio">/, '<img src="assets/portfolio1.png" loading="lazy" alt="Early Web Portfolio Project">');
html = html.replace(/<img src="assets\/clonepic.png" alt="Clone Website">/, '<img src="assets/clonepic.png" loading="lazy" alt="Pixel Perfect Clone Website Project">');

// Education image lazy loading
html = html.replace(/<img src="assets\/KEMHS.jpeg" alt="Khuthubuzzaman English Medium High School">/, '<img src="assets/KEMHS.jpeg" loading="lazy" alt="Khuthubuzzaman English Medium High School">');
html = html.replace(/<img src="assets\/GHSS3.png" alt="Government Higher Secondary School Peruvallur">/, '<img src="assets/GHSS3.png" loading="lazy" alt="Government Higher Secondary School Peruvallur">');
html = html.replace(/<img src="assets\/kinfra.png" alt="Bridgeon Solutions">/, '<img src="assets/kinfra.png" loading="lazy" alt="Bridgeon Solutions">');
html = html.replace(/<img src="assets\/manipal.webp" alt="Manipal University Jaipur">/, '<img src="assets/manipal.webp" loading="lazy" alt="Manipal University Jaipur">');


// 8. Social Links Accessibility (ARIA Labels) Home Section
html = html.replace(/<a href="https:\/\/www.instagram.com\/ft.sanoof" target="_blank" class="icons">/, '<a href="https://www.instagram.com/ft.sanoof" target="_blank" class="icons" aria-label="Instagram Profile">');
html = html.replace(/<a href="https:\/\/github.com\/sanoof11048" target="_blank" class="icons">/, '<a href="https://github.com/sanoof11048" target="_blank" class="icons" aria-label="GitHub Profile">');
html = html.replace(/<a href="https:\/\/dev.to\/sanoof_" target="_blank" class="icons">/, '<a href="https://dev.to/sanoof_" target="_blank" class="icons" aria-label="Dev.to Posts">');
html = html.replace(/<a href="https:\/\/www.linkedin.com\/in\/sanoof" target="_blank" class="icons">/, '<a href="https://www.linkedin.com/in/sanoof" target="_blank" class="icons" aria-label="LinkedIn Profile">');
html = html.replace(/<a href="https:\/\/x.com\/ft_Sanoof" target="_blank" class="icons">/, '<a href="https://x.com/ft_Sanoof" target="_blank" class="icons" aria-label="Twitter Profile">');

// Transform Article structure simple
html = html.replace(/<div class="project-card">/g, '<article class="project-card">');
// Since project cards end with </div></div></div> usually, let's substitute closing div with article where applicable.
html = html.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<article/g, '</div>\n                    </div>\n                </article>\n                <article');

// And handle the last one before view all projects
html = html.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<div class="d-flex justify-content-center/g, '</div>\n                    </div>\n                </article>\n             <div class="d-flex justify-content-center');

fs.writeFileSync('index.html', html);
console.log("SEO updates applied successfully.");
