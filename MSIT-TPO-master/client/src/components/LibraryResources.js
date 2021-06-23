import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const LibraryResources = () => {
    const [status, setStatus] = useState({
        CompanyName : "", CompanyDomain : "",CompanyResources : ""
    });
    

    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value
        
        setStatus({...status, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { CompanyName,CompanyDomain, CompanyResource} = status;

   
        const res = await fetch("/Library", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                CompanyName, CompanyDomain, CompanyResource
            })
        });

        const data = await res.json();

        // I need to change the data to res 
       
            window.alert(" Resources Successfully Updated");
            console.log("post Registration");

            // history.push("/login");
        
    }

    
    return(
        <>
        <form method="POST">
        <div className="form-group">
                                    {/* <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label> */}
                                    <input type="text" name="CompanyName" id="CompanyName" autoComplete="off"
                                        value={status.CompanyName}
                                        onChange={handleInputs}
                                        placeholder="Company Name"
                                    /> 
                                     <input type="text" name="CompanyDomain" id="CompanyDomain" autoComplete="off"
                                        value={status.CompanyDomain}
                                        onChange={handleInputs}
                                        placeholder="Company Domain"
                                    />
                                     <input type="text" name="CompanyResource" id="CompanyResource" autoComplete="off"
                                        value={status.CompanyResource}
                                        onChange={handleInputs}
                                        placeholder="Company Resources"
                                    />
                                </div>
            <div className="form-group form-button">
                    {/* <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="Post" onClick={PostData}/> */}
                                         <div className="form-group form-button" >
                                    <button className="form-submit" onClick={PostData} >Submit</button>
                                </div>
                                    </div>
        
                                    </form>


        </>
    )
}

export default LibraryResources