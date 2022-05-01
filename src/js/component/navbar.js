import React from "react";
import { Link } from "react-router-dom";
import { AboutPage } from '../views/aboutPage.js'
import logo from "../../img/Logo.png"

export const Navbar = () => {
	return (
		<>

			<nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FDC5F5' }}>
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<p class='BakedAndIced' style={{ fontFamily: ' Bebas Neue, cursive' }}>Baked + Iced</p>
							<p class='ByArelys' style={{ fontFamily: 'Great Vibes, cursive', textAlign: 'center' }}>By Arelys</p>
						</div>

					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse " id="navbarNav">
						<div class="container m-0">
							<div class="row">
								<div class="col-10 d-flex justify-content-center">
									<div class="navbar-nav">
										<div class="container">
											<div class="row">
												<div class="col-lg">
													<div class="nav-item me-5">
														<Link to="/" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Home</Link>
													</div>
												</div>
												<div class="col-lg">
													<div class="nav-item me-5">

														<Link to="/flavors" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Flavors</Link>
													</div>
												</div>
												<div class="col-lg">
													<div class="nav-item me-5">

														<Link to="/about" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>About</Link>
													</div>
												</div>
												<div class="col-lg">
													<div class="nav-item me-5">

														<a target="_blank" href="https://docs.google.com/forms/d/13ZYYcn-7LddKho5vAF96bAXO83XJeNpk-uG9ZkFBHY8/edit" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}><u>Order</u></a>
													</div>
												</div>
												<div class="col-lg">
													<div class="nav-item me-5">

														<Link to="/contact" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Contact</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>





					</div>
					


				</div>

			</nav>

			<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

		</>
	);
};


let oldbar = `	<div class="navbar-nav">
<div class="container">
	<div class="row">
		<div class="col">
			<div class="nav-item me-5">
				<Link to="/" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Home</Link>
			</div>
		</div>
		<div class="col">
			<div class="nav-item me-5">

				<Link to="/" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Menu</Link>
			</div>
		</div>
		<div class="col">
			<div class="nav-item me-5">

				<Link to="/" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>About</Link>
			</div>
		</div>
		<div class="col">
			<div class="nav-item me-5">

				<Link to="/" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>FAQ</Link>
			</div>
		</div>
		<div class="col">
			<div class="nav-item me-5">

				<Link to="/" style={{ color: '#B388EB ', fontFamily: 'Coustard, serif' }}>Contact</Link>
			</div>
		</div>
	</div>
</div>






</div>`

let holdit = `<>

					<nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FDC5F5' }}>
						<div class="container-fluid">
							<a class="navbar-brand" href="#">
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<span style={{ fontFamily: ' Bebas Neue, cursive', fontSize: '3.5vw' }}>Baked + Iced</span>
									<span>By Arelys</span>
								</div>

							</a>
							<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse justify-content-center" id="navbarNav">
								<div class="navbar-nav">
									<div class="nav-item me-5">
										<Link to="/" style={{ color: '#B388EB ' }}>Home</Link>
									</div>
									<div class="nav-item me-5">

										<Link to="/" style={{ color: '#B388EB ' }}>Menu</Link>
									</div>
									<div class="nav-item me-5">

										<Link to="/" style={{ color: '#B388EB ' }}>About</Link>
									</div>
									<div class="nav-item me-5">

										<Link to="/" style={{ color: '#B388EB ' }}>Contact</Link>
									</div>

								</div>


							</div>


						</div>
					</nav>

					<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

				</>`