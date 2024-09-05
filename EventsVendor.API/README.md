# EventsVendor API

## Overview

EventsVendor is a .NET 7.0-based API that facilitates event management, ticket booking, and user authentication with role-based access using JWT. The API features:
- Event creation, updating, deletion, and viewing
- Ticket booking and cancellation
- User wallet system with funding, debiting, and transaction history
- User registration and login with JWT authentication
- Role-based access control (`Admin` and `User` roles)

## Prerequisites

- [.NET 7.0 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)
- A relational database (e.g., SQL Server, MySQL)
- Optional: [Postman](https://www.postman.com/) or [cURL](https://curl.se/) for API testing

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hassanyahya400/EventsVendor.git
cd EventsVendor.API
```

### 2. Set Up the Database Connection String

1. Open the `appsettings.json` file.
2. Replace the `"DefaultConnection"` placeholder in the `"ConnectionStrings"` section with your actual database connection string:

```json
"ConnectionStrings": {
    "DefaultConnection": "Server=your_server;Database=your_database;User=your_user;Password=your_password;"
}
```

Alternatively, you can use environment variables or [User Secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets) to store your connection string securely.

### 3. Run Migrations

Ensure your database is set up correctly by running migrations:

```bash
dotnet ef database update
```

This will create the necessary tables in your database.

### 4. Seed Roles (Optional)

Roles `Admin` and `User` will be automatically seeded when the application starts. If you need to add custom roles, modify the `Program.cs` as needed.

### 5. Build and Run the Application

To build and run the application locally:

```bash
dotnet build
dotnet run
```

By default, the API will be hosted at `https://localhost:5001` or `http://localhost:5000`.

### 6. Test the API

Use Postman or cURL to interact with the API. Some example endpoints:

- **Register a User**: `POST /api/auth/register`
- **Login a User**: `POST /api/auth/login`
- **Create an Event**: `POST /api/events`
- **Book a Ticket**: `POST /api/tickets/book`
- **Fund Wallet**: `POST /api/wallet/fund`

Ensure that you include a valid JWT token in the `Authorization` header for endpoints that require authentication.

### 7. Notes

- Ensure the `JWT_KEY` and `DefaultConnection` are securely stored and not hardcoded in the source code.
- Modify the `JwtSettings` in `appsettings.json` if you need to adjust the token expiration or other JWT-related settings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contribution

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Contact

For any questions or issues, please reach out via the repository's issue tracker.
```

This `README.md` provides a comprehensive guide that will help others set up, run, and test the application, while also addressing important considerations like environment variables and database connection strings
