import React, {useState}  from 'react';



const Resourcescreate = () => {
    const [status, setStatus] = useState({
        resource: ""
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
        const { resource } = status;

   
        const res = await fetch("/res", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                resource
            })
        });

        const data = await res.json();
        console.log(data);

        // I need to change the data to res 
       
             window.alert(" post Successfull");
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
                                    <input type="text" name="resource" id="resource" autoComplete="off"
                                        value={status.resource}
                                        onChange={handleInputs}
                                        placeholder="Resources"
                                    />
                                </div>
            <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="Resource" onClick={PostData}/>
                                    </div>
        
                                    </form>


        </>
    )
}

export default Resourcescreate
