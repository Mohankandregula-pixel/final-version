import React, {useState, useEffect} from 'react'
import Sravya from '../pics/Sravya1.jpeg'
import Bhuvan from '../pics/Bhuvan.jpg'
import Mohan from '../pics/mohan1.jpeg'
import Rohini from '../pics/rohini.jpeg'
import Akshitha from '../pics/akshitha2.jpeg' 
const Credits = () => {
   


    return (
        <> <div className="home-page">
        <div className="home-div">
            <p className="pt-5">WELCOME TO</p>
            <h2>Credits Page</h2>
            
        </div>
    </div>
            
            &nbsp;
            &nbsp;
            &nbsp;

            <div className="container-fluid">
                     <div className="row">
                     <div className="col-2">
                    <div class="card">
                    <img
                            src={Rohini}
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Rohini</h5>
                            <p class="card-text">
                            
                            </p>&nbsp;
                            <p></p>
                            <a href="https://rohini58.github.io/RohiniPortfolio/" class="btn btn-primary">Portfolio</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-2">
                    <div class="card">
                        <img
                            src={Akshitha} 
                             class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Akshitha</h5>
                            <p className="card-text">
                            
                            </p>&nbsp;
                            <p></p>

                            <a href="https://akshitha-04.github.io/Portfolio/"  class="btn btn-primary">Portfolio</a>
                        </div>
                        </div>
                    </div>


                    <div className="col-2">
                    <div class="card">
                        <img
                            src={Mohan}
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Mohan</h5>
                            <p class="card-text">
                            
                            </p>&nbsp;
                            <p></p>

                            <a href="https://mohankandregula-pixel.github.io/Mohan_portfolio/" class="btn btn-primary">Portfolio</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div class="card">
                        <img
                            src={Sravya}
                            class="card-img-top"
                            
                        />
                        <div class="card-body">
                            <h5 class="card-title">Sravya Reddy</h5>
                            <p class="card-text">
                            
                            </p>&nbsp;
                            <p></p>

                            <a href="https://sravya888.github.io/sravya_portfolio/" class="btn btn-primary">Portfolio</a>
                        </div>
                        </div>

                        </div>
                        <div className="col-2">
                        <div class="card">
                        <img
                            src={Bhuvan}
                            class="card-img-top"
                            alt="..." 
                        />
                        <div class="card-body">
                            <h5 class="card-title">Bhuvan</h5>
                            <p class="card-text">
                            
                            </p>&nbsp;
                            <p></p>

                            <a href="https://bhuvaneswarareddymarthala.github.io/Bhuvan_Portfolio/" class="btn btn-primary">Portfolio</a>
                        </div>
                        </div>

                        </div>
                    </div>
                    

                    
                    </div>

                    
           
 
                
                
         

       
        </>
    )
}

export default Credits
