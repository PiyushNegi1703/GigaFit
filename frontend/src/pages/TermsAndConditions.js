import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const TermsAndConditions = () => {
    const [terms, setTerms] = useState();

    useEffect(() => {
        const fetchTerms = async() => {
            const response = await fetch(process.env.REACT_APP_GO_API)

            const json = await response.json();

            if(response.ok) {
                console.log(json);
            }

            if(!response.ok) {
                console.error("error")
            }
        }

        fetchTerms();
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default TermsAndConditions
