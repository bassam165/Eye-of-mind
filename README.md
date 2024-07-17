Eye of Mind is a blog platform built using React.js for the frontend, Node.js for the backend, Express.js as the web framework, and MongoDB as the database. This project aims to provide a user-friendly platform for bloggers to share their thoughts, ideas, and experiences.

Technologies Used
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Features
User authentication and registration
Create, edit, and delete blog posts
Commenting system
User profiles
Search functionality
Responsive design
Getting Started
Prerequisites:

Node.js and npm (or yarn) installed
MongoDB database running
Clone the repository:
git clone https://github.com/bassam165/Eye-of-mind.git
cd eye-of-mind
Using npm
npm install
Using Yarn
yarn install

Environment Variables:
Create a .env file at the root of the project and add the following environment variables:
MONGODB_URI=your_mongodb_connection_string
PORT=your_port_number
JWT_SECRET=your_jwt_secret

Additional Considerations
Lock files: Mention that using npm will create a package-lock.json file, while Yarn will create a yarn.lock file. These files help ensure consistent dependency versions across different environments.
Script commands: If you have custom scripts defined in your package.json file, you can use them with both npm and Yarn. For example:
npm run build
yarn build
