/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    const employeeArray = []

    array.forEach(employee => { employeeArray.push(createEmployeeRecord(employee)) });
    return employeeArray
}

function createTimeInEvent(time) {

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time.split(" ")[1]),
        date: time.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(time) {

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time.split(" ")[1]),
        date: time.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour
    const timeIn = this.timeInEvents.find(event => event.date === date).hour
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(employeeArray) {
    let wages = 0
    for (let i = 0; i < employeeArray.length; i++) {
        wages += allWagesFor.call(employeeArray[i])
    }

    return wages
}

function findEmployeeByFirstName(employeeArray, firstName) {
    return employeeArray.find(employee => employee.firstName === firstName)
}