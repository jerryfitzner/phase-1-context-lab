/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const createEmployeeRecord = function () {
//     // console.log(`${this[0]}`);
// }




function createEmployeeRecord(array) {
    let employeeObject = {
      firstName: `${array[0]}`,
      familyName: `${array[1]}`,
      title: `${array[2]}`,
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
    return employeeObject;
  }
  
  function createEmployeeRecords(arrays) {
    return arrays.map(function(emp){
            return createEmployeeRecord(emp);
        })
  }
  
  function createTimeInEvent(dateStamp){
    // console.log(this);
    const event = dateStamp.split(' ');
    
    let employeeTime = {
      type: "TimeIn",
      hour: parseInt(event[1]),
      date:  `${event[0]}`,
    };
  
    this.timeInEvents.push(employeeTime);
    // console.log(this);
    
    return this;
  }
  
  function createTimeOutEvent(dateStamp){
    // console.log(this);
    const event = dateStamp.split(' ');
    
    let employeeTime = {
      type: "TimeOut",
      hour: parseInt(event[1]),
      date:  `${event[0]}`,
    };
  
    this.timeOutEvents.push(employeeTime);
    // console.log(this);
    return this;
  }
  
  function hoursWorkedOnDate(date2){
    let timeInArray = this.timeInEvents;
    let timeOutArray = this.timeOutEvents;
  
    let timeInDate = timeInArray.find(({date}) => date === `${date2}`);
    let timeIn = timeInDate.hour;
    
    let timeOutDate = timeOutArray.find(({date}) => date === `${date2}`);
    let timeOut = timeOutDate.hour;
  
    let totalHours = (timeOut - timeIn)/100;
  
    return totalHours;
  
  }
  
  function wagesEarnedOnDate(date2){
    let hours = hoursWorkedOnDate.call(this, date2);
    let pay = this.payPerHour;
    
    return hours * pay;
  }
  
const allWagesFor = function () {
    // console.log(this);
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    // console.log(eligibleDates);
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}
  
  function calculatePayroll(record){
    let total = 0
    record.forEach(employee => {
      (total += allWagesFor.call(employee))
    });
    return total;
  };

  function findEmployeeByFirstName(array, firstName){
    return array.find(person => {
        return person.firstName === firstName
    })
  }