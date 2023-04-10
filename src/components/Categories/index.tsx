import { useAppDispatch } from "../../Redux/hooks";
import { useGetCategoriesQuery } from "../../Redux/Slice/productsSlice";
import { setCategory } from "../../Redux/Slice/sortSlice";

export const Categories = () => {
    const { data: categories, isLoading, error } = useGetCategoriesQuery('');
    const dispatch = useAppDispatch();

    return (
        <ul>
            <li onClick={() => dispatch(setCategory(''))}>all</li>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {categories && categories.map((cat) => (
                <li key={cat} onClick={() => dispatch(setCategory(`category/${cat}`))}>
                    {cat}
                </li>
            ))}
        </ul>
    );
}