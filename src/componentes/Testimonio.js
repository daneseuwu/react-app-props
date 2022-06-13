import React from 'react'
import { FiActivity } from "react-icons/fi";

export default function Testimonios({ imgPokemon, descripcionPokemon, nombrePokemon, habilidad, categoria }) {
    return (

        <div className='col-lg-3 col-md-6 col-12'>
            <div className='card  mb-4 card-hover'>
                <img src={require(`../img/pokemon-${imgPokemon}.png`)} className="card-img-top" alt="bulbasaur" />

                <div className='card-body'>
                    <h5 className='card-title'>{nombrePokemon}</h5>
                    <div className='justify-content-center'>
                        <p className="text-align-center">{descripcionPokemon}</p>
                    </div>

                    <ul class="mb-3 list-inline">
                        <li class="list-inline-item">
                            <i class="mdi mdi-clock-time-four-outline text-muted me-1"> </i> <FiActivity/>{categoria}
                        </li>

                        <li class="list-inline-item"><svg class="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE">
                            </rect>
                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE">
                            </rect>
                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE">
                            </rect>
                          </svg>{habilidad} </li>
                      </ul>


                </div>
            </div>
        </div>


    )
}
