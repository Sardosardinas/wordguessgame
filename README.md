Welcome to the wordguessgame wiki!

First of all I made a mess, but please hear me out.

The html is really simple, I used bootstrap to get the background image, and text, but the pretty text on top is from Google fonts [https://fonts.google.com).

For google fonts: I just ask for "handwritten" fonts, download just one for it not to be a problem when downloading and ad it in my h1. Since you are using bootstrap, make sure to make this change assigning an id to your h1, if you put it on class, is not going to work.

At the end of the page I added a car with a link for the player to get videos of all the characters in the cartoons I choose, it will help them guess. But if you are a pro, opening console will tell you the word and other funky stuff.

Ok, now javascript:

I did my array in an excel spreadsheet before coding, that's my taste and it got me ideas. I called this array "WordList" and the variable that hold it for future executions is "cartoonGuess"
all the variables I thought I was going to use are on top, the ones I got to create letter are spread around the code.
Variables: var cartoonElement: It choose the random word to choose and I use "onload" in my html for it to work when I loaded the page.

then it came cartoonSplit for me to split the word and chain in an array the word to guess. for example "ECLIPSA" was the word chosen and cartoon Split made it "E","C","L","I","P","S","A". This is going to be helpful to the code to start the game.

KeyPress is exactly that, the event of the key being press, but the variable also holds the comparision of the letter I guessed compared to the letter in the word to guess: "E" compared to "E" in "E","C","L","I","P","S","A", to keep the example. They key event was called looneyToons, because I was stress, it's a thing.

Then it comes a little bugs that I couldn't fix, but I hope to get back and answer them for everybody:

review was the one that checked, if E" compared to "E" in "E","C","L","I","P","S","A" was true, then the underscore ("") became a letter "E","","","","","","_" and so on.

To the end, if the variable answers that hold the answer (duh!) was equal to my first array "cartoonGuess" was true, it adds a win, it's marked in the html and the game starts over. If it doesn't, then your chances get to 0 and you start over with another word.

My bug is that the correct words are used as chances and that is sad, I did not knew how to get there.

Well then, Alix


