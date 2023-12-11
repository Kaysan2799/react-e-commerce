// // import image from '../../Pics/OIP.png'
// import image1 from '../../Pics/Internal.gif'

// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

// function Display() {
//     return (
//         <>
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>

//             <div class="row row-cols-1 row-cols-md-2 g-4">
//                 <div class="col">
//                     <div class="card">
//                         <img src={image1} class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                             </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card">
//                         <img src={image1} class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                             </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card">
//                         <img src={image1} class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
//                             </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card">
//                         <img src={image1} class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default Display;


import image from '../../Pics/OIP.png'
function Display() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop:'80px'}}>
                <div className="col">
                    <div className="card h-100 border-info">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Component</h5>
                            <p className="card-text">Component  discription <br/>Price<br/>Quantity.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-info">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Component</h5>
                            <p className="card-text">Component  discription <br/>Price<br/>Quantity.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-info">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Component</h5>
                            <p className="card-text">Component  discription <br/>Price<br/>Quantity.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-info">
                        <img src={image} className="card-img-top"  alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Component</h5>
                            <p className="card-text">Component  discription <br/>Price<br/>Quantity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Display;