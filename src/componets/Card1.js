import React from 'react'

import buttonStyles from './card1.module.css'

function Card1({submittedData,hint,hint1,hint2}) {
  console.log(submittedData)
  return (
    
    
    <div  className={buttonStyles.div} >
        <div className={buttonStyles.div2}>
        </div>
        <div className={buttonStyles.circle3}>

        </div>
        <div className={buttonStyles.circle1}>

        </div>
        <div className={buttonStyles.circle2}>

        </div>
        
        <div className={buttonStyles.div7}>
        </div>
        <div className={buttonStyles.div6}>
        </div>
        <div className={buttonStyles.div5}>
        </div>
        <div className={buttonStyles.div3}>
        </div>
        <div className={buttonStyles.div4}>
        </div>
        <div >
      
          <div>
            <p className={buttonStyles.ul}> {submittedData.name || hint1}</p>
            <p className={buttonStyles.p1}> {submittedData.cardNumber || hint}</p>
            <p className={buttonStyles.hhh}> {submittedData.mm || hint2}/{submittedData.yy ||hint2}</p>
            
          </div>
        
      </div>
    </div>
       
          
        
   
  )
}

export default Card1