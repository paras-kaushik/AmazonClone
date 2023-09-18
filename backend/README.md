

# API Documentation for Ecommerce Project API with Node.js and Express

**Base URL**: `http://localhost:5454`

## Authentication

All protected endpoints require the `Authorization` header with a valid token.

## Endpoints

### Update Cart Item

- **URL**: `/api/cart_items/{cartItemId}`
- **Method**: PUT
- **Tags**: cart-item-controller
- **Request Parameters**:
  - `cartItemId` (integer, int64, required)
- **Request Headers**:
  - `Authorization` (string, required)
- **Request Body**:
  ```json
  {
    "$ref": "#/components/schemas/CartItem"
  }
  ```
- **Responses**:
  - 200 OK
    ```json
    {
      "$ref": "#/components/schemas/CartItem"
    }
    ```

### Delete Cart Item

- **URL**: `/api/cart_items/{cartItemId}`
- **Method**: DELETE
- **Tags**: cart-item-controller
- **Request Parameters**:
  - `cartItemId` (integer, int64, required)
- **Request Headers**:
  - `Authorization` (string, required)
- **Responses**:
  - 200 OK
    ```json
    {
      "$ref": "#/components/schemas/ApiResponse"
    }
    ```

### Add Item to Cart

- **URL**: `/api/cart/add`
- **Method**: PUT
- **Tags**: cart-controller
- **Request Headers**:
  - `Authorization` (string, required)
- **Request Body**:
  ```json
  {
    "$ref": "#/components/schemas/AddItemRequest"
  }
  ```
- **Responses**:
  - 200 OK
    ```json
    {
      "$ref": "#/components/schemas/ApiResponse"
    }
    ```

... (continue documenting other endpoints)

## Components

### Schemas

- CartItem
- ApiResponse
- AddItemRequest
- Product
- Order
- User
- AuthResponse
- ReviewRequest
- Review
- RatingRequest
- Rating
- PaymentLinkResponse
- Address
- CreateProductRequest
- PageProduct

## Dependecies
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- nodemon
- razorpay
