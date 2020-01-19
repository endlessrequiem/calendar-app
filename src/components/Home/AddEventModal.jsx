import React from "react";
import app from "../../firebase";




 function writeUserData() {
   
 }

function AddEventModal(props) {

 
  function writeUserData() {
    app.database().ref("users/" + "1234567").set({
      eventName: "a new event",
      eventDate: "a start time, how should we format this",
      eventStartTime: "the start time",
      eventEndTime: "end time"
    });
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
              <input type="text"/>
            </label>
        </div>
        <div>
            <label>
              Event Date
              <input type="text"/>
              </label>
</div>
<div>
              <label>
                Event Start Time
                <input type="text"/>

              </label>
</div>
<div>
              <label>
                Event End Time
                <input type="text"/>
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