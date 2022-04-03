let myCourses = [
    "Learn CSS Animations",
    "UI Design Fundamentals",
    "Intro to Clean Code",
  ];
  
  function returnSingleParameter(arr) {
    //c1
    for (i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    //c2
    // let para = "";
    // for (let i = 0; i < arr.length; i++) {
    //   para += arr[i] + ", ";
    // }
    // return para;
  }
  //c1
  returnSingleParameter(myCourses);
  //c2
  //console.log(returnSingleParameter(myCourses));


  // Create a function that takes a single parameter, an array,
  // and logs all the items of the array to the console.
  // Call the function while passing in myCourses as an argument
  