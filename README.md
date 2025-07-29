UI Automation – Tutorialsninja with Cypress
This project automates end-to-end tests for the Tutorialsninja demo e-commerce site using Cypress.

✅ Features Tested
Login (valid & invalid)

Add product to cart

Edit cart (e.g., update quantity)

Delete item from cart

Assert product presence and messages

🛠 Tech Stack
Cypress for UI automation

JavaScript, Mocha/Chai (built-in)

🚀 Setup & Run
bash
Copy
Edit
git clone https://github.com/Dollypee52/tutorialsninja-task.git
cd tutorialninja-cypress
npm install
npx cypress open     # GUI mode
npx cypress run      # Headless mode
📁 Project Structure
cypress/e2e/ – Test specs (e.g., login.spec.js, cart.spec.js)

cypress.config.js – Cypress config

package.json – Dependencies
