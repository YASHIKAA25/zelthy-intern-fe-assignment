# Slot Booking Application

A modern, responsive web application for managing availability slots and scheduling, built with React and TypeScript.

🔗 https://enchanting-praline-18103a.netlify.app/

![Slot Booking App Screenshot](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2068)

## Features

- 📅 Weekly availability management
- 🌍 Timezone support with automatic detection
- ⚡ Real-time slot updates
- 📱 Responsive design for mobile and desktop
- 🎨 Clean and modern UI using Tailwind CSS
- 🔄 Copy availability between days
- ⌚ Intuitive time slot picker
- 🎯 Efficient state management with Zustand

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Date/Time Handling**: date-fns
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Headless UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YASHIKAA25/zelthy-intern-fe-assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd zelthy-intern-fe-assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
zelthy-intern-fe-assignment/
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── TimeSlotPicker.tsx
│   │   └── TimezoneSelect.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── store
│   │   └── availabilityStore.ts
│   ├── types
│   │   └── index.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features Explained

### Availability Management

Users can:
- Set availability for different days of the week
- Add multiple time slots per day
- Remove time slots
- Copy availability between days

### Timezone Support

- Automatic timezone detection
- Manual timezone selection
- All times are stored and displayed in the user's local timezone

### State Management

The application uses Zustand for state management, providing:
- Centralized state for availability slots
- Easy-to-use actions for managing slots
- Persistent state across page reloads

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [date-fns](https://date-fns.org/) for date manipulation
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [Headless UI](https://headlessui.com/) for accessible UI components

## Contact

YASHIKAA25 - [GitHub](https://github.com/YASHIKAA25)

Project Link: [https://github.com/YASHIKAA25/zelthy-intern-fe-assignment](https://github.com/YASHIKAA25/zelthy-intern-fe-assignment)


