export function getAppointmentsForDay(state, day) {
  // 1. Find the object in state.days array that matches the name of day
  const filterDay = state.days.filter(match => match.name === day)[0];
    
  // 2. Iterate through the appointments and return the value
  // 3. Validation where it's empty
  if (!state.days.length || !filterDay) {
    return [];
  } else{
    return filterDay.appointments.map((id) => state.appointments[id])
  }
}

// Get the student name and interviewer's details
export function getInterview(state, interview) {

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

export function getInterviewersForDay(state, day) {

  const filterDay = state.days.filter(match => match.name === day)[0];

  if (!state.days.length || !filterDay) {
    return [];
  } else{
    return filterDay.interviewers.map((id) => state.interviewers[id])
  }
}