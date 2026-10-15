const fs = require('fs');

const filesToUpdate = ['index.html', 'projects.html', 'robots.txt', 'sitemap.xml'];

filesToUpdate.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Ensure all historical domains point to the official verified domain
        let newContent = content
            .replace(/https:\/\/sanoof-portfolio\.vercel\.app/g, 'https://sanoof.webziotech.in')
            .replace(/https:\/\/sanoof\.webziointernational\.in/g, 'https://sanoof.webziotech.in');
        
        fs.writeFileSync(file, newContent);
        console.log(`Updated URLs in ${file}`);
    } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
    }
});
