import React, {useState, useContext} from "react";
import app from "../../firebase";
import {AuthContext} from "../../context/firebase/AuthContext";



function AddEventModal(props) {

  const authContext = useContext(AuthContext);
  const [state, setState] = useState({
    eventName: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime: ""
  });


 
  function writeUserData() {
    
    authContext.getNumberOfEvents(authContext.currentUserId);
    console.log("current id: ", authContext.currentEventId);
    let currentEventIdInt = parseInt(authContext.currentEventId) + 2;

    console.log("ceii: ", currentEventIdInt);
    let currentEventId = String(currentEventIdInt);
    console.log("cei: ", currentEventId);
    if (currentEventId === NaN) {
      currentEventId = 0;
    }

    console.log("type of: ", typeof(NaN));
    app.database().ref("users/" + authContext.currentUserId + "/" + currentEventId).set({
  
      eventName: state.eventName,
      eventDate: state.eventDate,
      eventStartTime: state.eventStartTime,
      eventEndTime: state.eventEndTime
 
    });
  }

  function updateInput(event) {
    
    const {name, value} = event.target;

    setState(prevState => ({
      ...prevState,
      [name]: value
      }));
  }

    return(
      
    
    
    
    <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row"> 
            <label>
                Event Name
              <input name="eventName" type="text" onChange={updateInput} value={state.eventName}/>
            </label>
        </div>
        <div>
            <label>
              Event Date
              <input name="eventDate" type="text" onChange={updateInput} value={state.eventDate}/>
              </label>
</div>
<div>
              <label>
                Event Start Time
                <input name="eventStartTime" type="text" onChange={updateInput} value={state.eventStartTime}/>

              </label>
</div>
<div>
              <label>
                Event End Time
                <input name="eventEndTime" type="text" onChange={updateInput} value={state.eventEndTime}/>
              </label>

          </div>


          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={writeUserData}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  
   
    );

}

export default AddEventModal;