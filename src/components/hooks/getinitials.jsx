import React from 'react'

const getinitials = (firstName, lastName) => {

let initials = firstName[0] + lastName[0];
  return {
    initials
  }
  
}

export default getinitials