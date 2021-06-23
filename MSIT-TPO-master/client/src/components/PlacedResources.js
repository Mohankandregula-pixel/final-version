import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const PlacedResources = () => {
    const [status, setStatus] = useState({
        company : "", studentname : ""
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
        const { company,studentname} = status;

   
        const res = await fetch("/placed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                company, studentname
            })
        });

        const data = await res.json();

        // I need to change the data to res 
       
            window.alert("  Successfully Updated");
            console.log("posted");

            // history.push("/login");
        
    }

    
    return(
        <>
        <form method="POST">
        <div className="form-group">
                                    {/* <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label> */}
                                    <input type="text" name="company" id="company" autoComplete="off"
                                        value={status.company}
                                        onChange={handleInputs}
                                        placeholder="Company Name"
                                    /> 
                                     <input type="text" name="studentname" id="studentname" autoComplete="off"
                                        value={status.studentname}
                                        onChange={handleInputs}
                                        placeholder="Students Names"
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

export default PlacedResources