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
    if(this.year != null && this.month != null && this.day != null) {
      let birthDate = new Date(this.year, this.month, this.day);
      let currentDate = new Date();
      let ageDiff = currentDate.getTime()-birthDate.getTime();//age diff in milliseconds
      let ageYears = ageDiff/31557600000;//divide by number of milliseconds in a year
      return parseFloat(ageYears.toFixed(0));//return age in earth years to rest of app
    }
    console.log("3nd Conditional not reached.");//log conditional
  }
  //Calculates the difference in seconds between two dates
  calculateAgeDiff() {
    if(this.year != null) {
      let ageSeconds = this.calculateAge()*31557600;//define a new variable equal to seconds lived
      let otherDate = new Date(this.year, this.month, this.day);//define another variable equal to milliseconds since another date
      let temp = ageSeconds-(otherDate.getTime()/1000);//define a third variable equal to the difference in seconds between those dates
      return parseFloat(temp.toFixed(0));//return 'pass' and number ofseconds between two dates
    }
    console.log("Conditional not reached.");//log conditional
  }
  //calculates age on Mercury based on calculateAge()
  calculateAgeOnMercury() {
    if(this.year != null && this.month != null && this.day != null) {

      return this.calculateAge()/0.24;//return age on Mercury by mulitplying Earth age by 0.24
    }
    console.log("4thConditional not reached.");//log conditional
  }
  //alculates age on Venus based on calculateAge()
  calculateAgeOnVenus() {
    if(this.year != null && this.month != null && this.day != null) {
      return this.calculateAge()/0.62;//return age on Venus by mulitplying Earth age by 0.62
    }
    console.log("5th Conditional not reached.");//log conditional
  }
  //calculates age on Mars based on calculateAge()
  calculateAgeOnMars() {
    if(this.year != null && this.month != null && this.day != null) {
      return this.calculateAge()/1.88;//return age on Mars by mulitplying Earth age by 1.88
    }
    console.log("6th Conditional not reached.");//log conditional
  }
  //calculates age on Jupiter based on calculateAge()
  calculateAgeOnJupiter() {
    if(this.year != null && this.month != null && this.day != null) {
      return this.calculateAge()/11.86;//return age on Jupiter by mulitplying Earth age by 11.86
    }
    console.log("7th Conditional not reached.");//log conditional
  }
  //calculates life expectancy based on calculateAge() and an arbitrary number chosen to represent an average life-span
  calculateEarthLifeExpectancy() {
    if(this.year != null && this.month != null && this.day != null) {
      let lifeExpectancy = 85;//define local variable for life expectancy
      let currentAge = this.calculateAge();//locally scope current Earth age
      if(currentAge < lifeExpectancy) {
        return "You've yet to reach the average life expectancy."
      }
      else {
        return "You have exceeded the average life expectancy by: " + parseFloat( currentAge - lifeExpectancy ) + " years.";//return age difference
      }
    }
    console.log("8th Conditional not reached.");//log conditional
  }
  calculateMercuryLifeExpectancy() {
    if(this.year != null && this.month != null && this.day != null) {
      let lifeExpectancy = 85;//define local variable for life expectancy
      let currentAge = this.calculateAge();//locally scope current Earth age
      if(currentAge < lifeExpectancy) {
        return "You've yet to reach the average life expectancy."
      }
      else {
        return "You have exceeded the average life expectancy by: " + parseFloat( currentAge - lifeExpectancy ) + " years.";//return age difference
      }
    }
    console.log("8th Conditional not reached.");//log conditional
  }
  calculateVenusLifeExpectancy() {
    if(this.year != null && this.month != null && this.day != null) {
      let lifeExpectancy = 85;//define local variable for life expectancy
      let currentAge = this.calculateAge();//locally scope current Earth age
      if(currentAge < lifeExpectancy) {
        return "You've yet to reach the average life expectancy."
      }
      else {
        return "You have exceeded the average life expectancy by: " + parseFloat( currentAge - lifeExpectancy ) + " years.";//return age difference
      }
    }
    console.log("8th Conditional not reached.");//log conditional
  }
  calculateMarsLifeExpectancy() {
    if(this.year != null && this.month != null && this.day != null) {
      let lifeExpectancy = 85;//define local variable for life expectancy
      let currentAge = this.calculateAge();//locally scope current Earth age
      if(currentAge < lifeExpectancy) {
        return "You've yet to reach the average life expectancy."
      }
      else {
        return "You have exceeded the average life expectancy by: " + parseFloat( currentAge - lifeExpectancy ) + " years.";//return age difference
      }
    }
    console.log("8th Conditional not reached.");//log conditional
  }
  calculateJupiterLifeExpectancy() {
    if(this.year != null && this.month != null && this.day != null) {
      let lifeExpectancy = 85;//define local variable for life expectancy
      let currentAge = this.calculateAge();//locally scope current Earth age
      if(currentAge < lifeExpectancy) {
        return "You've yet to reach the average life expectancy."
      }
      else {
        return "You have exceeded the average life expectancy by: " + parseFloat( currentAge - lifeExpectancy ) + " years.";//return age difference
      }
    }
    console.log("8th Conditional not reached.");//log conditional
  }

}
