const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Tell us about yourself.',
      name: 'bio',
    },
    {
        type: 'input',
      message: 'What is your LinkedIn username?',
      name: 'linkedin',
    },
    {
        type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    }
  ])
  .then((data) => {
    console.log(data);
    var html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Portfolio</title>
        </head>
        <body>
            <header>
                <h1 style="text-align: center;">${data.name}</h1>
                <h3 class="location" style="text-align: center;">${data.location}</h3>
            </header>
            <section class="about">
                <h3 class="aboutHeading">About Me</h3>
                <p>${data.bio}</p>
            </section>
            <section class="contact">
                <h3 class="contactHeading">Contact Me</h3>
                <p>LinkedIn : ${data.linkedin}</p>
                <p>Github : ${data.github}</p>
            </section>
        </body>
        </html>`

    fs.writeFile('index.html', html, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });