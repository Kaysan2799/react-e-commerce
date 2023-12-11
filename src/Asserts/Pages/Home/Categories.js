import './Category.css';
// import image from '../../Pics/Laptop (HD) (1).png';
// import image1 from '../../Pics/Headphones (HD).png';
// import image2 from '../../Pics/Knowledge (HD).png';
import image3 from '../../Pics/cpu.jpg';
import image4 from '../../Pics/wall1.jpg';
import image5 from '../../Pics/wall2.jpg';
import image6 from '../../Pics/wall3.jpg';
import image7 from '../../Pics/wall4.jpg';
function Categories() {
  return (
    <div style={{ backgroundColor: '#032F40', marginTop:'80px', marginBottom:'0px' }}>
      
      <div id="carouselExampleDark" class="carousel carousel slide" style={{width: '80%', marginLeft: '10%'}} >

        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner" >
          <div class="carousel-item active" data-bs-interval="2000">
            <div class="card text-bg-dark">
              <img src={image3} class="card-img" width={'40%'} height={'20%'} alt="..." />
              <div class="card-img-overlay">
              </div>
            </div>

            <div class="carousel-caption d-none d-md-block">
              <h5 className='text-hover'>Computers and its parts</h5>
              <p>All nessesary computer components can found here</p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <div class="card text-bg-dark">
              <img src={image4} class="card-img" width={'40%'} height={'20%'} alt="..." />
              <div class="card-img-overlay">
              </div>
            </div>

            <div class="carousel-caption d-none d-md-block">
              <h5 className='text-hover'>Tools make life easier</h5>
              <p>Best quality tools for all students and workers.</p>
            </div>
          </div>

          <div class="carousel-item " data-bs-interval="2000">
            <div class="card text-bg-dark">
              <img src={image5} class="card-img" width={'40%'} height={'20%'} alt="..." />
              <div class="card-img-overlay">
              </div>
            </div>

            <div class="carousel-caption d-none d-md-block">
              <h5 className='text-hover' >Entertainment</h5>
              <p>Best quality entertainment electronics makes you happy.</p>
            </div>
          </div>

          <div class="carousel-item " data-bs-interval="2000">
            <div class="card text-bg-dark">
              <img src={image6} class="card-img" width={'40%'} height={'20%'} alt="..." />
              <div class="card-img-overlay">
              </div>
            </div>

            <div class="carousel-caption d-none d-md-block">
              <h5 className='text-hover'>Computers and its parts</h5>
              <p>All nessesary computer components can found here</p>
            </div>
          </div>

          <div class="carousel-item " data-bs-interval="2000">
            <div class="card text-bg-dark">
              <img src={image7} class="card-img" width={'40%'} height={'20%'} alt="..." />
              <div class="card-img-overlay">
              </div>
            </div>

            <div class="carousel-caption d-none d-md-block">
              <h5 className='text-hover'>Computers and its parts</h5>
              <p>All nessesary computer components can found here</p>
            </div>
          </div>

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Categories;