const fs = require('fs');

const filesToUpdate = ['index.html', 'projects.html', 'robots.txt', 'sitemap.xml'];

filesToUpdate.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Regex replace all instances of sanoof-portfolio.vercel.app with sanoof.webziointernational.in
        // Ensure we preserve the https protocol
        let newContent = content.replace(/https:\/\/sanoof-portfolio\.vercel\.app/g, 'https://sanoof.webziointernational.in');
        
        fs.writeFileSync(file, newContent);
        console.log(`Updated URLs in ${file}`);
    } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
    }
});
