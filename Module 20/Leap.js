function leap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Leap year");
    } else {
      console.log("Not leap year");
    }
  }
  
  leap(2002); // Output: Not leap year
  leap(2000); // Output: Leap year
  leap(2024); // Output: Leap year
  leap(2100); // Output: Not leap year
  