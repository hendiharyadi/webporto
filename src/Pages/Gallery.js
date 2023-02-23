import { React, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Gallery.css'

const Gallery = () => {

    let [dataFoto, setDatafoto] = useState([
        {thumb: "Sisili Fistiv Music Concert Poster", hadeh: 'https://drive.google.com/uc?export=view&id=1d-KBd1QHufiJI-HCkV7TSYvJfqZmaHKC', desc:"Sisili Fistiv is a fictional music concert that will be held in Sicily, Italy", link:'https://www.behance.net/gallery/153816883/Sisili-Fistiv'},
        {thumb: "Tempo Gelato", hadeh:'https://drive.google.com/uc?export=view&id=1f8cwrJ1gkh3pmDwv35Qd776lSJX8ZPlO', desc:"This is actually the part of my booklet 'Jogja', that is available in my Behance(Click here)", link:'https://www.behance.net/gallery/153185579/Jogja'},
        {thumb: "IG Story for Climate Action Discussion Space from AIESEC in Bandung", hadeh: 'https://drive.google.com/uc?export=view&id=1gmOy_eOCU9KxB19UPEGOx7eBzD7yMWh9', desc: "This was supposed to be a poll post and engaged by +5000 accs" },
        {thumb: "IG Feed for Impact Circle Campaign from AIESEC in Bandung", hadeh: 'https://drive.google.com/uc?export=view&id=1WL_wkbywbaByBUngQ8PCV6mHbP4CCtVJ', desc: "Succesfully reach 13,351 accounts and shared for more than 70 times."},
        {thumb: "IG Story for Celebrating Ied Al Fitr", hadeh: 'https://drive.google.com/uc?export=view&id=1RoIO6yL1lZVq5suT3-ckeIV2XHoSIxSg', desc: "To celebrate Ied Al Fitr on behalf of AIESEC in Bandung. The lanterns represented peace during the Ied Al Fitr period."},
        {thumb: "IG Story for Celebrating May Day", hadeh: 'https://drive.google.com/uc?export=view&id=10qFfaY-G9dS1L9y4Snf3ZqEBhFqgv9G1', desc: "To celebrate May Day. The crane represented how blue collar workers are often overlooked and how they actually give impact to some existence of union workers' rights."},
        {thumb: "IG Story for Climate Action Discussion Space from AIESEC in Bandung (2)", hadeh: 'https://drive.google.com/uc?export=view&id=1c5URYmbo6CAJaupfTpulc5H1ehDtvcZO', desc: "Another IG story for Climate Action Campaign for date announcement."},
        {thumb: "Flyer for Gathering Event in Universitas Pendidikan Indonesia's Physics Major", hadeh: 'https://drive.google.com/uc?export=view&id=1Jb6XiqouKNb7jIY0aD7qrC_7CfDeMP4E', desc: "The name of the event was 'Pluto' hence the planet, the tone, and the military time writing."},
    ]) 

    return (
        <>
        <main class="dark:bg-zinc-100">
            <div class="top"> 
            </div>
            <div class ="teks">
            <h2 class="font-grotesk font-bold text-4xl sm:text-4xl pt-3 flex flex-col  dark:text-stone-600 text-gray-800">
                "I worked for, at least, 2 years in Digital Marketing as someone who mainly was responsible for <span class="bgul">ensuring social media contents according to the brand guidelines."</span>
                <br/><br/>And quite often jumped down to make the contents my own.
            </h2>
            </div>
            <div id="container" class="midel"> 
            <h2 class="font-grotesk font-bold text-4xl sm:text-4xl flex items-center justify-center absolute inset-x-0 bottom-0 pt-10 pb-10  dark:text-stone-600 text-gray-800">
                Click&nbsp;<a href = "#container" class="hover:text-lime-400">here</a>&nbsp;for the works
            </h2>
            </div>  
            <div class="dis">
            {dataFoto.map((res)=>{
                return(
                <div class="card">
                        <a href = {res.link} target="_blank">
                        <div class = "thumb">
                        <h2 class = "font-serif font-medium">{res.thumb}</h2>
                        <p class = "font-sans">{res.desc}</p>
                        </div>
                        <img src={res.hadeh}/>
                        </a>
                </div>
                )
            })}
            </div>
            <nav class="bottom">
                <h2 class="font-grotesk font-bold text-4xl sm:text-4xl pt-3 flex flex-col  dark:text-stone-600 text-gray-800">
                    <Link to = "/" class="hover:text-lime-400">Back</Link>
                </h2>   
            </nav>
        </main>
        </>
    )
}

export default Gallery