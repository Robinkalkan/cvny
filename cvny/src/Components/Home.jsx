import bild2 from '../assets/beautiful-waterfall-flowers-water-nature-waterfall-hd-wallpaper-ai-generated-free-photo.jpg'
import bild5 from '../assets/RobinKalkan.jpg.jpg'
export default function Home() {

    return (
        <div className="färg">
            <>
                <main>
                    <h1 class="Välkommen">Välkommen till <span class="mitt-cv"> mitt cv</span> </h1>
                    <img src={bild5} alt="PicOfMe" className="PicOfMe" />
                    <img src={bild2} alt="background-image" className="background-image-Home" />
                </main>

            </>
        </div>
    )
}