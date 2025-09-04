# williams-cli
A simple to-do list CLI app built with Node.js, Commander, Inquirer, and Colors.

## Installation
Clone the repo and install dependencies:

git clone https://github.com/yourusername/williams-cli.git
cd williams-cli
npm install
---

# App Usage
node bin/williams.js add
node bin/williams.js list
node bin/williams.js remove <index>
node bin/williams.js clear

---

# Global installation (using williams globally on your computer)
Make It a Global CLI (Optional)
Add this to `package.json`:  
   json
   "bin": {
     "williams": "./bin/williams.js"
   }
then run npm link

(example of usage: williams add (to add a task))


