WordSmith
=========
Wordsmith is simply my first attempt at taking advantage of the file system with the Node.js fs module. The main page allows users to write a text document and give it a title and a file name. The user-named file is then saved to "public/words/" with the title appended to the beginning of the text and separated by '\<T\>' which is easily parsed out of the body upon file read. Saved files are displayed on the right side of the home page as a list of buttons.

Possibilities for Development
-----------------------------

As expected, the fs module is both easy to use and incredibly powerful. Further possibilities for development include the generation of an XML-like psudo-code that could be entered by non-professionals and saved to the file system. The files could then be retrieved at any time and parsed into other formats or, most interestingly, into data visualizations such as those made with D3.js.
