import React from 'react';

const ContactCard = (props) => {
  const {id,name,phone} = props.contact;
    return (
      <div className='item'>
      <div className='content'> 
         <div className='Header'>{name}</div>
         <div className='Header'>{phone}</div>
      </div>
    <i className='render list'></i>
 </div>
    )
}

export default ContactCard;