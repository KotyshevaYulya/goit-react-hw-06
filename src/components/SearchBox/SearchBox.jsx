import { useId } from "react";
import css from "./SearchBox.module.css"
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";



export default function SearchForm() {
    const selectNameFilter = useSelector(state => state.filters.name);

    const dispatch = useDispatch(); 

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value));   
    };

    const fieldId = useId();
    return (
        <div className={css.searchContainer}>
            <label htmlFor={fieldId} className={css.searchForm}>
                Find contact by name
                <input type="text" onChange={handleChange} id={fieldId}/>
            </label>
        </div>
    )
}