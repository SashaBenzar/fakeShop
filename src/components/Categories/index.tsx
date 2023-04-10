import { useAppDispatch } from "../../Redux/hooks";
import { useGetCategoriesQuery } from "../../Redux/Slice/productsSlice";
import { setCategory } from "../../Redux/Slice/sortSlice";

import { CategoriesSkeleton } from "./CategoriesSkeleton";

import styles from "./Categories.module.scss";

export const Categories = () => {
    const { data: categories, isLoading, error } = useGetCategoriesQuery('');
    const dispatch = useAppDispatch();

    return (
        <ul className={styles.ul}>
            <li className={styles.li} onClick={() => dispatch(setCategory(''))}>all</li>
            {isLoading && <CategoriesSkeleton />}
            {error && <h1>Error</h1>}
            {categories && categories.map((item: string) => (
                <li className={styles.li} key={item} onClick={() => dispatch(setCategory(`category/${item}`))}>
                    {item}
                </li>
            ))}
        </ul>
    );
}