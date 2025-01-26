const https = require('https');
const fs = require('fs');

// Load token from environment variable
require('dotenv').config();
const SLACK_TOKEN = process.env.SLACK_XOXB_API_TOKEN;

function fetchEmojis() {
    const options = {
        hostname: 'slack.com',
        path: '/api/emoji.list',
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${SLACK_TOKEN}`,
            'Content-Type': 'application/json'
        }
    };

    const req = https.request(options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            try {
                const jsonData = JSON.parse(data);
                if (jsonData.ok) {
                    fs.writeFileSync('slack_emojis.json', JSON.stringify(jsonData.emoji, null, 2));
                    console.log('Emojis saved to slack_emojis.json');
                } else {
                    console.error('Error fetching emojis:', jsonData.error);
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        });
    });

    req.on('error', (error) => {
        console.error('Request Error:', error);
    });

    req.end();
}

fetchEmojis();
