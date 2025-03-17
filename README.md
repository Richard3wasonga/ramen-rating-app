# Ramen_Rater
# Ramen Rater Project

## Description
The **Ramen Rater** project is a simple web application that allows users to browse, rate, and add new ramen dishes. It dynamically displays ramen options, updates details when a dish is clicked, and allows users to submit their own favorite ramen dishes through a form.

## Features
- Displays a list of ramen dishes with images.
- Clicking on an image updates the ramen details section.
- Users can add new ramen dishes via a form.
- Newly added ramens appear in the menu and can be interacted with.
- Responsive design for better user experience.

## Technologies Used
- HTML
- CSS
- JavaScript (DOM Manipulation)

## Installation
Since this project is purely front-end, no additional installation is required beyond downloading or cloning the repository. To run the project:

1. Clone this repository:
   ```sh
   git clone https://github.com/Richard3wasonga/ramen-rating-app
   ```
2. Navigate to the project directory after cloning:
   ```sh
   cd ramen-rating-app
   ```
3. Open `index.html` in your browser.

## Usage
- Click on a ramen image to view its details.
- Fill out the form and submit to add a new ramen dish.
- Newly added ramen will appear in the menu and can be clicked to view details.

## Code Overview
### HTML Structure
- `index.html` contains:
  - **Header:** Displays the project title.
  - **Image Container (`#image_container`):** Displays ramen images.
  - **Details Section (`#ramen-detail`):** Updates with ramen name, restaurant, rating, and comment when an image is clicked.
  - **Form (`#ramen_form`):** Allows users to add new ramen dishes.

### CSS Styling
- `header`: Sets a black background with white text for the title.
- `#image_container`: Centers the ramen images.
- `#ramen-menu`: Displays images in a flexible, gap-spaced layout.
- `#form_cont`: Styles the form inputs, text area, and button with proper spacing and alignment.
- `#ramen-detail`: Positions the ramen details and ensures an organized layout.
- `.detail-image`: Ensures ramen images are properly displayed.
- `.name` & `.restaurant`: Styled text overlays for ramen name and restaurant.
- `#image_change`: Centers the ramen details section.

### JavaScript Functions
- `displayRamens()`: Renders ramen images in the menu and sets up event listeners.
- `handleClick(ramen)`: Updates the detail section when a ramen image is clicked.
- `addSubmitListener()`: Handles form submissions, adds new ramen data, and updates the menu.
- `main()`: Initializes the application.

### Data Structure
The `ramens` array stores ramen objects containing:
- `id` (Unique identifier)
- `name` (Ramen name)
- `restaurant` (Restaurant name)
- `image` (Image URL)
- `rating` (User rating)
- `comment` (User comment)

## Future Enhancements
- Implement local storage to persist added ramens.
- Add a feature to delete ramen entries.
- Improve styling with CSS animations.

## License
This project is licensed under the MIT License.

## Author
Richard Wasonga - [GitHub Profile](https://github.com/Richard3wasonga)

## Repository
[https://github.com/Richard3wasonga/ramen-rating-app](https://github.com/Richard3wasonga/ramen-rating-app)

