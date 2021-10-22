import { createContext, useContext, useState } from "react"

const Book = createContext()

const BookContext = ({children}) => {
  const [contacts, setContacts] = useState([])

  const addContact = (contact) => setContacts((prevState) => [...prevState, contact]) // add a contact

  const removeContact = (contact) => setContacts(prevState => prevState.filter(ps => ps.id !== contact.id)) //remove a contact

  //filter a contact based on the first name
  const filteredContacts = filter => filter !== '' ? contacts.filter(contact => contact.firstName.toLowerCase().startsWith(filter.toLowerCase())) : contacts

  return (
    <Book.Provider value={{contacts, addContact, removeContact, filteredContacts}} >
      {children}
    </Book.Provider>
  )

}

export default BookContext

export const useBook = () => useContext(Book)