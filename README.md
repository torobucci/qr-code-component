# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - QR code component solution](#frontend-mentor---qr-code-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### Screenshot

![](../images/screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/torobucci/qr-code-component)
- Live Site URL: [Live site](https://torobucci.github.io/qr-code-component/)

## My process

Install tailwind following this [Tailwind CLI guide](https://tailwindcss.com/docs/installation)

**Body**

 Assign the `h-screen flex flex-col justify-center bg-lightGrey items-center` class to the `<body>` tag. This sets the body height to full screen, applies a flexbox layout, centers content both vertically and horizontally, and sets a light grey background.

**Create the Main Container**:

 Add a `<div>` element with the class `p-3 bg-white rounded-xl max-w-[18rem]`. This creates a white background container with padding, rounded corners, and a maximum width of 18 rem.

**Add Content to the Main Container**:

 Within the main container, add another `<div>` with the class `flex flex-col gap-2.5 justify-center text-center font-outfit`. This creates a flex container with a vertical layout, centered content, and a custom outfit font.

**Add the image**

 Insert an `<img>` tag with the `rounded-xl` class and appropriate src and alt attributes to display the QR code image with rounded corners.

**Add the Heading**:

 Use an `<h4>` element with the class `text-lg font-bold mx-3`. This creates a bold, large heading with horizontal margins.

**Add the Paragraph**:

 Add a `<p>` element with the class `text-grayishBlue text-base font-[400] mx-3 mb-4`. This creates a paragraph with a greyish blue color, normal font weight, horizontal margins, and a bottom margin.

### Built with

- Semantic HTML5 markup
- [TailwindCss](https://tailwindcss.com) - JS library
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned that by default, the body doesn't have a height of 100vh.

### Continued development

I want to focus on the positioning of elements as it seems I haven't grasped it well.


### Useful resources

- [TailwindCSS](https://tailwindcss.com) - Tailwind CSS stands out for its rapid styling capabilities. With Tailwind, I can instantly apply styles to elements as I create them, eliminating concerns about class conflicts or overriding styles.


## Author

- Website - [Kevin Toro](https://kevintoro.vercel.app/)
- Frontend Mentor - [@torobucci](https://www.frontendmentor.io/profile/torobucci)
