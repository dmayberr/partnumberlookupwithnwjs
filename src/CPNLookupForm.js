import React, { useState } from "react";
import "./CPNLookupForm.css"
import { gpnums } from "./gpnums.js";

// Create LookupForm component to allow user to search for GPN from CPN
const CPNLookupForm = () => {
    const INITIAL_STATE = ("");
    const [ gpn_entry, setGPN ] = useState(INITIAL_STATE);
    const RESULT_INITIAL_STATE = { gpn: "", cpn: "", description: "" };    
    const [ cpnResult, setCpnResult ] = useState(RESULT_INITIAL_STATE);       

    const handleChange = (e) => {
        setGPN(e.target.value);
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = getResult(gpn_entry);        
       return result;
    };

    // getResult takes the input, maps the parts, sets the cpn as the key, and returns the gpn
    // In the return statement, added "required" attribute to the input to prevent TypeError from submitting empty field
    const getResult = gpn_entry => {       
        const gpnPartMap = new Map();    
        gpnums.forEach(function(element) {
        gpnPartMap.set(element.gpn, [element.CPN, element.Description]);
        });
        let getResult = gpnPartMap.get(gpn_entry);
        setCpnResult(getResult);
    }

    return (
        <div className="cpn-container">            
            <form id="cpn-lookup-form" onSubmit={handleSubmit}> 
                <header className="header">
                    <span id="logo-span"><img src="logo_Geiger.png" alt="logo" id="logo" /></span>                    
                </header>             
                <div>
                    <label id="label-gpn_entry" htmlFor="gpn_entry" autoFocus>Geiger Part Number:  
                        <div>
                            <input 
                            className="form-control" 
                            id="gpn_entry" 
                            name="gpn_entry" 
                            placeholder="Example: E12182"
                            onChange={handleChange}
                            type="text"
                            required
                            />
                        </div>
                    </label>
                </div>
                <div id="button-div">                    
                    <span className="btn-span"><button>Find Customer Part Number</button></span>                    
                </div>                    
                    <br />
                    <br /> 
                <div id="cpnResult-div">
                    <h3>{cpnResult[0]}</h3>
                                  
                    <h3 id="description">{cpnResult[1]}</h3>
                </div>
            </form>
        </div>
         
    )
}

export default CPNLookupForm