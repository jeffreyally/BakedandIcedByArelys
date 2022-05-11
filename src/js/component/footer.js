import React, { Component } from "react";
import Logo from '../../img/Logo.png'
import FullLogo from '../../img/fulllogo.jpeg'

export const Footer = () => {

	return(

		
<footer class="text-center text-lg-start bg-light  m-0" >
  
 
    
    {/* <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
     */}
<section  style={{ backgroundColor: '#F7AEF8' }}>
    <div class="container text-center ">
      
      <div class="row pt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
        <div class="container-fluid">
					
						<div style={{ display: 'flex', flexDirection: 'column' }}>
            <div><img src={Logo} style={{maxWidth:'100%',height:'6rem'}}/></div>
							<p class='BakedAndIced' style={{ fontFamily: ' Bebas Neue, cursive' }}>Baked + Iced</p>
							<p class='ByArelys' style={{ fontFamily: 'Bebas Neue, cursive', textAlign: 'center' }}>By Arelys</p>
						</div>
          </div>
        </div>
        
        
        
       

       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
        <h5 class="text-uppercase mb-4" style={{fontFamily:' Bubblegum Sans, cursive'}}>Business hours</h5>
  
  <table class="table" style={{borderColor:'#F7AEF8'}} >
    <tbody class="font-weight-normal" >
      <tr>
      <td  style={{fontFamily:'Roboto, sans-serif'}}>Monday to Friday</td>
      <td style={{fontFamily:'Roboto, sans-serif'}} >8 AM - 1 PM</td>
      </tr>
      <tr>
        <td  style={{fontFamily:'Roboto, sans-serif'}}>Friday and Saturday</td>
        <td  style={{fontFamily:'Roboto, sans-serif'}}>8AM - 1PM</td>
      </tr>
      <tr>
        <td  style={{fontFamily:'Roboto, sans-serif'}}>Sunday:</td>
        <td  style={{fontFamily:'Roboto, sans-serif'}}>Closed</td>
      </tr>
    </tbody>
  </table>
        
        </div>
        
        <div class="col-md-3 mx-auto mb-md-2 mb-4">
          
          <h5 class="text-uppercase  mb-4 "  style={{fontFamily:' Bubblegum Sans, cursive'}}>
            Contact
          </h5>
          
          
          
          <br></br>
          <p   style={{fontFamily:'Roboto, sans-serif'}}>
            <i class="fas fa-envelope me-3 fa-lg" ></i>
            info@example.com
          </p>
          <p   style={{fontFamily:'Roboto, sans-serif'}}><i class="fas fa-phone me-3 fa-lg"></i> + 01 234 567 88</p>
          <p  style={{fontFamily:'Roboto, sans-serif'}}><i class="fab fa-instagram me-3 fa-lg" style={{fontWeight:'bold'}}></i> Follow Us On Instagram</p>
          
          
                  </div>
        
      </div>
      <div class="text-center p-4">
  <i class="fas fa-copyright"style={{color:'darkblue'}}></i>&nbsp;
    <span style={{fontWeight:'bold'}}> 2022 Copyright: BAKED AND ICED BY ARELYS</span>
  </div>
    </div>
  </section>


  
  
  
</footer>


	)
}
