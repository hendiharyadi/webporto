import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import '../css/Beranda.css'

const Beranda = () => {
    return (
        <>  
            <div>
                <Helmet>
                    <title>
                        Home | Hendi Haryadi
                    </title>
                </Helmet>
            </div>     
            <main class="dark:bg-zinc-100 h-screen">
                <div class="mx-auto pt-32">
                </div>
                <div class="dark:bg-zinc-100 pt-28 mx-auto grid grid-cols-3 pl-28">     
                            <div class="font-grotesk font-bold text-7xl sm:text-7xl dark:text-stone-600 pt-36">
                            <div class="Gd">
                            <Link to = "/gallery">
                            <div class="dsin hover:text-lime-400">Graphic Design</div>
                            </Link>
                            </div>
                            </div>
                            <div className="Ph">
                            <div class="font-grotesk font-bold text-5xl sm:text-5xl pl-28 dark:text-stone-500 pt-40">
                            <a href="https://vsco.co/hndhryd/gallery" target="_blank">
                            <div class="dsin hover:text-lime-400">Photography</div>
                            </a>
                            </div>
                            </div>
                            <div className="Fe">
                            <div class="font-grotesk font-bold text-3xl sm:text-3xl pl-2 dark:text-stone-400 pt-44">
                            <Link to = "/webdev">
                            <div class="hover:text-lime-400">WebDevProject <span class = 'bg-lime-400 text-stone-600'>Under Construction</span></div>
                            </Link>
                            </div>
                            </div>
                            
                </div>
                <div class="flex items-center justify-center absolute inset-x-0 bottom-0 pt-10 pb-10 dark:bg-zinc-100">
                            <nav class="font-grotesk font-bold dark:text-stone-700 text-lg lg:flex items-center">
                                <a class="py-2 px-6 flex">
                                    Hendi Haryadi
                                </a>
                                <a href="#" class="py-2 px-6 flex dark:text-stone-400">
                                <div class="hover:text-lime-400"><Link to = "/about">About</Link></div>
                                </a>
                            </nav>
                </div>
            </main>   
        </>
    )
}

export default Beranda