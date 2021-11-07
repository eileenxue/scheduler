import { useState, useEffect} from "react";
import axios from "axios";

export default function useApplicationData(props) {
  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([]);

  const setDay = day => setState({ ...state, day });
  // const setDays = (days) => setState(prev => ({ ...prev, days }));

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}, 
    interviews: {} // not sure if needed?
  });

  useEffect(() => {

    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      // set your states here with the correct values...
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      console.log(all[2].data) // fetch interviewer data
    }).catch((err) => console.error(err))
  }, [])

  function bookInterview(id, interview) {
    console.log(id, interview); // show booking update
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // This works, may need to modify it a bit from W8D1
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, {interview})
      .then(() => setState((prev) => ({...prev, appointments})));

  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => setState((prev) => ({...prev, appointments})));
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}