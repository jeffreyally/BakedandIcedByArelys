import React from "react";
import { Link } from "react-router-dom";
import FullLogo from '../../img/fulllogo.jpeg'

export const Contact = () => {

  return (

    <div class="container">
      <br></br>
      <p class="text-center" style={{
        fontFamily: 'Bubblegum Sans, cursive',
        fontSize: '3rem'
      }}><i>CONTACT US</i></p>

      <div class="row d-flex justify-content-center  mt-3 no-gutters">

        <div class="col-10 col-md-5 d-flex justify-content-center p-0" >

          <div class="image">
            <img src={FullLogo} class="img-fluid" />
          </div>



        </div>

        <div class="col-10 col-md-7 d-flex justify-content-center align-items-center" style={{
          backgroundColor: '#F7AEF8',
        }}>
          <div class=" d-flex">

            <form target="_blank" action="https://formsubmit.co/7801e72aca46261f4264461e4ada688a" method="POST">
            <input type="text" name="_honey" style={{display:'none'}}/>
              <div class="row pb-2 mt-4">


                <div class="col-md-6">
                  <label for="yourname" class="form-label" style={{fontFamily:'Roboto, sans-serif'}}>Name</label>
                  <input type="text" id="yourname" name="name" class="form-control " placeholder="Full Name" required />

                </div>
                

                <div class="col-md-6">
                  <label for="youremail" class="form-label" style={{fontFamily:'Roboto, sans-serif'}}>Email address</label>

                  <input type="email" id="youremail" name="email" class="form-control" placeholder="Email Address" required />
                  
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">

                  <label for="yourmessage" class="form-label" style={{fontFamily:'Roboto, sans-serif'}}>Message</label>
                  <textarea name="message" style= {{overflow:'auto',resize:'none'}} rows="4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              

                </div>

              </div>

              <div class="row py-2 ">
                <div class="col">
                <button type="submit" class=" btn btn-primary">Submit</button>
                </div>
              </div>


              
            

            </form>


          </div>
        </div>

      </div>
      <br></br>
      <br></br>
      <br></br>

    </div>

  )
}

let theform = `    <form target="_blank" action="https://formsubmit.co/7801e72aca46261f4264461e4ada688a" method="POST">
<div class="form-group">
  <div class="form-row">
    <div class="col">
      <input type="text" name="name" class="form-control" placeholder="Full Name" required />
    </div>
    <div class="col">
      <input type="email" name="email" class="form-control" placeholder="Email Address" required />
    </div>
  </div>
</div>
<div class="form-group">
  <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
</div>
<button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
</form>`