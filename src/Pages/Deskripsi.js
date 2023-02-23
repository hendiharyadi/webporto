import { React} from "react";
import { Link } from "react-router-dom";
import '../css/Deskripsi.css'

const Deskripsi = () => {

     return (
        <>
        <main class="dark:bg-zinc-100">
            <div class="top">
                <h2 class="font-grotesk font-bold text-4xl sm:text-4xl pt-3 flex flex-col  dark:text-stone-600 text-gray-800">
                    Nama
                </h2>
            </div>
            <div class="container">
                    <img src='https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80'/>
            <div class="description">
                        <h2></h2>
                        <p></p>
            </div>
            </div>
            <nav class="bottom">
                <h2 class="font-grotesk font-bold text-4xl sm:text-4xl pt-3 flex flex-col  dark:text-stone-600 text-gray-800">
                    <Link to = "/gallery">Back</Link>
                </h2>   
            </nav>
        </main>
        </>
    )
}

export default Deskripsi