/* Question 1: What is HTML?
    HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages and web
    applications.

 */

/* Question 2: Purpose of DOCTYPE in HTML?
    The <!DOCTYPE> declaration specifies the HTML version being used and helps browsers render the document correctly.

 */

/* Question 3: Semantic elements in HTML
    Semantic elements convey meaning about the structure of the document. Examples include <header>, <nav>, <article>,
    <section>, <footer>, and others.
 */

/* Question 4: Difference between the <script> tag with the async and defer attributes.
    <script async> loads the script asynchronously while the HTML document continues parsing.
    <script defer> defers script execution until after the HTML document has been fully parsed.

 */

/* Question 5: HTML Attributes?
    Attributes are the properties that can be added to an HTML tag. These attributes change the way the tag behaves or is
    displayed. For example, a <img> tag has an src attribute, which you use to add the source from which the image should
    be displayed.

 */

/* Question 6: Void elements in HTML
    Void elements in HTML are tags that do not require a closing tag. They are used to insert images, line breaks, and
    other content that does not require additional information.

 */

/* Question 7: Role of the <meta> tag in HTML
    The <meta> tag provides additional information about the web page, such as the author, description, and keywords.
    It is located within the <head> section of the HTML document.

 */

/* Question 8: Difference between an absolute and relative URL
    An absolute URL includes the full web address, the protocol (such as http or https) and the domain name
    (such as www.example.com).

    A relative URL, on the other hand, specifies the location of a resource relative to the current web page.
    For example, a relative URL might include the file path (such as /images/picture.jpg) or the relative path
    (such as ../images/picture.jpg).
 */

/* Question 9: Role of the action attribute in HTML forms
    The action attribute is used to specify the URL of the script or program that will process the data submitted by
    the form. When the user clicks the submit button, the form data is sent to the specified URL for processing.

 */

/* Question 10: Key Differences Between LocalStorage And SessionStorage Objects
    The key differences between localStorage and sessionStorage objects are as follows:

    The localStorage object stores the data without an expiry date. However, sessionStorage object stores the data for
    only one session.
    In the case of a localStorage object, data will not delete when the browser window closes. However, the data gets
    deleted if the browser window closes, in the case of sessionStorage objects.
    The data in sessionStorage is accessible only in the current window of the browser. But, the data in the
    localStorage can be shared between multiple windows of the browser.

 */

/* Question 11: What happens if there is no text between the tags? Does this affect the display of the HTML file?
    If there is no text present between the tags, there is nothing to format. Therefore, no formatting will appear. Some
    tags, such as the tags without a closing tag like the <img> tag, do not require any text between them.

 */

/* Question 12: Difference between HTML elements and tags
    The differences between HTML elements and tags are:

    HTML Elements
    - The element is an individual component of the HTML web page or document that consists of a start tag, its
    attributes, an end tag, and everything in between.
    - They usually contain a start tag, content, and an end tag.
    - HTML Elements hold the content.
    - For example, <p>This is an example of a paragraph.</p>

    Tags
    - HTML tag (either opening or closing) marks the start or end of an element.
    - They begin with < symbol and end with > symbol. Whatever is written inside < and > are called tags.
    - HTML Tags hold the HTML element.
    - For example, <a> is an opening anchor tag and </a> is a closing anchor tag.

 */

/* Question 13: What is HTML5? What are some of its new features that were not present in HTML?
    HTML5 is the latest version of the Hypertext Markup Language. Some of the new features of HTML5 are:

    1. HTML5 supports SVG, canvas, and other virtual vector graphics. In HTML, vector graphics can only be used with
    Flash, VML (Vector Markup Language), or Silverlight.
    2. HTML5 allows JavaScript to run within a web browser. The previous version allowed JavaScript to run in the
    browser interface thread.
    3. HTML5 is not based on SGML. It comes with enhanced parsing rules for improved compatibility.
    4. In HTML5, web SQL databases are used to store data temporarily. Previously, only the browser cache was used.
    5. Some elements have been removed – applet, isindex, noframes, acronym, dir, font, frame, frameset, and big are
    removed.
    6. New elements have been added – time, summary, aside, audio, command, and data.

 */

/* Question 14: Difference between a block-level element and an inline element
    The differences between block-level elements and inline elements are:

    1. Block-level Elements
    - They start on a new line.
    - Stretch to fill the full width available to them.
    - They have a top and a bottom margin.
    - Examples of block-level elements in HTML: <div>, <img>, <form>, <main>, <table>, <video>.

    2. Inline Elements
    - Do not start on a new line and can begin within a line.
    - Take up as much width as necessary. Its width only extends as far as it is defined by its tags.
    - Inline elements do not have a top and a bottom margin.
    - Examples of inline elements: <span>, <img>, <strong>, <code>, <input>, <time>, <i>.

 */

/* Question 15: What are the new input types in HTML5 for forms
    The following are the new input types in HTML5 for forms:

    INPUT TYPE	    DESCRIPTION	HTML                                                                MARKUP
    date	        Allows the user to select a date	                                            <input type=”date”>
    datetime	    Allows the user to select date and time using UTC date and time format	    <input type=”datetime”>
    datetime-local	To select the date and time as per the local time	                  <input type=”datetime-local”>
    month	        Select month and year	                                                       <input type=”month”>
    time	        The time of day	                                                                <input type=”time”>
    week	        Enables you to select the week and year	                                        <input type=”week”>
    color	        Enables you to enter a simple color value 	                                  <input type=”color””>
    email	        Validates the input using the standard email format	                           <input type=”email”>
    search	        Searches a data set 	                                                      <input type=”search”>
    number	        Accepts only numbers 	                                                      <input type=”number”>
    url	            Accepts only URLs 	                                                             <input type=”url”>

 */