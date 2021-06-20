import GPNLookupForm from "./GPNLookupForm";
import "./GPNLookupForm.css"
import CPNLookupForm from "./CPNLookupForm";
import "./CPNLookupForm.css"
import "./PartNumberLookup.css"




const PartNumberLookup = () => {
    
    return (
        <div id="both-forms">
            
            <div className="container-md">
                <div className="row justify-content-start">
                    <div className="col-4">
                        <span><GPNLookupForm  /></span>
                    </div>
                    <div className="col-4">
                        <span><CPNLookupForm  /></span>
                    </div>
                </div>
                    
            </div>
            {/* <div className="form-group-c2">
                <CPNLookupForm  />
            </div> */}
        </div>
    )
}

export default PartNumberLookup;