
/* Question 1: What is CSS
    CSS stands for Cascading Style Sheet. It is a popular styling language which is used with HTML to design websites.

 */

/* Question 2: How can you integrate CSS on a web page
    There are three methods to integrate CSS on web pages.
        1. Inline method - It is used to insert style sheets in HTML document
        2. Embedded/Internal method - It is used to add a unique style to a single document
        3. Linked/Imported/External method - It is used when you want to make changes on multiple pages.

 */

/* Question 3: Some CSS frameworks
    1. Bootstrap
    2. Foundation
    3. Semantic UI
    4. Gumby
    5. Ulkit

 */

/* Question 4: Different types of Selectors in CSS
    Universal Selector, Element type Selector, ID selector, Class selector, Descendant combinatory, Child Combinator,
    General Sibling Combinator, Adjacent sibling combinator, and Attribute selector.
 */

/* Question 5: What is a CSS Preprocessor? What are Sass, Less, and Stylus? Why do people use them?
    CSS preprocessor is a tool used to enhance the basic functionality and let us use the complex logical syntax such
    as variables, functions, mixins, and code nesting within vanilla CSS scripts themselves.

        1. Sass (Syntactically Awesome Style Sheets) uses .sass extension. It is used for indentation; it doesn’t use
        semicolons or curly brackets.
        2. Less (Leener Stylesheets) uses .less extension. It is easy to add to any JavaScript Project by using NPM or
        less.js file. Here, @ is used to define the variables.
        3. Stylus provides great flexibility in writing syntax. It is able to use native CSS as well as the exclusion of
        brackets, colons, and semicolons. There is no need to use @ or $ to define the variables.
    People use SASS, LESS, and Stylus in order to extend the basic functionality of vanilla CSS.

 */

/* Question 6: Difference between reset vs normalize CSS? How do they differ
    1. Reset CSS is used to remove all built-in styles in the browser such as paddings, margins, and font sizes, and
    can be reset using all the elements.
    2. Normalize CSS is used to make all built-in styles in the browser consistent and correct bugs as per varying
    browsers.

 */

/* Question 7: Difference between inline, inline-block, and block
    1. Block Elements are <div> and <p>. They usually start on a new line and can take space for an entire row or width.
    2. Inline elements are <a>, <span>, <strong>, and <img> tags. They don't start on a new line. However, they appear
    on the same line as the content and tags beside them.
    3. Inline block elements have padding and margins and set height and width values. Though, they are similar to
    inline elements.
 */

/* Question 8: Pseudo Classes
    Pseudo-classes are the type of pseudo-elements that don’t exist in a normal document tree. It allows selecting the
    regular elements under certain conditions especially when we try to hover over the link; the anchor tags are :link,
    :visited, :hover, :active, :focus
 */

/* Question 9: What is the CSS Box model and what are its elements
    The CSS box model is used to define the design and layout of elements of CSS.
    The elements are:
        - Margin - It removes the area around the border. It is transparent.
        - Border - It represents the area around the padding
        - Padding - It removes the area around the content. It is transparent.
        - Content - It represents the content like text, images, etc.

 */

/* Question 10: Border box and Content box
    Border-box consists of properties such as content, padding, and the border with respect to height and width.

    However, Content-box is a default value property used for the box-sizing as well as it helps to add border and
    padding to give proper height and width to the box without having a border and padding properties.

 */

/* Question 11: Z-index
    The z-index property determines the stacking order of positioned elements along the z-axis. Elements with a higher
    z-index value appear on top of elements with lower values.

 */

/* Question 12: Positions in CSS
    1. Relative: Positions an element relative to its normal position.
    2. Absolute: Positions an element relative to its nearest positioned ancestor.
    3. Fixed: Positions an element relative to the browser window, staying fixed even during scrolling.
    4. Static: It is the default positioning of the element with the normal flow of the webpage. If we do not mention
    any position then it is static by default.
    5. Sticky: A sticky element toggles between relative and fixed , depending on the scroll position.  It is
    positioned relative until a given offset position is met in the viewport - then it "sticks" in place

 */

/* Question 13: Difference between margin and padding
    Margin: Clears an area outside the border. It is the space between the border and surrounding elements.
    Padding: Clears an area inside the border. It is the space between the content and the border.

 */

/* Question 14: Purpose of media queries
    Media queries allow you to apply different styles based on device characteristics such as screen width, height,
    and orientation. They are commonly used in responsive web design.

 */

/* Question 15: Difference between em and rem units.
    em: Relative to the font-size of its nearest parent or the element itself.
    rem: Relative to the font-size of the root element (<html>)

 */

/* Question 16: CSS Opacity
    The CSS opacity property is used to specify the transparency of an element. In simple word, you can say that it
    specifies the clarity of the image.

 */

/* Question 17: The float property
    The CSS float property is used to move the image to the right or left along with the texts to be wrapped around it.
    It doesn't change the property of the elements used before it.

 */

/* Question 18: The difference between visibility: hidden and display: none
    visibility: hidden hides the element, but it occupies space and affects the layout of the document.
    display: none also hides the element but not occupy space. It will not affect the layout of the document.
 */

/* Question 19: Which type of CSS holds the highest priority
    1. As Inline has the highest priority, any styles that are defined in the internal and external style sheets are
    overridden by Inline styles.
    2. Internal or Embedded stands second in the priority list and overrides the styles in the external style sheet.
    3. External style sheets have the least priority. If there are no styles defined either in the inline or internal
    style sheet then external style sheet rules are applied for the HTML tags.

 */

/* Question 20: Difference between CSS border and outline
    CSS border properties allow us to set the style, color, and width of the border.
    CSS outline property allows us to draw a line around the element, outside the border.

 */