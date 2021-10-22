import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useBook } from "../context/Book";

const ContactForm = () => {
  const history = useHistory();
  const { addContact, contacts } = useBook();//context import

  //Check if user wants to add more contacts
  const [another, setAnother] = useState(true)

  //our contact object
  const [contact, setContact] = useState({firstName:'', lastName: '', email: '', phone: ''});

  //just handle the change of states, better than separated values useStates
  const onChange = e => {
    const {name, value} = e.target
    setContact( prevState => ({...prevState, [name]: value}))
  }

  //every time user tries to submit a contact
  const onSubmit = e => {
    e.preventDefault();
    let id = 0;
    const ids = contacts.map(contact => contact.id)

    /* it is important to notice that if you use some() or find() directcly to find the smallest positive missing number, 
     you'll end up with unsafe loop code. I just learned it
     
     If you delete a contact, his ID'll be available next time.
     */
    while(ids.indexOf(id) !== -1){
      id++
    }
    
    //adds contact information plus unique ID
    addContact({...contact, id: id})

    // clear our form
    setContact({firstName:'', lastName: '', email: '', phone: ''})
    if(!another){
      history.push('/');
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col">
          <label>First Name</label>
          <input name="firstName" value={contact.firstName}  onChange={onChange} required/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Last Name</label>
          <input name="lastName" value={contact.lastName} onChange={onChange} required/>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <label>Email</label>
          <input name="email" value={contact.email} onChange={onChange} required/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Phone</label>
          <input name="phone" value={contact.phone} onChange={onChange} required/>
        </div>
      </div>
      <div className="row">
        <button onClick={() => setAnother(false)}>Add</button>
        <button onClick={() => setAnother(true)}>Add another</button>
      </div>
    </form>
  )
}


export default ContactForm;