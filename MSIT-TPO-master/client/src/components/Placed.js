import React, {useState, useEffect} from 'react'

import ViewPlaced from './ViewPlaced';
import PlacedResources  from './PlacedResources';

const Placed = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({});

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);
            setUserData(data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME TO</p>
                    <h2>Placed Section</h2>
                    
                </div>
            </div>
            <div>
            {userData.work == "TPO" &&( 
                <div className="container emp-profile">

                    <h1>Placed Details</h1>
                    <PlacedResources/>
                    <br/>
                    <h1>Placed</h1>
                    <ViewPlaced/>
                    
                 

                </div>
            )}
         

            
                {userData.work == "student" &&(
                    <div > 
                        <div className="container emp-profile">
                        
                        <h1>Placed</h1>
                        <ViewPlaced/>
                      
                        </div>
                    </div>
                )}
                
            </div>



            
            
        </>
    )
}

export default Placed