import React from "react";


export const Home = ({ countries }) => {
    return (
        <div className="home container py-2">

            <div className="main-container ">

                {
                    countries.map((country, index) => {
                        const { name, region, flag } = country
                        return (

                            <div key={index} className="country d-flex gap-3 shadow p-3 m-1 border-1">
                                <img src={flag} alt="flag" />
                                <div>
                                    <h4 className="mb-0">{name}</h4>
                                    <small className="text-secondary">{region}</small>
                                </div>
                            </div>

                        )
                    })
                }
            </div>





        </div>
    )
}