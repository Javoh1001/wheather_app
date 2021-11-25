import React, {useState,useEffect} from 'react'

const SerachWeather = () => {
    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input,setInput] = useState("");
    
    let componentMounted = true;

    useEffect(()=>{
        const fetchWeather = async () =>{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1d36186ff1a8dc5c7bdf43e119b75c67`);
            if(componentMounted){
                setData(await response.json());
                console.log(data);
                
            }
            return ()=>{
                componentMounted = false;
            }
        }
        fetchWeather();
    }, []);

    // let temp =(data.main.temp - 273.15).toFixed(2);
    // let temp_max = (data.main.temp_max - 273.15).toFixed(2);
    // let temp_min = (data.main.temp_min - 273.15).toFixed(2);

    return (
        <div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-4">
                        <div className="card text-white text-center border-0">

                            <img src="https://source.unsplash.com/600x900/?nature,water" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <form>
                                    <div className="input-group mb-3 w-75 mx-auto">
                                        <input type="search" className="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2" />
                                        <button type="submit" className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                                <div className="bg-dark py-3 bg-opacity-50">
                                    <h2 className="card-title">{data.name}</h2>
                                    <p className="card-text lead">Tuesday, November 23, 2021</p>
                                    <hr />
                                    <i className="fas fa-cloud fa-4x"></i>
                                    <h1 className="fw-bolder mb-5">{data.main.temp}&deg;C</h1>
                                    {/* <p className="lead mb-0 fw-bolder">{data.weather[0].main}</p> */}
                                    {/* <p className="lead ">{temp_min}&deg;C | {temp_max} &deg;C</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SerachWeather
