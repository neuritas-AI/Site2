const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'Services.tsx', route: '/services', title: "Services | Neuritas-AI", desc: "Discover our comprehensive AI and Automation services for modern businesses." },
  { file: 'About.tsx', route: '/about', title: "About Us | Neuritas-AI", desc: "Learn more about Neuritas-AI, our mission, and our intelligent robotics." },
  { file: 'Contact.tsx', route: '/contact', title: "Contact Us | Neuritas-AI", desc: "Get in touch with Neuritas-AI to discuss custom AI solutions." },
  { file: 'Chatbots.tsx', route: '/chatbots', title: "AI Chatbots | Neuritas-AI", desc: "Engage your customers 24/7 with our intelligent conversational AI agents." },
  { file: 'WebsiteDevelopment.tsx', route: '/website-development', title: "Website Development | Neuritas-AI", desc: "State of the art website development optimized for SEO and AEO." },
  { file: 'AITraining.tsx', route: '/ai-training', title: "AI Training & Consulting | Neuritas-AI", desc: "Train your teams with our expert AI consulting and interactive learning programs." },
  { file: 'AIVoiceCaller.tsx', route: '/ai-voice-caller', title: "AI Voice Callers | Neuritas-AI", desc: "Replace traditional call centers with intelligent AI voice agents." },
  { file: 'Terms.tsx', route: '/terms', title: "Terms of Service | Neuritas-AI", desc: "Terms of service for Neuritas-AI solutions." },
  { file: 'Privacy.tsx', route: '/privacy', title: "Privacy Policy | Neuritas-AI", desc: "Privacy policy detailing how we protect your data." }
];

const dir = path.join(__dirname, 'src', 'pages');

pages.forEach(page => {
  const filePath = path.join(dir, page.file);
  if (!fs.existsSync(filePath)) {
    console.log("Missing:", filePath);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has SEO
  if (content.includes('import SEO')) return;

  // 1. Insert import at the top (after the last import)
  const importLines = content.split('\n');
  let lastImportIndex = 0;
  for (let i = 0; i < importLines.length; i++) {
    if (importLines[i].startsWith('import ')) {
      lastImportIndex = i;
    }
  }
  
  importLines.splice(lastImportIndex + 1, 0, "import SEO from '../components/SEO';");
  content = importLines.join('\n');

  // 2. Identify the return statement for the default export component
  // We'll replace the first `return (` inside the default export with `return ( <> <SEO ... /> `
  // Since we also need to close the fragment `</>`, we'll replace the very last `  );\n}` with `    </>\n  );\n}`

  const returnRegex = /return \(\s*(<[A-Za-z])/;
  if (returnRegex.test(content)) {
    content = content.replace(returnRegex, `return (\n    <>\n      <SEO title="${page.title}" description="${page.desc}" url="${page.route}" />\n      $1`);
    
    // Replace the final closing tags
    const endRegex = /  \);\n}$/;
    if (endRegex.test(content)) {
      content = content.replace(endRegex, `  );\n}\n`);
      // wait, the above regex needs to inject `</>`
      // A better way is:
      content = content.trim().replace(/\);\n}$/, `  </>\n  );\n}`);
    } else {
       // if formatting is slightly different
       const parts = content.trim().split('');
       // naive approach: just replace the last sequence of `); \n }`
       content = content.trim().replace(/\);\s*\}$/m, `    </>\n  );\n}`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Updated", page.file);
  } else {
    console.log("Could not parse return pattern for", page.file);
  }
});
