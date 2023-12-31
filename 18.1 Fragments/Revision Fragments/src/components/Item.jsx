import styles from "./Item.module.css"

const Item=({foodItem})=>{
    // let {foodItem}=props;
    return(

        <li className={`${styles.Vc-Item} list-group-item`}>
          <span className={styles["vc-span"]}>{foodItem}</span>
        </li>
    )

};
export default Item;
