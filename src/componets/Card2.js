import React from 'react'
import btnStyles from './card2.module.css'
function Card2({submittedData,hint}) {
  return (
    <div className={btnStyles.back}>
        <div className={btnStyles.black}>
        </div>
        <div className={btnStyles.cvc}> 
        <p className={btnStyles.p}>{submittedData.cvc || hint}</p>  
        </div>
        {/* ===============design============ */}
        <div className={btnStyles.div1}>   
        </div>
        <div className={btnStyles.div2}>   
        </div>
        <div className={btnStyles.div3}>   
        </div>
        <div className={btnStyles.div4}>   
        </div>
        <div className={btnStyles.div5}>   
        </div>
        <div className={btnStyles.div6}>   
        </div>
        <div className={btnStyles.div7}>   
        </div>
        <div className={btnStyles.div8}>   
        </div>
        <div className={btnStyles.div9}>   
        </div>
        <div className={btnStyles.div10}>   
        </div>
        <div className={btnStyles.div11}>   
        </div>
        <div className={btnStyles.div12}>   
        </div>
    </div>
  )
}

export default Card2