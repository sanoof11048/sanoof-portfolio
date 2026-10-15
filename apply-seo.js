const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Meta Tags Update
html = html.replace(
    /<title>.*?<\/title>/,
    `<title>Mohammed Sanoof | Software Engineer &amp; Founder of Webzio Technology</title>`
);

html = html.replace(
    /<meta name="description"\s*content="[^"]*"\s*\/?>/s,
    `<meta name="description" content="Mohammed Sanoof is a software engineer and founder of Webzio Technology, building .NET applications, ERP systems, business software, and modern web applications." />`
);

html = html.replace(
    /<meta name="keywords"\s*content="[^"]*"\s*\/?>/s,
    `<meta name="keywords" content="Mohammed Sanoof, Software Engineer, Founder Webzio Technology, Full-Stack Developer, .NET Core, ASP.NET Core, C#, SQL Server, React, Next.js, ERP Developer, Kerala Developer" />`
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
