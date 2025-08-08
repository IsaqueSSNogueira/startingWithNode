

import { useEffect, useState } from 'react'
import styles from './ShoppingList.module.css'
import MainTable from './MainTable/MainTable';
import AddItem from './AddItem/AddItem';


const ShoppingList = () => {


    return (

        <div className={styles.container}>

            <MainTable /> 
            <AddItem />

        </div>

    )
}

export default ShoppingList;