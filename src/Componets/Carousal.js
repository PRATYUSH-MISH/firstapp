import React from 'react'
export default function Carousal() {
  return (
    <div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{objectFit:"contain !important"}}>
            <div className='carousel-caption' style={{zIndex:"10"}}>
                  <form class="form-inline">
                     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                     <button class="btn btn-outline-success text-white bg-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
            </div>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?burger" alt="First slide"
                      style={{filter:"brightness(30%"}}
                      />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?momos" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?sea" alt="Third slide"/>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
    </div>
  )
}
