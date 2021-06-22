import GPNLookupForm from "./GPNLookupForm";
import "./GPNLookupForm.css";
import CPNLookupForm from "./CPNLookupForm";
import "./CPNLookupForm.css";
import "./PartNumberLookup.css";

const PartNumberLookup = () => {
    
    return (
        <div className="container" id="both-forms">            
            <div className="row">
                <div className="col">
                    <GPNLookupForm  />            
                </div>
                <div className="col">
                    
                </div>
                <div className="col">
                    <CPNLookupForm  />  
                </div>
            </div>            
        </div>
    )
}

export default PartNumberLookup;


                    // <GPNLookupForm  />
                    

                    
                   
                    //     
                                   
           