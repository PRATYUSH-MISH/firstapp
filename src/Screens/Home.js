import React, { useEffect, useState } from 'react';
import Navbar from '../Componets/Navbar';
import Cards from '../Componets/Cards';
import Footer from '../Componets/Footer';

export default function Home() {
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [search, setSearch] = useState('');
    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:8080/api/foodData", {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"
                }
            });
            response = await response.json();
            setFoodCategory(response[1]);
            setFoodItem(response[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <form style={{ position: 'absolute', top: '10px', left: '200px', margin: '20px' }}>
                            <input style={{ width: '500px',  height:'40px'}} className="form-control" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

                        </form>
                    </div>
                    {/* <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?burger" alt="First slide"
                                style={{ filter: "brightness(30%" }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?momos" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?sea" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a> */}
                </div>

            </div>
            <div className='container'>
                {
                    foodCategory.length !== 0 ?
                        foodCategory.map((data) => (
                            <div key={data._id} className='row m-3'>
                                <div className='fs-3 m-3'>{data.CategoryName}</div>
                                <hr />
                                {foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                    .map((filterItems) => (
                                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                            <Cards foodItem={filterItems}
                                                options={filterItems.options[0]}


                                            ></Cards>
                                        </div>
                                    ))}
                            </div>
                        ))
                        : <div>Loading...</div>
                }
            </div>
            <Footer />
        </div>
    );
}