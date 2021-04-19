import React from 'react';

const Navber = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#">Elericl Repir Sercvice</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item ms-5">
           <a class="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li class="nav-item ms-5">
           <a class="nav-link active" aria-current="page" href="/Admin">Admin</a>
        </li>
        <li class="nav-item ms-5">
           <a class="nav-link active" aria-current="page" href="/Deshbord">Deshbord</a>
        </li>
        <li class="nav-item ms-5 mr-5">
           <a class="nav-link active" aria-current="page" href="/Login">Login</a>
        </li>
        
  
      </ul>
   
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navber;