
import { useEffect, useState } from "react";
import styles from './AddItem.module.css'

const AddItem = () => {

    const addItem = (name, price) => {

        if(name === '' || !price) return
        postItem({item:name, price:Number(price)})
        setName('')
        setPrice('')
    }

    async function postItem (item) {

        try {
            await fetch('http://localhost:3000/items', {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(item)})
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')



    return (

        <div className={styles.container}>
            <h2>Add new item</h2>
            <input type='text' placeholder="Item" value={name} onChange={e => setName(e.target.value)} className={styles.input} />
            <input type='number' placeholder="Price" min='1' max='200' value={price}  onChange={e => setPrice(e.target.value)} className={styles.input} />
            <button onClick={() => addItem(name, price)}>Enviar</button>
        </div>
    )
}


export default AddItem;