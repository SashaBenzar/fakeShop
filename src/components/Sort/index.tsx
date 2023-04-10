import { selectSort, useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setSort } from "../../Redux/Slice/sortSlice";

import styles from "./Sort.module.scss";

export const Sort = () => {
    const dispatch = useAppDispatch();
    const { sort } = useAppSelector(selectSort);

    return (
        <div className={styles.div}>Sort by: <span className={styles.span} onClick={() => dispatch(setSort(sort == 'asc' ? 'desc' : 'asc'))}>price{sort == 'asc' ? '▲' : '▼'}</span></div>
    );
}