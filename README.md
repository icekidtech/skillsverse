Web3 Job & Skill Matching Platform
This project is an AI-powered Web3 job and skill matching platform. It uses SUI blockchain for credential verification and job matching, along with OpenAI for AI-powered job recommendations.


```
    Prerequisites
    Before you begin, ensure you have the following installed:

    Node.js: Download and install from nodejs.org.

    npm: Comes bundled with Node.js.

    TypeScript: Install globally using npm install -g typescript.

    Installation
    Clone the Repository:

    bash
    copy
    https://github.com/icekidtech/skillsverse.git
    cd skillsverse
    Install Dependencies:
    Navigate to the backend directory and   install the required dependencies:

    bash
    Copy
    cd backend
    npm install
    Dependencies
    Backend Dependencies
    The backend is built with Node.js and TypeScript. Here are the dependencies you need to install:

    Core Dependencies:

    bash
    Copy
    npm install express cors dotenv @mysten/sui.js openai cohere-ai
    Development Dependencies:

    bash
    Copy
    npm install --save-dev typescript @types/node @types/express ts-node nodemon
    SUI Blockchain:

    Install the latest version of @mysten/sui.js:

    bash
    Copy
    npm install @mysten/sui.js@latest
    AI Libraries:

    OpenAI (for AI-powered matching):

    bash
    Copy
    npm install openai
    Cohere (optional, for NLP):

    bash
    Copy
    npm install cohere-ai
    Environment Variables
    Create a .env file in the backend   directory and add the following         variables:

    env
    Copy
    PORT=5000
    SUI_NETWORK=testnet
    OPENAI_API_KEY=your_openai_api_key
    COHERE_API_KEY=your_cohere_api_key
    Running the Project
    Start the Backend:
    Navigate to the backend directory and run:



    npm run dev
    build the Project:
    To compile TypeScript files, run:


    npm run build
    Start the Server:
    After building, start the server:

    bash
    Copy
    npm start
```