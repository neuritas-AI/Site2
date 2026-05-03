const fs = require('fs');
let content = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
content = content.replace("throw new Error(data.error || 'Failed to send message'    </>\r\n  );\r\n}", "throw new Error(data.error || 'Failed to send message');\n      }");
content = content.replace("throw new Error(data.error || 'Failed to send message'    </>\n  );\n}", "throw new Error(data.error || 'Failed to send message');\n      }");
if(content.endsWith("  );\r\n}")) {
  content = content.replace(/  \);\r\n\}$/, "    </>\n  );\n}");
} else if (content.endsWith("  );\n}")) {
  content = content.replace(/  \);\n\}$/, "    </>\n  );\n}");
} else {
  // force it
  content = content.replace(/<\/div>\s*\);\s*\}\s*$/, "</div>\n    </>\n  );\n}");
}
fs.writeFileSync('src/pages/Contact.tsx', content, 'utf8');
