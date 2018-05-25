export class Age {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  //checks for inputs
  calculateAgeValidity() {
    if(this.year != null || this.month != null || this.day != null) {
      return true;
    }
    console.log("1st Conditional not reached.");
  }
  //calculates age on Earth, using JS Date() method
  calculateAge() {
    if(this.year == null && this.month != null && this.day != null) {
      let birthDate = new Date(this.year, this.month, this.day);
      let currentDate = new Date();
      let ageDiff = currentDate.getTime()-birthDate.getTime();//age diff in milliseconds
      let ageYears = ageDiff/31557600000;//divide by number of milliseconds in a year
      console.log("age: " + ageYears);//attempt to log age in years
      return ageYears;//return age in earth years to rest of app
    }
    console.log("3nd Conditional not reached.");
  }
  //Calculates the difference in seconds between two dates
  // calculateAgeDiff() {
  //   if(this.year != null) {
  //     let date = new Age(this.year, this.month, this.day);
  //     let otherDate = new Date();
  //     let temp = date.getTime()-otherDate.getTime();
  //     return "pass" + (temp/1000);
  //   }
  //   console.log("Conditional not reached.");
  // }
  //calculates age on Mercury based on calculateAge()
  calculateAgeOnMercury() {
    if(this.year == null && this.month != null && this.day != null) {

      return this.calculateAge()*0.24;
    }
    console.log("4thConditional not reached.");
  }
  //alculates age on Venus based on calculateAge()
  calculateAgeOnVenus() {
    if(this.year == null && this.month != null && this.day != null) {
      let birthDate = new Age();
      return this.calculateAge()*0.62;
    }
    console.log("5th Conditional not reached.");
  }
  //calculates age on Mars based on calculateAge()
  calculateAgeOnMars() {
    if(this.year == null && this.month != null && this.day != null) {
      let birthDate = new Date();
      return this.calculateAge()*1.88;
    }
    console.log("6th Conditional not reached.");
  }
  //calculates age on Jupiter based on calculateAge()
  calculateAgeOnJupiter() {
    if(this.year == null && this.month != null && this.day != null) {
      let currentDate = new Date();
      return this.calculateAge()*11.86;
    }
    console.log("7th Conditional not reached.");
  }
  //calculates life expectancy based on calculateAge() and an arbitrary number chosen to represent an average life-span
  calculateLifeExpectancy() {
    if(this.year == null && this.month != null && this.day != null) {
      let lifeExpectancy = 85;
      let currentAge = this.calculateAge();
      if(currentAge <= lifeExpectancy) {
        return "You've yet to reach the average life expectancy."
      }
      else {
        return "You've exceeded the average life expectancy by: x years." + parseFloat(currentAge-lifeExpectancy);
      }
    }
    console.log("8th Conditional not reached.");
  }

}
