import React from "react"
import { HndhrydProvider } from "../Context/Context.js"
import Gallery from "../Pages/Gallery.js"
import Deskripsi from "../Pages/Deskripsi.js"

const Hndhryd = () => {
    return (
        <DeskripsiProvider>
            <Gallery/>
            <Deskripsi/>
        </DeskripsiProvider>
    )
}

export default Hndhryd