import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
<>
    {
      
      data.map((item, index) =>(

      <div className={styles.wrapper} key={index}>
      <ItemCard id={item.id} name={item.name} price={item.price} />
    
    </div>
      )

    
  )
}


    
  

</>
);
}

export default Items;
