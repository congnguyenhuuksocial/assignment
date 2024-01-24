# Test Question No. 1
## Backend Code structure
```
src/
├── modules/             # Feature modules
│   ├── crypto-backend/
│   │   ├── dto/         # Data transfer objects
│   │   ├── entities/    # TypeORM entities (if using TypeORM)
│   │   ├── interfaces/  # Interface definitions for services and repositories
│   │   ├── services/    # Application business logic
│   │   ├── controllers/ # Controllers that handle HTTP requests
│   │   └── ...
├── common/              # Shared utilities, constants, and common functionality
├── config/              # Configuration management
├── core/                # Core business logic, independent of the application layer
└── main.ts              # Entry file
```
### Implement Core Business Logic
In the core/ directory, implement your business logic that is independent of the application layer. This might include domain models, business rules, etc.

1. Implement Feature Modules
   In the modules/ directory, each feature of the application gets its module. For instance, if you have a user management feature, you might have a user/ module with controllers, services, and repositories.

2. Dependency Injection
   Use NestJS's dependency injection to decouple your class dependencies. For example, inject services into your controllers and repositories into your services.

3. Controllers and DTOs
   Controllers in each module handle HTTP requests and responses. Data transfer objects (DTOs) are used to define the format of data for requests and responses.

4. Services and Interfaces
   Services contain the application's business logic. Interfaces define contracts for services and repositories, ensuring a clear separation between layers.

5. Exception Filters and Pipes
   Use exception filters for handling and formatting exceptions. Use pipes for validation and data transformation.
5. Configuration
    Use the config/ directory for configuration management. NestJS can integrate with configuration libraries like config or dotenv for environment-based configurations.

6. Environment and Security
    Ensure that environment variables are used for sensitive data (like database credentials). Implement security best practices, including input validation, output encoding, and dependency management.

7. Database Integration
    If your application uses a database, integrate a module like TypeORM or Sequelize. Entities in modules/*/entities/ represent database models.

8. Testing
    Write unit tests for your services and integration tests for your controllers. NestJS works well with Jest and Supertest for testing.

9. Documentation
    Use tools like Swagger to document your REST API endpoints.

10. Version Control
    Initialize a Git repository for your project, and consider including a .gitignore file configured for a Node.js project.

11. Dockerize (Optional)
    For containerization, create a Dockerfile and optionally a docker-compose.yml file.
## Frontend Code structure

## Result for Test Question No. 1
![Screenshot 2024-01-24 at 23.44.17.png](images%2FScreenshot%202024-01-24%20at%2023.44.17.png)

## Test Question No. 2
### Test Case 1:
```
Explanation: The maximum profit can be obtained by buying at day 1 (price 4) and selling at day 4 (price 6), resulting in a profit of 2.
const stockPriceList1 = [4, 5, 2, 3, 6];
console.log(calculateMaxProfit(stockPriceList1)); // Output: 4
```

### Test Case 2:
```
const stockPriceList2 = [7, 6, 4, 3, 1];
console.log(calculateMaxProfit(stockPriceList2)); // Output: 0
Explanation: No profit can be achieved as the stock price is continuously decreasing.
```

### Test Case 3:
```
const stockPriceList3 = [7, 9, 10, 5, 2, 3, 1];
console.log(calculateMaxProfit(stockPriceList3)); // Output: 3
Explanation: The maximum profit can be obtained by buying at day 4 (price 2) and selling at day 6 (price 3), resulting in a profit of 1.
```

### Test Case 4:
```
const stockPriceList4 = [5];
console.log(calculateMaxProfit(stockPriceList4)); // Output: 0
Explanation: No profit can be obtained as there is only one price.
```

### Test Case 5:
```
const stockPriceList5 = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(calculateMaxProfit(stockPriceList5)); // Output: 0
Explanation: No profit can be achieved as the stock price is continuously decreasing.
```
