# Installing the node modules on your network 
On the terminal type >> npm install .
This will install the node modules used in the website on your network(PC).


# How to run the server : 
| Open the terminal in the folder
| type >>  node index.js    to start the localhost server
| Go to localhost:8080/ on your browser to visit the website

## How to stop the current running server : 
>> On the terminal, press ' Ctrl + c ' for quitting the server.

# Backend Services used : 
>> NodeJS, Express, EJS 

# Key specifications of different image gallery

>> Collage ->
In the collage view, low quality images have been used to save browser memory and response time which also helps in preventing lagging.

>> Carousel ->
In carousel view, the images used in the dock view and background view are not same, ie they look same but they are of different sizes, this is done because the dock view is samller in dimentions, low space images have been used in dock view (Thus saving a lot of memory), while high quality images are used in background, which are synced using extensive javascript.

>> Staged Scrolling ->
Staged scrolling has been kept normal.

Website description
1) Head Section: 
Contains metadata and links to external resources such as stylesheets and JavaScript files.
Charset and viewport meta tags for character encoding and responsive design.
Title of the webpage: "Ary Gallery | Home."
Links to two CSS files: "/style.css" and "https://unpkg.com/aos@next/dist/aos.css."


2) Body Section: 
Contains the visible content of the webpage.
Navigation bar with links to "Home," "About," and "Contact Us" sections.
Different types of image galleries are showcased: Collage, Staged Scrolling, and Carousel. Each type is linked to its respective page.
"About" section with descriptions of each gallery type.
"Contact Us" section with a message and a form for users to fill out.
Footer section with a brief description of the website and social media links.


3) Script Section: 
Contains links to JavaScript files for implementing functionality.
AOS (Animate on Scroll) library for animating elements on scroll.
Font Awesome icons library.
Custom JavaScript file ("/app.js") for additional functionality.
Overall, this HTML document represents a simple website for displaying different types of image galleries


