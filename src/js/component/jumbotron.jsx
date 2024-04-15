// 1. Import React and everything needed
import React from "react";

// 2. Create components on Pascal
const Jumbotron = () => {
    // 3. Code Js

    // 4. Return HTML
	return (
        <div class="card bg-light " style={{width: '80 rem'}}>
            <div class="card-body align-items-start">
                <h1 class="card-title text-start">A warm welcome!</h1>
                <p class="card-text text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a class="align-items-start " href="https://www2.cruzroja.es/multicanal-cree?utm_source=Google&utm_medium=SEM&utm_campaign=CRE-e&utm_content=Ads&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh6hnUjnSG5hFt3xfyeRQHxD4cGJlSoOz4qs6FzIGDX8kxPNRsghyDhoCywEQAvD_BwE" class="btn btn-primary">Call to action!</a>
            </div>
            
        </div>
	
	);
};

// 5. Export component
export default Jumbotron;