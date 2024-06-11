import css from "./App.module.css"
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../CotactForm/ContactForm";

export default function App() {
    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm/>
            <SearchBox/>
            < ContactList/>
        </div>
)
};
