import about from '../../components/Inicio/images/about-img.jpeg';
import about1 from '../../components/Inicio/images/1.png';
import about2 from '../../components/Inicio/images/2.jpg';
import about3 from '../../components/Inicio/images/3.jpg';
import about4 from '../../components/Inicio/images/4.jpg';
import about5 from '../../components/Inicio/images/5.jpg';
import about6 from '../../components/Inicio/images/6.jpg';
import about7 from '../../components/Inicio/images/7.jpg';
import about8 from '../../components/Inicio/images/8.jpg';
import about9 from '../../components/Inicio/images/9.jpg';
import about10 from '../../components/Inicio/images/quote-img.png';
import about11 from '../../components/Inicio/images/quote-img.png';
import about12 from '../../components/Inicio/images/quote-img.png';
import about13 from '../../components/Inicio/images/logo.png';
import about14 from '../../components/Inicio/images/11.jpg';
import about15 from '../../components/Inicio/images/12.png';
import about16 from '../../components/Inicio/images/pic-1.png';
import about17 from '../../components/Inicio/images/pic-2.png';
import about18 from '../../components/Inicio/images/pic-3.png';
import about19 from '../../components/Inicio/images/home-img.jpeg';
import "../Inicio/style.css";


export const InicioScreen = () => {
    return (
        
         <div>
<section class="home" id="home">
<div class="content">

    <h3>Vino Opita</h3>
    <p>Compañía importadora y distribuidora de vinos que nace de la amplia experiencia y conocimiento del mercado de vinos en Colombia; representamos bodegas del nuevo y viejo mundo del vino</p>
    
    <a href="#" class="btn">Compra con tranquilidad</a>
</div>
</section>




<section class="about" id="about">

<h1 class="heading"> <span>SOBRE</span> NOSOTROS </h1>

<div class="row">

    <div class="image">
        <img src={about} alt=""/>
    </div>

    <div class="content">
        <h3>¿QUIENES SOMOS?</h3>
        <p>Somos una empresa conformada por campesinos netamente huilenses, donde elaboramos vinos 100% naturales hechos a mano, bajo los cuidados del medio ambiente e inspirados en las personas huilenses, contribuimos a la compra de frutas a campesinos de nuestro departamento con el objetivo de ayudar al desarrollo del mismo.</p>
        <p>Además, nuestra empresa se encuentra enfocada al servicio, la calidad e innovación donde fabricamos productos para crear experiencias inolvidables.</p>
        
    </div>

</div>

</section>



<section class="products" id="products">

    <h1 class="heading"> NUESTROS <span>SERVICIOS</span> </h1>

    <div class="box-container">
<div class="box">
            <div class="image">
                <img src={about13} alt=""/>
            </div>
            <div class="content">
                <h3>ATENCIÓN</h3>
                <h1>Atendemos y brindamos la atención las 24 horas del día</h1>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src={about13} alt=""/>
            </div>
            <div class="content">
                <h3>ASESORAMIENTO</h3>
                <h1>Asesoría en eventos relacionados con enología y gastronomía.</h1>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src={about13} alt=""/>
            </div>
            <div class="content">
                <h3>DEGUSTACIÓN</h3>
                <h1>Deléitate al disfrutar y experimentar el sabor y textura a campo. Todo esto en una sola copa.</h1>
            </div>
        </div>
    

    

</div>

</section>



<section class="products" id="products">

<h1 class="heading"> NUESTROS <span>PRODUCTOS</span> </h1>

<div class="box-container">

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={about7} alt=""/>
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={about8} alt=""/>
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={about9} alt=""/>
        </div>
        <div class="content">
            <h3>fresh coffee</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

</div>

</section>



<section class="review" id="review">

<h1 class="heading"> EQUIPO DE <span>TRABAJO</span> </h1>

<div class="box-container">

    <div class="box">
        <img src={about10} alt="" class="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src={about16} class="user" alt=""/>
        <h3>john deo</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
    </div>

    <div class="box">
        <img src={about11} alt="" class="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src={about17} class="user" alt=""/>
        <h3>john deo</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
    </div>
    
    <div class="box">
        <img src={about12} alt="" class="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src={about18} class="user" alt=""/>
        <h3>john deo</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
    </div>

</div>

</section>




<section class="contact" id="contact">

<h1 class="heading"> <span>MEDIO DE </span>CONTACTO</h1>

<div class="row">

    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

    <form action="">
            <h3>Inserte Datos</h3>
            <div class="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="Nombre Completo"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" placeholder="Correo ELectronico"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-phone"></span>
                <input type="number" placeholder="Numero Celular"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-mail-bulk"></span>
                <input type="email" placeholder="Mensaje"/>
            </div>
            <input type="submit" value="contactar" class="btn"/>
        </form>
    

</div>


</section>

<section class="blogs" id="blogs">

<h1 class="heading"> ULTIMAS <span>NOTICIAS</span> </h1>

<div class="box-container">

    <div class="box">
        <div class="image">
            <img src={about4} alt=""/>
        </div>
        <div class="content">
            <a href="#" class="title">El 30% de las bodegas no venden su vino en internet</a>
            <span>by admin / 21st may, 2021</span>
            <p>La venta de vino por internet está todavía en proceso de maduración en España. Un estudio de EAE Business School dado a conocer este jueves asegura que un 30% de las bodegas españolas todavía no venden su producción de vino en internet y que este canal de venta supone solo el 5,5% de la facturación.</p>
            <a href="#" class="btn">Leer Más</a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={about5} alt=""/>
        </div>
        <div class="content">
            <a href="#" class="title">Vino cosechado con inteligencia artificial</a>
            <span>by admin / 21st may, 2021</span>
            <p>Al pan, pan y al vino… tecnología de última generación. "Mediante un buen algoritmo predictivo se pueden mejorar las previsiones de cosecha y llevar a cabo una mejor planificación de compra de uva y de entrada en bodega", sintetiza Mireia Torres.</p>
            <a href="#" class="btn">leer Más</a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={about6} alt=""/>
        </div>
        <div class="content">
            <a href="#" class="title">Cómo entrenar el olfato para una cata de vino</a>
            <span>by admin / 21st may, 2021</span>
            <p>El vino es uno de esos placeres de los que la humanidad disfruta desde tiempos inmemoriales. Sus infinitas variedades lo convierten en una bebida única, que siempre ofrece matices por descubrir.</p>
            <a href="#" class="btn">Leer Más</a>
        </div>
    </div>

</div>
</section>

<section class="review" id="review">

<h1 class="heading"> ALIADOS Y <span>PARTNERS  </span> </h1>

<div class="box-container">

    <div class="box">
        
        <img src={about1} class="user" alt=""/>
        <h3>Gato negro</h3> 
    </div>

    <div class="box">
        
        <img src={about2} class="user" alt=""/>
        <h3>Cariñoso</h3>  
    </div>
    
    <div class="box">
  
        
        <img src={about3} class="user" alt=""/>
        <h3>Vincorte</h3>
    </div>

</div>

</section>
      </div>      
        
    )
}