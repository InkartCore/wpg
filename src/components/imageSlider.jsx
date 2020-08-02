import React, { Component } from "react";
import bluetooth from "./../images/bluetooth_car.jpg"
import pong from "./../images/pong_game.jpg"
import vote from "./../images/voting_machine.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel' 

class ImageSlider extends Component {  
    
            render() {  
    
                    return (  
    
                            <div>  
    
                             <div class='container-fluid' >  
                                  <div className="row title" style={{ marginBottom: "20px" }} >  
                                  <div class="col-sm-12 btn btn-warning">  
    
                              How To Use Bootstrap Carousel In ReactJS  
    
                             </div>  
    
                             </div>  
    
                             </div>  
    
                             <div className='container-fluid' >  
    
                             <Carousel interval={600} keyboard={false} pauseOnHover={true}>  
    
                             <Carousel.Item style={{'height':"300px"}}  >  
    
                             <img style={{'height':"300px"}}  
    
                             className="d-block w-100"  
    
                            src={bluetooth}  />  
    
                               <Carousel.Caption>  
    
                                 <h3>First Demo </h3>  
    
                                     </Carousel.Caption>  
    
                                     </Carousel.Item  >  
    
                                     <Carousel.Item style={{'height':"300px"}}>  
    
                                     <img style={{'height':"300px"}}  
    
                                       className="d-block w-100"  
    
                                        src={pong}    />  
    
                                           <Carousel.Caption>  
    
                                       <h3>Second Demo</h3>  
    
                                          </Carousel.Caption>  
    
                                             </Carousel.Item>  
    
                                           <Carousel.Item style={{'height':"300px"}}>  
    
                                           <img style={{'height':"300px"}}  
    
                                            className="d-block w-100"  
    
                                             src={vote}   />  
    
                                            <Carousel.Caption>  
    
                                              <h3>Third Demo</h3>  
    
                                              </Carousel.Caption>  
    
                                             </Carousel.Item>  
    
                                            </Carousel>  
    
                                    </div>  
    
                            </div>  
    
                    )  
    
            }  
    
    }  
    
      
    

export default ImageSlider;
