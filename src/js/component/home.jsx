import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Footer from "../component/footer.jsx";
import {Card} from "../component/cards.jsx";
//create your first component
const Home = () => {
    return (
        <>
        < Navbar />
        < Jumbotron />
        <div className="container d-flex">
            <Card   title={'Python'}
                    description={'La mejor libreria para frontend de js'}
                    imageURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrej-k_E_48uMmgfGWPz2NtMN72ZjvI-owhDGXrF8ZQ&s'}
                    textButtom={'Ver los docs oficiales'}
                    />
            <Card   title={'Mar'}
                    description={'Una grande haciendo cards cómo si no huviera mañana'}
                    imageURL={'https://www.myperfectcolor.com/repositories/images/colors/pantone-13-0443-tpg-love-bird-paint-color-match-2.jpg'}
                    textButtom={'Invitar a un café'}
            />
            <Card   title={'David'}
                    description={'Gran persona peor programador'}
                    imageURL={'https://www.hyatts.com/eCom/images/4/493911.jpg'}
                    textButtom={'Pedirle ayuda con tu código'}
            />
            <Card   title={'Fidel'}
                    description={'Trabajando duro y un gran trabajador'}
                    imageURL={'https://red032u.files.wordpress.com/2017/05/red032u.jpg'}
                    textButtom={'Llamar a su casa'}
            />
        </div>
        < Footer />
        </>
    );
};
export default Home;