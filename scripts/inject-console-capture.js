const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), '.next', 'server', 'app');
const scriptContent = `<script src="/dashboard-console-capture.js"></script>`;

function injectScript(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      injectScript(fullPath);
    } else if (file.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      if (!content.includes('dashboard-console-capture.js')) {
        content = content.replace('</head>', `${scriptContent}</head>`);
        fs.writeFileSync(fullPath, content);
        console.log(`Injected console capture script into ${fullPath}`);
      }
    }
  }
}

if (fs.existsSync(buildDir)) {
  injectScript(buildDir);
  console.log('Console capture script injection complete');
} else {
  console.log('Build directory not found - skipping script injection');
}