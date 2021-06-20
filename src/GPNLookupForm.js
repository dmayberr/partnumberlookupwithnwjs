import React, { useState } from "react";
import "./GPNLookupForm.css"
import { cpnums } from "./cpnums.js";

// Create LookupForm component to allow user to search for GPN from CPN
const GPNLookupForm = () => {
    const INITIAL_STATE = ("");
    const [ cpn_entry, setCpn ] = useState(INITIAL_STATE);
    const RESULT_INITIAL_STATE = { cpn: "", gpn: "", description: "" };    
    const [ gpnResult, setGpnResult ] = useState(RESULT_INITIAL_STATE);       

    const handleChange = (e) => {
        setCpn(e.target.value);
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = getResult(cpn_entry);
        return result;
    };

    // getResult takes the input, maps the parts, sets the cpn as the key, and returns the gpn
    // In the return statement, added "required" attribute to the input to prevent TypeError from submitting empty field
    const getResult = cpn_entry => {       
        const partMap = new Map();    
        cpnums.forEach(function(element) {
        partMap.set(element.cpn, [element.GPN, element.Description]);
        }); 

        let getResult = partMap.get(cpn_entry);
        setGpnResult(getResult);
    }

    return (
        <div className="gpn-container">
            <form id="gpn-lookup-form" onSubmit={handleSubmit}>
                <header className="header">
                    <span id="logo-span"><img src="logo_Geiger.png" alt="logo" id="logo" /></span>                    
                </header>
                <div>
                    <label id="label-cpn_entry" htmlFor="cpn_entry" autoFocus>Customer Part Number:  
                        <div>
                            <input 
                            className="form-control" 
                            id="cpn_entry" 
                            name="cpn_entry" 
                            placeholder="Example: 7421678"
                            onChange={handleChange}
                            type="text"
                            required
                            />
                        </div>
                    </label>
                </div>
                <div id="button-div">
                    <span className="btn-span"><button>Find Geiger Part Number</button></span>                                        
                </div>                    
                    <br />
                    <br /> 
                <div id="gpnResult-div">
                    <h3>{gpnResult[0]}</h3>
                                  
                    <h3 id="description">{gpnResult[1]}</h3>
                </div>
            </form>
        </div>
         
    )
}

export default GPNLookupForm