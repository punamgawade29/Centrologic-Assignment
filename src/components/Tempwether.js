import React, { useEffect, useState } from 'react';
import './css/Tempwether.css';

const Tempwether = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b6df8c97a630d382d2dc06ca59c63e18`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();
    }, [search]);

    return (
        <>
            <div className="boxfield">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputFeild"
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>

                {!city ? (
                    <p className="errorMesage">!!!!Data is not found!!!</p>
                ) : (
                    <div>
                        <div className="information">
                            <h2 className="locations">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="tempreture">
                                {city.temp}*Cel
                            </h1>
                            <h3 className="tempreturemin_max">Min: {city.temp_min}*Cel | Max: {city.temp_max}*Cel</h3>
                        </div>
                        <div className="wave-container">
                          <div className="wave"></div>

                        <div className="wfirst"></div>
                        <div className="wsecond"></div>

                        </div>
                       
                       
                    </div>
                )}
            </div>
        </>
    )
}

export default Tempwether;
