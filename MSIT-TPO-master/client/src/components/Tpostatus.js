import React, {useState,useContext}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {UserContext} from "../App";



const Tpostatus = () => {
    const { state, dispatch } = useContext(UserContext);
    const [status, setStatus] = useState({
        post: ""
    });
    
    const history = useHistory();


    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value
        
        setStatus({...status, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { post } = status;

   
        const res = await fetch("/status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                post
            })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            dispatch({ type: 'USER', payload: true });
            window.alert("Post Successfull");
            history.push("/");
        }

            // history.push("/login");
        
    }


    
    
    
    
    
    return(
        <>
        <form method="POST">
        <div className="form-group">
                                    {/* <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label> */}
                                    <textarea type="text" name="post" id="post" autoComplete="off"
                                        value={status.post}
                                        onChange={handleInputs}
                                        placeholder="Data to post"
                                    />
                                </div>
            <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="Post" onClick={PostData}/>
                                    </div>
        
                                    </form>


        </>
    )
}

export default Tpostatus
