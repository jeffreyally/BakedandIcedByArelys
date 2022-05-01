import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import springURL from "../../img/spring.jpeg";
import springFlowers from "../../img/springflowers.jpeg"
import BabyShower from "../../img/babyshower.jpeg"
import wedding1 from "../../img/wedding1.jpeg"
import wedding2 from "../../img/wedding2.jpeg"
import logo from "../../img/Logo.png"
import fulllogo from "../../img/fulllogo.jpeg"

import { HomePageCookieCarousel } from '../component/homePageCookieCarousel.js'


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
<>
		<div className="container mt-4">
			<div className="row">

				<div className="col-12 col-md-6 mb-1"  >

					<p className='didYouKnowTitle'style={{ fontFamily: 'Londrina Solid, cursive',  textAlign: 'center' }}>Did you know?</p>

					<p className='didYouKnowText'style={{
						fontFamily: 'Londrina Solid, cursive', 
						fontWeight: '300', textAlign: 'center'
					}}>National Cookie Day is <s>December 4th.</s> Haha, yeah right.</p>

					<br class="d-none d-lg-inline"></br>

					<p className='didYouKnowText' style={{
						fontFamily: 'Londrina Solid, cursive', 
						fontWeight: '300', textAlign: 'center'
					}}>National Cookie Day is when you're having a bad day, when you're looking to cheat on your diet, when the Heat win, con su cafecito en la mañana, etc.</p>



				</div>

				<div className="col-12 col-md-6 mb-1">
					<div className="row">
						<div className="col">

							<img src={fulllogo} style={{ maxWidth: '100%', }} />

						</div>
						

					</div>
					


				</div>
			</div>


{/* <br></br>
			<p class="text-center" style={{fontFamily:'Bubblegum Sans, cursive',
            fontSize:'3rem'}}><i>CHECK OUT OUR DESIGNS</i></p>
			<br></br>
			<HomePageCookieCarousel/>


			
			
			<h3><span style={{ color: '#B388EB' }}>B388EB floral lavender</span>,
				<span style={{ color: '#F7AEF8' }}>F7AEF8 plum something</span>,
				<span style={{ color: '#FDC5F5' }}> FDC5F5cotton candy</span>,
			</h3> */}
		

			{/* <p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p> */}

		</div >

		<div className="container">
			<br></br>
		<hr/>
		<br></br>
		<p class="text-center" style={{fontFamily:'Bubblegum Sans, cursive',
            fontSize:'3rem'}}><i>CHECK OUT OUR COOKIES</i></p>
			<br></br>
			<HomePageCookieCarousel/>
			<br></br>
		</div>
		
		</>

	);
};

let Arelysquote = `<div class="row justify-content-end">
<div class="col-3"><blockquote><p class='lead'>"There is always room for dessert."</p>
  &mdash; <cite>Arelys</cite> </blockquote></div>
</div>`

let carouselcode = `<div id="carouselExampleInterval" class=" carousel slide carousel carousel-dark" data-bs-ride="carousel" >
				<div class="carousel-inner">
					<div class="carousel-item active" data-bs-interval="90000" style={{ position: 'relative' }}>

						<div class="container">
							<div class="row">

								<div class="col-12 d-flex justify-content-center ">
									<img src={springFlowers} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle: 'solid', borderColor: 'black' }} />
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
						<div class="container">
							<div class="row">


								<div class="col-12 d-flex justify-content-center on your column div">
									<img src={springURL} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle: 'solid', borderColor: 'black' }} />
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
						<div class="container">
							<div class="row">


								<div class="col-12 d-flex justify-content-center on your column div">
									<img src={BabyShower} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle: 'solid', borderColor: 'black' }} />
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
						<div class="container">
							<div class="row">


								<div class="col-12 d-flex justify-content-center on your column div">
									<img src={wedding1} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle: 'solid', borderColor: 'black' }} />
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
						<div class="container">
							<div class="row">


								<div class="col-12 d-flex justify-content-center on your column div">
									<img src={wedding2} class="d-block" alt="..."
										style={{ maxWidth: '100%', height: '65vh', borderStyle: 'solid', borderColor: 'black' }} />
								</div>

							</div>
						</div>

					</div>

				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>`