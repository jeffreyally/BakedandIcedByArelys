import React from "react";
import { Link } from "react-router-dom";
import RainGear from '../../img/raingear.jpeg'
import Anniversary from '../../img/anniversary.jpeg'
import AnniversaryCookies from '../../img/aboutPagePics/AnniversaryCookies.jpeg'
import GiantDonut from '../../img/aboutPagePics/GiantDonut.jpeg'
import MiniWhisk from '../../img/aboutPagePics/MiniWhisk.jpeg'
import StandMixer from '../../img/aboutPagePics/StandMixer.jpeg'
import Sunflower from '../../img/aboutPagePics/Sunflower.jpeg'
import WeddingCookies from '../../img/aboutPagePics/WeddingCookies.jpeg'
//copy and paste what you have below, but fyi this class here row row-cols-md-2 row-cols-lg-3 g-5 really could
//have simplified things for you lol. Live and learn


// style maybe style={{borderStyle:'solid',
// borderColor:'white',
//boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
//}}
export const AboutPage = () => {

    return (
        
            <div class="container mb-5" >
                <br></br>
                <p class="text-center" style={{fontFamily:'Bubblegum Sans, cursive',
            fontSize:'3rem'}}><i>OUR STORY</i></p>
                <div class="row row-cols-md-2 row-cols-lg-3 g-5 ">
                    <div class="col">
                        <div class="card mx-auto p-3 pb-4 h-100" style={{ width: '19rem',
                        border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={GiantDonut} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={MiniWhisk} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={Sunflower} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={StandMixer} class="card-img-top" alt="..." style={{height:'300px', objectFit: 'cover'}} />
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={WeddingCookies} class="card-img-top" alt="..." style={{height:'300px'}}/>
                            <div class="card-body">
                            <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card mx-auto  p-3 pb-4 h-100" style={{ width: '19rem',
                         border:'1px solid transparent ',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img src={AnniversaryCookies} class="card-img-top" alt="..." style={{height:'300px'}} />
                            <div class="card-body">
                                <p class="card-text" style={{fontFamily:'Passion One ,cursive',fontSize:'1.25rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        
    )
}

let codefor4storycards = `<div class="container" >
<br></br>
<p class="text-center">our story</p>
<div class="row g-5 ">
    <div class="col-md-6">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-md-6 ">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-md-6 ">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
   
</div>
</div>`

let codefor6storycards = `<div class="container" >
<br></br>
<p class="text-center">our story</p>
<div class="row g-5 ">
    <div class="col-lg-4 col-md-6">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 ">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 ">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 ">
        <div class="card mx-auto" style={{ width: '18rem' }}>
            <img src={RainGear} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
   
</div>
</div>`