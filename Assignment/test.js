// Import bcryptjs
const bcrypt = require('bcryptjs');

// Example password (this will be the plaintext password you input)
const plaintextPassword = "userPasswor";

// 1. Hashing the password
bcrypt.hash(plaintextPassword, 10, (err, hashedPassword) => {
  if (err) {
    console.error("Error hashing password:", err);
    return;
  }
  
  console.log("Hashed password:", hashedPassword);
  
  // Now you have the hashed password, simulate saving it in a database:
  const storedHashedPassword = hashedPassword;

  // 2. Verifying the password on login (compare entered password with stored hashed password)
  const enteredPassword = "userPassword123"; // Simulate a user entering this password during login

  bcrypt.compare(enteredPassword, storedHashedPassword, (err, isMatch) => {
    if (err) {
      console.error("Error comparing passwords:", err);
      return;
    }

    if (isMatch) {
      console.log("Password match! Login successful.");
    } else {
      console.log("Password does not match. Login failed.");
    }
  });
});

