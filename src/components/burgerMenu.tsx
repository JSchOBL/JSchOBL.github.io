import React, { useState, useCallback } from 'react'
import { HamburgerElasticReverse } from 'react-animated-burgers'

function Burger(){
    const [isActive, setIsActive] = useState(false)
  
    const toggleButton = useCallback(
      () => setIsActive(prevState => !prevState),
      [],
    )
  
    return (
      <HamburgerElasticReverse
        buttonColor="#FFBC67"
        barColor="white"
        {...{ isActive, toggleButton }}
      />
    )
  }

export default Burger