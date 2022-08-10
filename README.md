# VA-FSEC

App that allows you to upload a picture of your art with accompanying details. The art will show in a grid on your screen and you can hover over it for extra information.

## Installation

Run the following command in BOTH the <strong>CLIENT</strong> and <strong>SERVER</strong> directories to download the relevant packages:

    npm install

Set up a [MongoDB](https://www.mongodb.com/) database running on your local machine.

Create a .env file in the server folder with the relevant information and a second .env in the client folder with the relevant information. Please see the .env.example.md files in each folder for an explanation of the required key value pairs.

## Available Scripts

In the <strong>SERVER</strong> directory, you can run:

    nodemon index.js

This will run the server and connect to your database. The server will reload when you make changes in the server directory.

In the <strong>CLIENT</strong> directory, you can run:

    npm start

This will run the app client. Open [http://localhost:300x](http://localhost:300x) to view the app in your browser. The page will reload when you make changes in the client directory.
