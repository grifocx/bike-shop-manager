# Bike Shop Service Manager

A modern web application for managing bike shop service tickets using Lean manufacturing principles and Kanban board interface.

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bike-shop-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install TypeScript types and additional dependencies**
   ```bash
   npm install --save-dev @types/react @types/node @types/react-dom @types/react-beautiful-dnd
   npm install react-beautiful-dnd @heroicons/react date-fns uuid
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## Features

- 🎯 **Kanban Board**: Visualize and manage service tickets across different statuses
- ✨ **Drag and Drop**: Easily update ticket status by dragging and dropping
- 🚀 **Quick Add**: Add new service tickets with a simple form
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Clean and intuitive user interface

## Usage

1. **Create a New Ticket**
   - Click the "New Ticket" button
   - Fill in the ticket details
   - Click "Create Ticket"

2. **Update Ticket Status**
   - Drag and drop tickets between columns to update their status
   - Statuses include: Backlog, In Progress, In Review, and Completed

3. **View Ticket Details**
   - Click on any ticket to view or edit its details

## Project Structure

```
bike-shop-manager/
├── public/             # Static files
├── src/
│   ├── app/           # Next.js app router
│   ├── components/     # Reusable React components
│   └── styles/         # Global styles
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## Dependencies

- **Next.js**: React framework
- **React**: UI library
- **TypeScript**: Type checking
- **Tailwind CSS**: Styling
- **react-beautiful-dnd**: Drag and drop functionality
- **Hero Icons**: Beautiful icons
- **date-fns**: Date utilities
- **uuid**: Unique ID generation

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or feature requests, please open an issue in the repository.
