const { program } = require("commander");
const fs = require("fs");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";
const data = "Don't just fly, soar.";

program.name("quotes").description("CLI tool for inspiration").version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    fs.readFile("./quotes.txt", "utf-8", function (err, data) {
      if (err) {
        console.log(err);
        return;
      }

      const myQuotes = data.split("\n");

      const randomIndex = Math.floor(Math.random() * (myQuotes.length - 1));

      console.log(chalk.magenta.bgYellow(myQuotes[randomIndex]));
      //return myQuotes[randomIndex];
    });

    // TODO: Pull a random quote from the quotes.txt file
    // console log the quote and author
    // You may style the text with chalk as you wish
  });

program
  .command("addQuote")
  .description("adds a quote to the quote file")
  .argument("<quote>", "The quote to be added to the file")
  .argument("[author]", "The author of the quote", "Anonymous")
  .action(async (quote, author) => {
    console.log(quote);
    console.log(author);
    // TODO: Add the quote and author to the quotes.txt file
    // If no author is provided,
    // save the author as "Anonymous".
    // After the quote/author is saved,
    // alert the user that the quote was added.
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving
    fs.appendFile("./quotes.txt", `${quote}|${author}\n`, function (err) {
      if (err) throw err;
      console.log("Successfully written to disc!");
    });
  });

program.parse();