# Event Booking Management System

## Overview

This repository contains the implementation of an Event Booking Management System, which includes a backend application built with C# (.NET Core) and a frontend application built with React.js and TypeScript. 
I'm able to complete the API and the UI implementation, however due to time constraints, I have not completed the integration fully.

## Project Structure

- **EventsVendor.API**: Contains the backend implementation of the system, including the API endpoints for event management(/events), booking system(/tickets), and wallet(/wallet).
- **EventsVendor.UI**: Contains the frontend application for interacting with the system. Due to time constraints, the API integration into frontend is still in progress.

## Backend Implementation

The backend is implemented using C# (.NET Core) and follows a clean architecture pattern. The key features include:

- **Event Management**: CRUD operations for managing events.
- **Booking System**: Users can view, book, and cancel bookings for events. The system updates the available tickets accordingly.
- **Wallet Integration**: Users have a virtual wallet, can top up their balance (simulated).

### Navigating to the Backend Folder

To view the backend implementation details:

1. Navigate to the `EventsVendor.API` folder.
2. Open the `README.md` file in this folder for a detailed description of how to run the backend implementation.

```bash
cd EventsVendor.API
```

### Navigating to the Frontend Folder

To view the backend implementation details:

1. Navigate to the `EventsVendor.UI` folder.
2. Open the `README.md` file in this folder for a detailed description of how to run the backend implementation.

```bash
cd EventsVendor.UI
```

### API Contract

I have also provided a postman collection of all the API endpoints, to view;
1.  Navigate to the `EventsVendor.Contract`
2.  Import the `EventsVendor.postman_collection.json` file to your postman

