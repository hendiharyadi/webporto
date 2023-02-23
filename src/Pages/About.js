import React from "react";
import { Link } from "react-router-dom";
import '../css/About.css'

const About = () => {
    return(
        <>
        <div class = "ktkt">
        <div class = "font-grotesk font-bold text-6xl pt-20 pl-20 dark:text-stone-600">
            Hello!
        <span class = "bg-lime-400 "><div>I am Hendi Haryadi</div></span>
        </div>
        <div class = "Nama font-grotesk font-bold text-6xl pl-20 dark:text-stone-600">
            Halo!
        <span class = "bg-lime-400 "><div>Saya Hendi Haryadi</div></span>
        </div>
        </div>

        <div class = "ktkt2">
        <div class = "futu z-0">
            <img src = "https://drive.google.com/uc?export=view&id=1NCtL04j-WI9cDtGvNWMRmuj6UTOwUSZs"/>
        </div>
        <div class = "desc font-serif font-bold text-5xl text-right z-10 dark:text-stone-600">
            <p><span class = "bg-lime-400 break-words">Bachelor Degree in Physics experienced with Social Media Content, Fullstack Developer, and R&D.</span></p>
        </div>
        <div class = "wn text-lime-400 bg-transparent font-grotesk font-bold text-8xl z-10">
            Why not?
        </div>
        </div>

        <div class ="flex items-center justify-center absolute inset-x-0 pt-10 pb-10 dark:bg-zinc-100">
            <nav class = "font-grotesk font-bold dark:text-stone-700 text-lg lg:flex items-center">
                <a href = "https://linktr.ee/hndhryd" target="_blank">
                    <div class = "hover:text-lime-400 py-2 px-6 flex dark:text-stone-600">My Linktree for Further Information</div>
                </a>
                <Link to = "/">
                    <div class = "hover:text-lime-400 py-2 px-6 flex dark:text-stone-400">Back</div>
                </Link>
            </nav>
        </div>
        </>
    )
}

export default About