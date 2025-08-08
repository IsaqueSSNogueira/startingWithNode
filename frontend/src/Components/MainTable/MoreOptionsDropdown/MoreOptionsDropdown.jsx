
import { useState } from 'react';
import styles from './MoreOptionsDropdown.module.css'


const MoreOptionsDropdown = ({id, item, price, toggleDropdownId}) => {

    const [newItem, setNewItem] = useState(item)
    const [newPrice, setNewPrice] = useState(price)


    async function deleteItem() {
        // close menu
        toggleDropdownId(id)
        // try delete item
        try {
          const res = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE',
          });
          if (!res.ok) throw new Error('Erro ao deletar');
        } catch (err) {
          console.error(err);
        }
      }
      
    async function updateItem () {
        // close menu
        toggleDropdownId(id)
        if (!newItem || !newPrice) return;
        try {
            const res = await fetch(`http://localhost:3000/items/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({item:newItem, price: Number(newPrice)})
            })
            if(!res.ok) throw new Error('Erro ao atualizar item')
            
        } catch (err) {
            console.error(err)
        }
    }
 
    return (

        <div className={styles.container}>
            <p>Item {id + 1}</p>
            <input type='text' 
                   placeholder="Item" 
                   value={newItem} 
                   onChange={e => setNewItem(e.target.value)}
                   className={styles.input}
             />
            <input type='number' 
                   placeholder="Price" 
                   min='1' 
                   max='200' 
                   value={newPrice}  
                   onChange={e => setNewPrice(e.target.value)} 
                   className={styles.input}
            />
            <button className={styles.button} onClick={() => updateItem()}>Editar item</button>
            <button className={styles.button} onClick={() => deleteItem()}>Apagar item</button>
        </div>


    )
}


export default MoreOptionsDropdown;