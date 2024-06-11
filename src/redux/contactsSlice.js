import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [{ "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
        { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
        { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
        { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }]
    },
    reducers: {
        deleteContact: (state, action) => {
            const updatedItems = state.items.filter(obj => obj.id !== action.payload);
            state.items = updatedItems;
        },
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: crypto.randomUUID(),
                        name,
                        number,
                    },
                };
            },
        },
    },
});

export const { deleteContact, addContact } = slice.actions;

export const selectContact = state => state.contacts.items; 

export default slice.reducer;

