function checkTriangle() {
    // Get the values of the three sides entered in the form
    const side1 = Number(document.getElementById("side1").value);
    const side2 = Number(document.getElementById("side2").value);
    const side3 = Number(document.getElementById("side3").value);
    
    // Check if any of the inputs are empty
    if (side1 === "" || side2 === "" || side3 === "") {
      document.getElementById("result").innerHTML = "Please enter all the sides of the triangle.";
    }
    // Check if the entered values form a triangle
    else if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
      // Check if the triangle is equilateral
      if (side1 === side2 && side2 === side3) {
        document.getElementById("result").innerHTML = "The entered values form an equilateral triangle.";
        document.getElementsByClassName("itemDesc")[0].innerHTML = "<p> An equilateral triangle is a triangle with three sides of equal length. </p>";
      }
      // Check if the triangle is isosceles
      else if (side1 === side2 || side2 === side3 || side1 === side3) {
        document.getElementById("result").innerHTML = "The entered values form an isosceles triangle.";
        document.getElementsByClassName("itemDesc")[0].innerHTML = "<p> An isosceles triangle is a triangle with at least two sides of equal length. </p>";
      }
      // If the triangle is not equilateral or isosceles, it must be scalene  
      else {
        document.getElementById("result").innerHTML = "The entered values form a scalene triangle.";
      }
    }
    // If the entered values do not form a triangle, display an error message
    else {
      document.getElementById("result").innerHTML = "The entered values do not form a triangle.";
    }
  }
  

  function clearResult() {
    document.getElementById("result").innerHTML = "";
    }
}