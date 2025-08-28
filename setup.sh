#!/bin/bash

# Install dependencies
npm install

# Install TypeScript types
npm install --save-dev @types/react @types/node @types/react-dom @types/react-beautiful-dnd

# Install required packages
npm install react-beautiful-dnd @heroicons/react date-fns uuid

echo "Setup complete! Run 'npm run dev' to start the development server."
