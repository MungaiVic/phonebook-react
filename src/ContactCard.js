import React from 'react'
import Contact from './Contact'

const Contacts = ({contact}) => {
    return (
        <div>
            {contact.map((contacts)=>{
                return <Contact key={contacts._id} {...contacts}></Contact>
            })}
        </div>
    )
}

export default Contacts
