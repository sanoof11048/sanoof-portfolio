const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Meta Tags Update
html = html.replace(
    /<title>.*?<\/title>/,
    `<title>Mohammed Sanoof | Software Engineer &amp; Founder of Webzio Technology</title>`
);

html = html.replace(
    /<meta name="description"\s*content="[^"]*"\s*\/?>/s,
    `<meta name="description" content="Discover Mohammed Sanoof, software engineer and founder of Webzio Technology. Explore .NET development, ERP systems, business software, and full-stack projects." />`
);

html = html.replace(
    /<meta name="keywords"\s*content="[^"]*"\s*\/?>/s,
    `<meta name="keywords" content="Mohammed Sanoof, Mohammed Sanoof Software Engineer, Mohammed Sanoof Developer, Mohammed Sanoof Kerala, Mohammed Sanoof Portfolio, Founder of Webzio Technology, Full Stack .NET Developer, ASP.NET Core Developer, C# Developer, Software Engineer in Kerala, ERP Software Developer, Business Automation Developer, Full Stack Software Engineer" />`
);

html = html.replace(
    /<meta name="author"\s*content="[^"]*"\s*\/?>/s,
    `<meta name="author" content="Mohammed Sanoof" />`
);

// 2. Canonical & OG URLs
html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="https://sanoof.webziotech.in/" />`
);

html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="https://sanoof.webziotech.in/" />`
);

html = html.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="https://sanoof.webziotech.in/" />`
);

fs.writeFileSync('index.html', html);
console.log("SEO updates verified for Mohammed Sanoof | Webzio Technology.");
