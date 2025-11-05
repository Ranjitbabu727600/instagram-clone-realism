# Instagram Clone - Kali Linux Setup

## Prerequisites
Make sure you have Node.js and npm installed on your Kali Linux system.

```bash
# Check if Node.js is installed
node --version

# Check if npm is installed
npm --version

# If not installed, install them:
sudo apt update
sudo apt install nodejs npm -y
```

## Installation Steps

1. **Navigate to your project directory:**
```bash
cd /path/to/your/instagram-clone
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the interactive setup script:**
```bash
node scripts/instagram-setup.js
```

## Interactive Setup

The script will guide you through:

### 1. Story Configuration
- Set number of stories (default: 6)
- For each story:
  - Custom or default username
  - Default avatar or custom image path
  - Story media (optional)

### 2. Post Configuration
- Set number of posts (default: 4)
- For each post:
  - Custom or default username
  - Default avatar or custom image path
  - Days ago (auto-generated if skipped)
  - Likes count (auto-generated if skipped)
  - Views count (auto-generated if skipped)
  - Comments count (auto-generated if skipped)
  - Caption (default provided)
  - Post media path (optional)

### 3. Server Configuration
- Set port number (default: 8080)
- Press Enter to launch

## Example Usage

```bash
node scripts/instagram-setup.js
```

Follow the prompts:
```
How many stories? (Enter for 6): 2
👤 Username (Enter for alexandra_m): 
🖼 Profile Picture:
1. Use default avatar
2. Use custom image
Choose (1/2) (Enter for 1): 1
...
```

## Access Your Clone

After configuration, the server will start automatically:
```
http://localhost:8080
```
(or your custom port number)

## Manual Start (After Configuration)

If you've already run the setup and just want to start the server:

```bash
npm run dev
```

Or with a custom port:
```bash
npm run dev -- --port 8080
```

## Notes

- All configuration is saved to `src/data/content.json`
- You can re-run the setup script anytime to reconfigure
- Custom image paths should be relative to the project root
- Press Enter at any prompt to use the default value
