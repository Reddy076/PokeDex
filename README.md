# PokeDex Application

A responsive web application that allows users to browse and search through the first 151 Pokemon. Built with React and Vite, this PokeDex provides detailed information about each Pokemon including stats, moves, and images.

## Features

- Browse all 151 original Pokemon
- View detailed information for each Pokemon:
  - Stats (HP, Attack, Defense, etc.)
  - Moves with descriptions
  - Multiple sprite images
  - Type classifications
- Search functionality by name or Pokedex number
- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode support
- Local storage caching for faster loading
- Modal popups for move details

## Technologies Used

- **React** - Frontend library for building user interfaces
- **Vite** - Build tool for fast development and production builds
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with custom Fanta.css framework
- **PokeAPI** - RESTful API providing Pokemon data
- **LocalStorage** - Client-side data caching

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Reddy076/PokeDex.git
   ```

2. Navigate to the project directory:
   ```bash
   cd PokeDex
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Top navigation header
│   ├── SideNav.jsx      # Pokemon list sidebar
│   ├── PokeCard.jsx     # Main Pokemon details view
│   ├── TypeCard.jsx     # Pokemon type display
│   └── Modal.jsx        # Move details modal
├── utils/
│   └── index.js         # Utility functions and Pokemon data
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
├── index.css            # Main stylesheet
└── fanta.css            # Custom CSS framework
```

## Responsive Design

The application is fully responsive and adapts to different screen sizes:
- **Mobile**: Collapsible sidebar with hamburger menu
- **Tablet**: Expanded layout with visible sidebar
- **Desktop**: Full-width layout optimized for larger screens

## Caching

Pokemon data is cached in LocalStorage to reduce API calls and improve loading times on subsequent visits.

## API Usage

This application uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data. The app implements proper error handling and caching to ensure a smooth user experience even with network issues.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokemon data
- [Fanta.css](https://github.com/jamezmca/fantacss) for the CSS framework inspiration
- Pokemon is a trademark of Nintendo, Game Freak, and Creatures Inc.

## Contact

For questions or feedback, please open an issue on the GitHub repository.