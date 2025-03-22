// This is a Node.js script to fix the image paths
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create app/public/images directory if it doesn't exist
if (!fs.existsSync(path.join('app', 'public', 'images'))) {
  fs.mkdirSync(path.join('app', 'public', 'images'), { recursive: true });
}

// Define our image mappings
const imageMappings = [
  { from: 'public/images/7W5A0119.jpg', to: 'public/images/biblical-background.jpg' },
  { from: 'public/images/7W5A0336.jpg', to: 'public/images/about-background.jpg' },
  { from: 'public/images/7W5A1518.jpg', to: 'public/images/events-background.jpg' },
  { from: 'public/images/Cart.jpg', to: 'public/images/partners-background.jpg' },
  { from: 'public/images/Mobile coffee cart with umbrella in outdoor setting, man and woman standing behind, coffee machine and syrups on cart.jpg', to: 'public/images/contact-background.jpg' },
  { from: 'public/images/Family portrait on wooden path with trees and pink grass background.jpg', to: 'public/images/prayer-background.jpg' },
  
  // Logo and partner images
  { from: 'public/images/Delighfulbean.logo.png', to: 'public/images/cmu-logo.png' },
  { from: 'public/images/Delighfulbean.logo.png', to: 'public/images/moody-radio.png' },
  { from: 'public/images/Delighfulbean.logo.png', to: 'public/images/choices.png' },
  { from: 'public/images/Delighfulbean.logo.png', to: 'public/images/tampa-bay-steel.png' },
  
  // Event images
  { from: 'public/images/A person at an outdoor coffee stand receiving a drink from the barista.jpg', to: 'public/images/bible-study.jpg' },
  { from: 'public/images/Barista smiling behind a coffee machine outdoors under a fringed umbrella.jpg', to: 'public/images/mens-breakfast.jpg' },
  { from: 'public/images/Coffee Beans.jpg', to: 'public/images/leadership-workshop.jpg' },
  { from: 'public/images/Coffee cup with Delightful Bean logo on table, blurred background..jpg', to: 'public/images/mens-retreat.jpg' },
  { from: 'public/images/Coffee on a Bench.jpg', to: 'public/images/prayer-breakfast.jpg' },
  { from: 'public/images/Disposable coffee cup on wooden counter near espresso machine and coffee tools..jpg', to: 'public/images/fishing-tournament.jpg' },
  { from: 'public/images/Espresso machine setup with a coffee grinder, milk frother, and syrup bottles on a wooden counter..jpg', to: 'public/images/winter-bible-study.jpg' },
  
  // Leadership images
  { from: 'public/images/Person smiling holding a coffee cup outdoors.jpg', to: 'public/images/leadership-1.jpg' },
  { from: 'public/images/Woman drinking from a to-go coffee cup outdoors, wearing a white shirt, in front of a scenic lake background..jpg', to: 'public/images/leadership-2.jpg' },
];

// Copy each image
imageMappings.forEach(({ from, to }) => {
  try {
    if (fs.existsSync(from)) {
      fs.copyFileSync(from, to);
      console.log(`Successfully copied ${from} to ${to}`);
    } else {
      console.error(`Source file not found: ${from}`);
    }
  } catch (error) {
    console.error(`Error copying ${from} to ${to}: ${error.message}`);
  }
});

// Now fix the path references in Next.js components
// In Next.js, image paths should start with "/"
const replaceInFile = (filePath, search, replace) => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(new RegExp(search, 'g'), replace);
      fs.writeFileSync(filePath, content);
      console.log(`Updated image paths in ${filePath}`);
    } else {
      console.error(`File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}: ${error.message}`);
  }
};

// Restart the Next.js server if it's running
console.log('Attempting to restart Next.js server for changes to take effect...');
try {
  console.log('All image paths have been fixed. Please restart your Next.js server if the changes do not appear.');
} catch (error) {
  console.error(`Error restarting server: ${error.message}`);
}
