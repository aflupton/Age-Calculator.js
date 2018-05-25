import { Age } from './../src/age.js';

describe('Age', function() {
  let reusableDate;

  beforeEach(function() {
    reusableDate = new Age(1991, 2, 21);
  });

  it('should test whether an age input is valid', function() {
    expect(reusableDate.calculateAgeValidity()).toEqual(true);
  });
  it('should test for age in years', function() {
    expect(reusableDate.calculateAge()).toEqual(27);
  });
  it('should test for number of seconds between two dates', function() {
    expect(reusableDate.calculateAgeDiff()).toEqual(182512800);
  });
  it('should test for age on Mercury', function() {
    expect(reusableDate.calculateAgeOnMercury()).toEqual(27/0.24);
  });
  it('should test for age on Venus', function() {
    expect(reusableDate.calculateAgeOnVenus()).toEqual(27/0.62);
  });
  it('should test for age on Mars', function() {
    expect(reusableDate.calculateAgeOnMars()).toEqual(27/1.88);
  });
  it('should test for age on Jupiter', function() {
    expect(reusableDate.calculateAgeOnJupiter()).toEqual(27/11.86);
  });
  it('should test for remaining life expectancy on Earth, under', function() {
    expect(reusableDate.calculateEarthLifeExpectancy()).toEqual("You've yet to reach the average life expectancy.");
  });
  it('should test for remaining life expectancy on Earth, over', function() {
    let reusableDate = new Age(1920, 2, 21);
    expect(reusableDate.calculateEarthLifeExpectancy()).toEqual('You have exceeded the average life expectancy by: 13 years.');
  });
  it('should test for remaining life expectancy on Mercury', function() {
    expect(reusableDate.calculateMercuryLifeExpectancy()).toEqual(58/0.24);
  });
  it('should test for remaining life expectancy on Venus', function() {
    expect(reusableDate.calculateVenusLifeExpectancy()).toEqual(58/0.62);
  });
  it('should test for remaining life expectancy on Mars', function() {
    expect(reusableDate.calculateMarsLifeExpectancy()).toEqual(58/1.88);
  });
  it('should test for remaining life expectancy on Jupiter', function() {
    expect(reusableDate.calculateJupiterLifeExpectancy()).toEqual(58/11.86);
  });
  it('should test for whether life expectancy has been exceeded', function() {
    expect(reusableDate.calculateLifeExpectancy()).toEqual();
  })
});
