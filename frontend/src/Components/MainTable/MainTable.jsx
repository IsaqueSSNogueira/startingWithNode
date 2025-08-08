
import { useEffect, useState } from "react";
import styles from './MainTable.module.css'
import MoreOptionsDropdown from "./MoreOptionsDropdown/MoreOptionsDropdown";

const MainTable = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/items') // ou a URL da sua API
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch((err) => console.error('Erro ao buscar:', err));
    });


    const [dropdownId, setDropdownId] = useState(null)

    const toggleDropdownId = (id) => {
        if(dropdownId === id){
            setDropdownId(null)
        }
        else{
            setDropdownId(id)
        }
    }

    return (

        <table className={styles.table}>
        <caption className={styles.caption}>Shopping List</caption>
        <thead>
            <tr className={styles.row}>
                <th className={styles.title}>Item</th>
                <th className={styles.title}>Price</th>
                <th className={styles.title}>Edit</th>
            </tr>
        </thead>

        <tbody>

            {items.map((item, id) => {
                return (
                    <tr className={styles.row} key={id}>
                        <td className={styles.data}>{item.item}</td>
                        <td className={styles.data}>{item.price}</td>
                        <td><button className={styles.more} onClick={() => toggleDropdownId(id)}>More options</button></td>
                        {dropdownId === id && <MoreOptionsDropdown id={id} item={item.item} price={item.price} toggleDropdownId={toggleDropdownId} />}
                    </tr>
                )
            })}

        </tbody>

    </table>
    )
}


export default MainTable;