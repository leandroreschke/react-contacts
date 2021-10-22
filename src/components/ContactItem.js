import { useBook } from "../context/Book"

const ContactItem = ({contact}) => {
  const { removeContact } = useBook()
  return(
    <tr key={contact.id}>
      <td>{contact.firstName} {contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td><button onClick={() => removeContact(contact)}>Delete</button></td>
    </tr>
  )

} 

export default ContactItem