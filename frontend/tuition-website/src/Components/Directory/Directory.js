import React from 'react';
import './Directory.css';

function Directory() {
    return (
        <div className="directory">
            {/* Image */}
            <div className="directory__imageContainer">
                <h1 className="directory__imageHeading">Welcome</h1>
            
                <h3 className="directory__imageSubHeading">A place where student can archive</h3>
            
                <button>Courses</button>
            </div>

            <section>

                <div className ="banner">
                    <div className = "left-column">
                     
                        <h1>Lorem<span className = "h-span">ipsum</span></h1>
                        <h3>Lorem ipsum<span  className = "h-span"> dolor sit amet</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce finibus vel justo eu tincidunt.
                            Quisque in nibh vestibulum, placerat ante at, volutpat mi
                        </p>
                        <div className = "btn">
                            <button type = "button" className = "btnLogin" >Login</button>
                            <button type = "button" className = "btnSignUp ">Sign up</button>
                        </div>
                      
                    </div>
                    <div className = "right-column">
                        <img src="img.jpg" />
                    </div>
                </div>

               <div className = "card">
                   <h1> Lorem ipsum</h1>
                    <div className = "card-body">
                        <img src="../../assets/col1.jpg" className = "card-img" />
                        <h1 className = "card-description">Lorem ipsum </h1>
                        <h3 className = "card-sub"> dolor sit amet</h3>
                    </div>

                    <div className = "card-body">
                        <img src="../../assets/col1.jpg" className = "card-img"/>
                        <h1 className = "card-description">Lorem ipsum </h1>
                        <h3 className = "card-sub"> dolor sit amet</h3>
                    </div>
                    <div className = "card-body">
                        <img src="../../assets/col1.jpg" className = "card-img" />
                        <h1 className = "card-description">Lorem ipsum </h1>
                        <h3 className = "card-sub"> dolor sit amet</h3>
                    </div>
               </div>     
                
             </section>
            
        </div>
    )
}

export default Directory
