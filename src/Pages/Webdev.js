import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import '../css/Webdev.css'

const Webdev = () => {

    let [dataWeb, setDataWeb] = useState([
        {link: 'https://github.com/hendiharyadi/Dokumentasi/tree/main/S3-PokemonAPI', thumb: "PokemonAPI", hadeh: 'https://img.freepik.com/free-vector/cute-godzilla-fight-kong-cartoon-icon-illustration_138676-2658.jpg?w=740&t=st=1676453801~exp=1676454401~hmac=6170d5dacf9f6102f5b40863dda6a49e0231d027d6ad8431ef698131c0d6abff', desc: "This was developed with jQuery AJAX method. Pokeapi is the API that is being fetched." },
        {link: 'https://github.com/hendiharyadi/Dokumentasi/tree/main/fix/Spring-Security-Kelompok8', thumb: "HR Schema", hadeh: 'https://img.freepik.com/free-vector/remote-business-management-concept-with-businessman-holding-tablet-showing-analytics-graphs-connected_1284-44658.jpg?w=740&t=st=1676453870~exp=1676454470~hmac=12bb1b3a3d72d4fae3072513ff4a0ea755b097124a5fa389868c0ac6cca52d44', desc: "This was developed with jQuery AJAX method and bundled with Spring Security. The API is standalone based on HR Schema using MySQL." },
        {link: 'https://github.com/hendiharyadi/LeaveManagementSystem-Server-Side', thumb: "Leave Management System", hadeh: 'https://img.freepik.com/free-vector/isometric-outline-time-management_23-2148829562.jpg?w=740&t=st=1676454041~exp=1676454641~hmac=2d00692319f5a0051d42e47aa6712630042934aaa7de7f9bf5277ff100856247', desc: "This was developed with jQuery AJAX method and bundled with Spring Security. The API is standalone based on HR Schema using MySQL." },
    ]) 

    return(
        <>
            <div>
                <Helmet>
                    <title>
                        Webdev | Hendi Haryadi
                    </title>
                </Helmet>
            </div>
            <main class="dark:bg-zinc-100">
            <div class="top"> 
            </div>
            <div class ="teks">
            <h2 class="font-grotesk font-bold text-4xl sm:text-4xl pt-3 flex flex-col  dark:text-stone-600 text-gray-800">
                "Webdev is my current work <span class="ul">with Java proficiency."</span>
                <br/><br/>Javascript is my good friend. I am used to Vanilla and React. This webporto is using React.
            </h2>
            </div>
            <div id="container" class="midel"> 
            <h2 class="font-grotesk font-bold text-4xl sm:text-4xl flex items-center justify-center absolute inset-x-0 bottom-0 pt-10 pb-10  dark:text-stone-600 text-gray-800">
                Click&nbsp;<a href = "#container" class="hover:text-lime-400">here</a>&nbsp;for the works <span class = "text-base"> &nbsp;&nbsp;&nbsp;&#40;hover object for further information&#41;</span>
            </h2>
            </div>  
            <div class="dis">
            {dataWeb.map((res)=>{
                return(
                <div class="card">
                        <div class = "thumb">
                        <a href = {res.link} target = "_blank"><h2 class = "font-serif font-medium">{res.thumb}</h2></a>
                        <p class = "font-sans">{res.desc}</p>
                        </div>
                        <img src={res.hadeh}/>
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

export default Webdev