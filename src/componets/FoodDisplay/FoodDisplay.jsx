
import React, {useContext} from "react";
import './FoodDisplay.css'
import {StoreContext} from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";


const FoodDisplay = ({category, searchValue, setSearchValue}) => {


    const {food_list } = useContext(StoreContext)
    const filteredFoodList = food_list.filter((element) => {
        if (element.name.includes(searchValue)) {
            return true
        }
        return false
    })
    return (

        <div className='food-display' id='food-display' >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>


                <h2>Наше меню:</h2>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>



                    <input placeholder='🔍 Введите название блюда...'  value={searchValue} onChange={(event) => {
                        setSearchValue(event.target.value)
                    }} className='navbar-input-search' type="text"/>

                </div>
            </div>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description}
                                         image={item.image} price={item.price}/>
                    }
                })}

            </div>


        </div>
    )
}

export default FoodDisplay