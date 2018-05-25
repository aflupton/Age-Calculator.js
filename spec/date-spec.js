describe('Date', function() {
  it('should test whether a date input is valid', function() {
    let testDate = new Date(1991, 2, 21, 17, 0, 0)
    expect(testDate.year).toEqual(1991);
    expect(testDate.month).toEqual(2);
    expect(testDate.day).toEqual(21);
    expect(testDate.hour).toEqual(17);
    expect(testDate.minute).toEqual(0);
    expect(testDate.second).toEqual(0);
  });
  it('should test', function() {
    //test goes here
  });
});
