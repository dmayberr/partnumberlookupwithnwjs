import GPNLookupForm from "./GPNLookupForm";
import "./GPNLookupForm.css";
import CPNLookupForm from "./CPNLookupForm";
import "./CPNLookupForm.css";
import "./PartNumberLookup.css";

const PartNumberLookup = () => {
    
    return (
        <div id="both-forms">            
            <div className="container-md">
                <div className="row justify-content-start">
                    <div className="col-6">
                        <span><GPNLookupForm  /></span>
                    </div>
                    <div className="col-6">
                        <span><CPNLookupForm  /></span>
                    </div>
                </div>                    
            </div>            
        </div>
    )
}

export default PartNumberLookup;