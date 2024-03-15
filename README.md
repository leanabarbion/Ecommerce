E-Commerce Application: https://ecommerce-mcsbt-g1.storage.googleapis.com/index.html

Application Functionality:

1. State Management with useState: Uses React's useState hook to manage application state, specifically for tracking items in the shopping cart and filtering products.
2. Effectful Operations with useEffect: Utilizes useEffect for side effects, notably for loading cart items from localStorage when the application loads, ensuring persistence of cart data across sessions.
3. Dynamic Product Listing: The ProductList component dynamically lists products from a local JSON inventory (inventory.json). It supports filtering by product name and category, enhancing user experience by allowing users to easily find products.
4. Cart Functionality:
   Add to Cart: When a user adds a product to the cart, the application checks against the inventory for available quantity. If the quantity of the selected item is within the inventory limit, the item is added (or its quantity is updated) in the cart. If the limit is reached, it alerts the user.
   Remove from Cart: Users can remove items from the cart. This updates the cart state and synchronizes changes with localStorage, ensuring that the cart remains updated across page reloads.
5. Local Storage for Persistence: Uses localStorage to persist the cart's state across browser sessions, loading existing cart items upon application initialization and updating localStorage whenever the cart changes.
6. UI Components and Styling: Incorporates Bootstrap for styling and organizes the application into two main components:
   ProductList Component: Displays products based on the applied filters. Each product card shows an image, name, price, category, and an "Add to Cart" button.
   Cart Component: (implementation not shown) Presumably manages and displays cart items, offering functionality to view and remove selected items.
7. Product and Cart Interaction: The App component orchestrates the interaction between the product listing and the cart. It handles adding and removing products from the cart and ensures the UI reflects these actions.
