import React from "react";

function Navbar() {

    return (
        <div className="container-fluid bg-dark-subtle mt-0">
        <nav class="navbar navbar-expand-lg mt-0" >
        <div class="container-fluid ">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
             </button>
            <div class="collapse navbar-collapse d-flex flex-row-reverse container-fluid bg-dark " id="navbarNav">
            <ul class="navbar-nav ">
                 <li class="nav-item text-primary">
                   <a class="nav-link active text-white" aria-current="page" href="#" >Home</a>
                </li>
                 <li class="nav-item">
                   <a class="nav-link text-white" href="#">About</a>
                </li>
                  <li class="nav-item">
                  <a class="nav-link text-white" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Contact</a>
                </li>
            </ul>
         </div>
     </div>
</nav>
        </div>
    )
}

export default Navbar