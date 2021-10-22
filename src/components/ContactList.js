import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { useBook } from "../context/Book";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { contacts, filteredContacts } = useBook() //contact context
  const [computedContacts, setComputedContatcs] = useState([]) //computed contacts so we can manage, empty with and without hiding filters
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if(filter === ''){
      setComputedContatcs(contacts) //just returns the contacts if no filter used
      return
    }

    setComputedContatcs(filteredContacts(filter))
    
  }, [contacts, filter, filteredContacts])

  return(
    <div className="col">
      {contacts.length > 0 && 
        (
          <div className="row">
            <div className="col">
              <label>Name Filter</label>
              <input name="filter" value={filter} onChange={e => setFilter(e.target.value)}/>
            </div>
          </div>
        ) 
      }
      <div className="row">
        {
          computedContacts.length > 0 ?
            <table>
              <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td></td>
              </tr>
              </thead>
              <tbody>
                {computedContacts.map((contact, index) => {
                  return(
                    <ContactItem contact={contact} index={index}/>
                  )
                })}
              </tbody>
            </table>
          : 
            <>No Contact Found</>
        }
      </div>
    </div>
  )
}

export default ContactList;