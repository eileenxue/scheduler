export function getAppointmentsForDay(state, day) {
  // 1. Find the object in state.days array that matches the name of day
  const filterDay = state.days.filter(match => match.name === day)[0];
  // console.log(filterDay.appointments)
  // console.log(filterDay[0].appointments.map((id) => state.appointments[id]))
  
  // console.log(state.appointments)
  // console.log(Object.keys(state.appointments))
  // for (let appointmentID of Object.keys(state.appointments)){
    //   console.log("ApptID:"+ appointmentID)
    // }
    
  // 2. Iterate through the appointments and return the value
  // 3. Validation where it's empty
  if (!state.days.length || !filterDay) {
    return [];
  } else{
    return filterDay.appointments.map((id) => state.appointments[id])
  }
}

export function getInterview(state, interview) {
  // Get the student name and interviewer's details
  // console.log(state.interviewers["1"]) // works to display id=1
  // console.log(interview.student)
  // console.log(interview.interviewer)

  if (!interview) {
    return null;
  }

  // This needs to be below the null values
  const interviewerNum = interview.interviewer;
  
  return {
    interviewer: state.interviewers[interviewerNum],
    student: interview.student
  }
}