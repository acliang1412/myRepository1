# Anime Album Website

A visually appealing, responsive single-page website showcasing a collection of anime-themed images. This project is built using Bootstrap and features custom styling to create a vibrant and engaging user experience.

## Features

- **Responsive Design**: The layout adapts smoothly to different screen sizes, from mobile phones to desktops.
- **Image Gallery**: A clean, grid-based gallery of anime images using Bootstrap's card component.
- **Interactive Hover Effects**: Cards scale up and show a shadow on hover, providing visual feedback to the user.
- **Modal Image Viewer**: Clicking the "View" button on any card opens a modal with a larger version of the image and a brief recommendation or description.
- **Custom Theming**: The site uses a custom color scheme, a dynamic background, and unique fonts to create a distinct "anime" feel.
- **Background Blur Effect**: When the modal is open, the background content blurs, focusing the user's attention on the modal.

## Technologies Used

- **HTML5**: For the structure and content of the website.
- **CSS3**: For custom styling, animations, and responsive design.
- **Bootstrap 5.3**: As the core framework for layout, components (cards, modal, navbar), and grid system.
- **Google Fonts**: For custom typography (`Mochiy Pop One` and `Yarndings 12`).
- **JavaScript**: For handling the dynamic content of the Bootstrap modal.

## Project Structure

```
Bootstrap Album Challenge/
├── images/
│   ├── anime1.jpg
│   ├── ... (other images)
│   └── background.jpg
├── index.html      # The main HTML file
├── styles.css      # Custom stylesheet
└── README.md       # Project information
```

## How to Use

1.  Clone or download the repository.
2.  Ensure all images listed in `index.html` are present in the `images/` directory.
3.  Open the `index.html` file in any modern web browser.

## Customization

To add a new image to the gallery, simply copy one of the `<div class="col">...</div>` blocks in `index.html` and update the `src` attribute of the `<img>` tag, the card title, the card text, and the hidden recommendation text.