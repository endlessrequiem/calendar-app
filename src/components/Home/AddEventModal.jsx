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
          <div className="modal-login" style={{backgroundColor:"lightgrey", paddingBottom:"12px"}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{marginRight:"5px", zIndex:0}}>
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 className="modal-title" id="exampleModalCenterTitle" style={{textAlign:"center", marginTop:"15px", width:"auto", zIndex:1}}>Define Your Event</h5>
          </div>          
          <div style={{width:"100%", height:"60%", textAlign:"center", marginBottom:"10px"}}>
            
              <p className="label" style={{marginBottom:"0px"}}>Event Name</p>
              <input style={{width:"auto", boxSizing:"border-box", borderRadius:"8px"}} type="text"/>
             
              <p className="label" style={{marginBottom:"0px"}}>Event Date</p>
              <input style={{width:"auto", boxSizing:"border-box", borderRadius:"8px"}} type="text"/>
            
              <p className="label" style={{marginBottom:"0px"}}>Event Start Time</p>
              <input style={{width:"auto", boxSizing:"border-box", borderRadius:"8px"}} type="text"/>
             
              <p className="label" style={{marginBottom:"0px"}}>Event End Time</p>
              <input style={{width:"auto", boxSizing:"border-box", borderRadius:"8px"}} type="text"/>
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
          <div className="modal-footer" style={{marginTop:"10px"}}>
          <button type="button" className="button" onClick={writeUserData} style={{marginTop:"15px", borderRadius:"8px"}}>Save changes</button>
            <button type="button" className="button" data-dismiss="modal" style={{marginTop:"20px", borderRadius:"8px"}}>Close</button>
          </div>
        </div>
      </div>
    </div>
   
    );

}

export default AddEventModal;