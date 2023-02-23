import { React, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Pokemon = () => {

    return (
        <>
            <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>PokemonAPI</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
            <style dangerouslySetInnerHTML={{__html: "\n      .modal-content{\n        background-color: #F8F7F3;\n      }\n    " }} />
            {/* Table */}
            <div class="container">
                <h1 class="mt-5 mb-4">Hello and Welcome to PokemonAPI!</h1>
                <p class="fs-4  mb-4">You can check your pokemon here!</p>
                <table class="table table-striped table-hover table-borderless">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th class="center">Details</th>
                    </tr>
                </thead>
                <tbody id="tbodyP" />
                </table>
            </div>
            {/* Modal */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0">
                    <h1 class="modal-title fs-5 mx-auto" id="staticBackdropLabel">Hello! I am... </h1>
                    <div class="d-flex flex-row-reverse bd-highlight"><button type="button" class="btn-close p-2 bd-highlight" data-bs-dismiss="modal" aria-label="Close" /></div></div>
                    <div class="modal-body" id="poDetails">
                    <div class="container-fluid">
                        <div class="text-center" id="detailImage">
                        <img class="img-pokemon d-block mx-auto w-50" src alt="" width={200} height={200} />
                        </div>
                        <div class="row text-center">
                        <h3 class="species text-uppercase fs-1" />
                        </div>
                        {/* <div class="card-body"> */}
                        <div class="text-center mt-4"><b>Brief Information</b></div>
                        <div style={{color: 'black'}}>
                        <div class="row mt-1">
                            <div class="col text-end"><b>Weight</b></div>
                            <div class="sizew weight col" />
                        </div>
                        <div class="row mt-1">
                            <div class="col text-end"><b>Height</b></div>
                            <div class="sizeh height col" />
                        </div>
                        <div class="row mt-1">
                            <div class="col text-end"><b>Type</b></div>
                            <div class="type col text-capitalize" />
                        </div>
                        <div class="row mt-1">
                            <div class="col text-end"><b>Ability</b></div>
                            <div class="ability col text-capitalize" />
                        </div>
                        <div class="row mt-1">
                            <div class="col text-end"><b>Base Experience</b></div>
                            <div class="baseexp col text-capitalize" />
                        </div>
                        <div class="row mt-1">
                            <div class="col text-end"><b>Move</b></div>
                            <div class="move col text-capitalize" />
                        </div>
                        <div class="row mt-1">
                            <div class="col text-end"><b>Location Encounter</b></div>
                            <div class="loc col text-capitalize" />
                        </div>
                        <div class="row mt-1">
                            <div class="col text-end"><b>Habitat</b></div>
                            <div class="habitat col text-capitalize" />
                        </div>
                        <div class="text-center mt-4"><b>Base Stat</b></div>
                        <div class="progress mt-2" style={{height: '25px'}}>
                            <div class="progress-bar bg-success active hp fs-6" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div class="progress mt-2" style={{height: '25px'}}>
                            <div class="progress-bar bg-primary active attack fs-6" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div class="progress mt-2" style={{height: '25px'}}>
                            <div class="progress-bar bg-warning active defense fs-6 text-black" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div class="progress mt-2" style={{height: '25px'}}>
                            <div class="progress-bar bg-info active specialattack fs-6 text-black" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div class="progress mt-2" style={{height: '25px'}}>
                            <div class="progress-bar bg-secondary active specialdefense fs-6" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div class="progress mt-2" style={{height: '25px'}}>
                            <div class="progress-bar bg-danger active speed fs-6" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </div>
                    </div>
                    {/* <div><canvas id="config" style="width:100%;max-width:700px"></canvas></div> */}
                    </div>
                </div>
                </div>
            </div>
            <Helmet>
                    <script
            src="https://code.jquery.com/jquery-3.6.1.min.js"
            integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
            crossorigin="anonymous"
            async
            ></script>
            <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
            async
            ></script>
            <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.min.js"
            async
            ></script>
            <script src="Pokemons.js" async></script>
            </Helmet>
            </div> 
        </>
    )
}

export default Pokemon