// 1. Declare global customerName using var
var customerName = 'bob';

// 2. upperCaseCustomerName(): converts the global customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. setBestCustomer(): creates a global variable bestCustomer and sets it to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. overwriteBestCustomer(): overwrites the global bestCustomer variable to 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a global constant leastFavoriteCustomer with any initial value
const leastFavoriteCustomer = 'some customer';

// 6. changeLeastFavoriteCustomer(): attempts to modify the constant — test will expect an error
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will throw a TypeError in strict mode
}
