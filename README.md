# Dice Roller Web Application

This is a simple Node.js web application that simulates rolling dice based on input in the format commonly used in tabletop role-playing games like Dungeons & Dragons. The application allows users to enter dice roll combinations, calculates the results, and displays them on a web page.

Just a small fun project I made to fresh up some javascript coding. However, thought it might be useful maybe so wrapped the code with nodejs and here we are!

## Features

- Supports multiple dice types: d4, d6, d8, d10, d12, d20, and d100.
- Allows input of multiple dice rolls and modifiers, e.g., "3d4+2d6+5", "1d6 or just d6".
- Displays the results of the dice rolls in a user-friendly web interface.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/dice-roller.git
    cd dice-roller
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the server:

    ```sh
    node index.js
    ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Enter your dice roll combination in the input form and click the "Roll" button.

4. The result of the dice rolls will be displayed and then you can new rolls.
