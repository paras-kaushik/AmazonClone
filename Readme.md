## SAMPLE DOC: https://github.com/paras-kaushik/WhatsappClone
# Amazon Clone Project
## Functional Requirements
- User should be able to see the products added by admin
- User should be able to "Add to cart" the listed products
- User should be able to update/add/delete cart
## Non Functional Requirements
- Available
-

# Project Working
 ## Authentication

# API ENDPOINTS
## Authentication Module
| API ENDPOINT        | TYPE    | ACCESS    | Description                     |
|---------------------|---------|-----------|---------------------------------|
| /api/user/          | POST    | Public    | Register/SignIn new user       |
| /api/user/login     | POST    | Public    | Authenticate the user          |
| /api/user?search=paras | GET | Protected | Get or Search users by name or email matching with the search query |

## Admin Module
| API ENDPOINT        | TYPE    | ACCESS    | Description                     |
|---------------------|---------|-----------|---------------------------------|
| /api/user/          | POST    | Public    | Register/SignIn new user       |
| /api/user/login     | POST    | Public    | Authenticate the user          |
| /api/user?search=paras | GET | Protected | Get or Search users by name or email matching with the search query |
## Orders Module

| API ENDPOINT        | TYPE    | ACCESS    | Description                     |
|---------------------|---------|-----------|---------------------------------|
| /api/user/          | POST    | Public    | Register/SignIn new user       |
| /api/user/login     | POST    | Public    | Authenticate the user          |
| /api/user?search=paras | GET | Protected | Get or Search users by name or email matching with the search query |
# BUGS
## User Not signed in flow
- Add to Cart not working

## User signed in Flow
- Cart total not updating on quantity increase
## Admin portal Flow
- order journey not working after "shipped"





## Who is picking what (30 Sep)
1. ## Paras Kaushik
    - admin Flow
    - /api/admin/orders - adminOrderRoutes
2. ## Naman Gupta
    - order flow
    - Resolving bugs in cart flow
3. ## Dipesh Sharma
    - User flow
