

const value =1
    // Check if a value is an integer
    typeof value === 'number' && isFinite(value) && Math.floor(value) === value;

  
  // Check if a value is a positive integer
  isInteger(value) && value > 0;

  
  // Check if a value is a non-negative integer (including zero)
  isInteger(value) && value >= 0;
 
  

  // Check if a value is a string
    function isString(value) {
    return typeof value === 'string';
     }
  








     
  // Check if a string is empty (contains no characters)
  function isEmptyString(value) {
    return isString(value) && value.trim() === '';
  }
  
  // Check if a string is not empty
  function isNotEmptyString(value) {
    return isString(value) && value.trim() !== '';
  }
  
  // Check if a string has a minimum length
  function hasMinLength(value, minLength) {
    return isString(value) && value.length >= minLength;
  }
  
  // Check if a string has a maximum length
  function hasMaxLength(value, maxLength) {
    return isString(value) && value.length <= maxLength;
  }
  
  // Check if a string matches a specific pattern using a regular expression
  function matchesPattern(value, pattern) {
    return isString(value) && pattern.test(value);
  }
  