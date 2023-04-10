import { useAppDispatch } from "../../Redux/hooks";
import { setSort } from "../../Redux/Slice/sortSlice";

export const Sort = () => {
    const dispatch = useAppDispatch();

    return (
        <ul>
            <li onClick={() => dispatch(setSort('asc'))}>asc</li>
            <li onClick={() => dispatch(setSort('desc'))}>desc</li>
        </ul>
    );
}