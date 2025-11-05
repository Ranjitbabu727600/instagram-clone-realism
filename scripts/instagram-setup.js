#!/usr/bin/env node

import readline from 'readline';
import fs from 'fs';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const defaultAvatars = [
  'src/assets/user1.jpg',
  'src/assets/user2.jpg',
  'src/assets/user3.jpg',
  'src/assets/user4.jpg'
];

const defaultUsernames = [
  'alexandra_m', 'david_beckham', 'emma_watson', 'chris_hemsworth',
  'sarah_j', 'mike_photos', 'emma_travel', 'alex_fit',
  'jessica_rose', 'mark_fitness'
];

const defaultCaptions = [
  'Just another day in paradise 🏝 #travel',
  'Food coma achieved 🍕 #foodie',
  'Sunset vibes ✨ #nature',
  'Weekend mood 💪 #fitness',
  'Coffee first ☕ #morning',
  'City lights 🌃 #urban',
  'Beach life 🏖 #summer',
  'Adventure time 🏔 #explore'
];

let usedAvatarIndex = 0;
let usedUsernameIndex = 0;

console.log('\n🎬 REAL INSTAGRAM CLONE SETUP\n');
console.log('📝 STORY CONFIGURATION – Add realistic stories');
console.log('Add up to 10 stories for maximum realism\n');

async function setupStories() {
  const storiesInput = await question('How many stories? (Enter for 6): ');
  const numStories = storiesInput.trim() === '' ? 6 : parseInt(storiesInput);

  const stories = [];

  for (let i = 0; i < numStories; i++) {
    console.log(`\n📖 STORY ${i + 1}:`);
    
    const usernameInput = await question(`👤 Username (Enter for ${defaultUsernames[usedUsernameIndex]}): `);
    const username = usernameInput.trim() === '' ? defaultUsernames[usedUsernameIndex] : usernameInput;
    
    console.log(`🖼 Profile Picture for ${username}:\n`);
    console.log('1. Use default avatar\n2. Use custom image');
    const avatarChoice = await question('Choose (1/2) (Enter for 1): ');
    
    let avatar;
    if (avatarChoice.trim() === '2') {
      const customPath = await question('Enter custom image path: ');
      avatar = customPath.trim();
      console.log('✅ Custom avatar set');
    } else {
      avatar = defaultAvatars[usedAvatarIndex % defaultAvatars.length];
      console.log('🎨 Default avatar set');
      usedAvatarIndex++;
    }
    
    const mediaPath = await question('📹 Story media path (Enter for text-only) (Enter for none): ');
    console.log('📝 Text-only story\n');
    
    stories.push({
      id: i + 1,
      username,
      avatar
    });
    
    usedUsernameIndex++;
  }

  console.log(`\n✅ Total ${numStories} realistic stories added\n`);
  return stories;
}

async function setupPosts() {
  console.log('\n📱 POST CONFIGURATION – Create realistic posts');
  const postsInput = await question('How many posts? (Enter for 4): ');
  const numPosts = postsInput.trim() === '' ? 4 : parseInt(postsInput);

  const posts = [];

  for (let i = 0; i < numPosts; i++) {
    console.log(`\n📝 POST ${i + 1}:`);
    
    const usernameInput = await question(`👤 Username (Enter for ${defaultUsernames[usedUsernameIndex % defaultUsernames.length]}): `);
    const username = usernameInput.trim() === '' ? defaultUsernames[usedUsernameIndex % defaultUsernames.length] : usernameInput;
    
    console.log(`🖼 Profile Picture:\n`);
    console.log('1. Use default avatar\n2. Use custom image');
    const avatarChoice = await question('Choose (1/2) (Enter for 1): ');
    
    let avatar;
    if (avatarChoice.trim() === '2') {
      const customPath = await question('Enter custom image path: ');
      avatar = customPath.trim();
      console.log('✅ Custom avatar set');
    } else {
      avatar = defaultAvatars[usedAvatarIndex % defaultAvatars.length];
      console.log('🎨 Default avatar set');
      usedAvatarIndex++;
    }

    const daysAgoInput = await question('Days ago (Enter for ' + Math.floor(Math.random() * 30 + 1) + '): ');
    const daysAgo = daysAgoInput.trim() === '' ? Math.floor(Math.random() * 30 + 1) : parseInt(daysAgoInput);

    const likesInput = await question('Likes (Enter for ' + Math.floor(Math.random() * 30000 + 1000) + '): ');
    const likes = likesInput.trim() === '' ? Math.floor(Math.random() * 30000 + 1000) : parseInt(likesInput);

    const viewsInput = await question('Views (Enter for ' + Math.floor(Math.random() * 200000 + 50000) + '): ');
    const views = viewsInput.trim() === '' ? Math.floor(Math.random() * 200000 + 50000) : parseInt(viewsInput);

    const commentsInput = await question('Comments (Enter for ' + Math.floor(Math.random() * 500 + 100) + '): ');
    const comments = commentsInput.trim() === '' ? Math.floor(Math.random() * 500 + 100) : parseInt(commentsInput);

    const defaultCaption = defaultCaptions[i % defaultCaptions.length];
    const captionInput = await question(`Caption (Enter for "${defaultCaption}"): `);
    const caption = captionInput.trim() === '' ? defaultCaption : captionInput;

    const mediaPath = await question('Post media path (Enter for text-only) (Enter for none): ');
    const image = mediaPath.trim() === '' ? avatar : mediaPath.trim();

    console.log('');

    posts.push({
      id: i + 1,
      username,
      avatar,
      image,
      likes,
      caption,
      timeAgo: `${daysAgo} ${daysAgo === 1 ? 'DAY' : 'DAYS'} AGO`
    });

    usedUsernameIndex++;
  }

  return posts;
}

async function main() {
  const stories = await setupStories();
  const posts = await setupPosts();

  const portInput = await question('\n🚪 Port number (Enter for 8080): ');
  const port = portInput.trim() === '' ? 8080 : parseInt(portInput);

  // Write data to JSON file
  const dataPath = path.join(__dirname, '../src/data/content.json');
  const data = { stories, posts };
  
  // Ensure data directory exists
  const dataDir = path.dirname(dataPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  console.log('\n✅ REAL INSTAGRAM CLONE CONFIGURED!');
  console.log(`🚪 Port: ${port}`);
  console.log(`📝 Stories: ${stories.length} realistic users`);
  console.log(`📱 Posts: ${posts.length} authentic posts`);
  console.log(`🎬 Media files: 0 loaded`);
  console.log(`🖼 Profile pictures: ${stories.length} configured`);
  console.log(`\n🔥 Starting Real Instagram Clone on http://localhost:${port}`);
  console.log('💡 Tip: Use realistic profile pictures and media for maximum authenticity.');
  
  await question('Press Enter to launch the clone...');
  
  rl.close();

  // Start the Vite dev server with the specified port
  console.log('\n🚀 Launching server...\n');
  const viteProcess = spawn('npm', ['run', 'dev', '--', '--port', port.toString()], {
    stdio: 'inherit',
    shell: true,
    cwd: path.join(__dirname, '..')
  });

  viteProcess.on('error', (error) => {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  });
}

main().catch((error) => {
  console.error('❌ Error:', error);
  rl.close();
  process.exit(1);
});
