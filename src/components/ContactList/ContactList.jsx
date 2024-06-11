import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { selectContact } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";



export default function ContactList() {
    const contacts = useSelector(selectContact);
    const filters = useSelector(selectFilter);

    const filteredContacts = contacts.filter(obj => obj.name.toLowerCase().includes(filters.toLowerCase()));
    
    const dispatch = useDispatch(); 
    
        const hendelDelate = (idToDelete) => {
        dispatch(deleteContact(idToDelete));
        };
    
    return (
        <>
            <ul>
            {filteredContacts.map((contact) =>(
                <li key={contact.id}>
                    <Contact contact={contact} deleteContact={hendelDelate} />
                </li>
            ))}
        </ul>
        </>
)
}