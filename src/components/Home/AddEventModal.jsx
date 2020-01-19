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