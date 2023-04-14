import React from "react"
import {useState, useEffect} from "react"

export default function Form(){
    const [content, setContent] = useState("null");
    var message = ""
   
    
    function validCard(content){
        let cardNo = []
        if (content==="null") {
          return
        }else{
          for(let i=0; i<content.length; i++){
            cardNo.push(content[i])
          }
          cardNo = cardNo.reverse()
          var sum =[]
          for(let  y=0;y<cardNo.length; y++){
            if(y%2 !== 0) {cardNo[y] *= 2 }
            sum += cardNo[y]
          }
         let add = 0
          for(let x=0; x<sum.length; x++){
              add += parseInt(sum[x])
          }
         return (add%10===0)? message = "Card is valid" : message = "Card is invalid"
        }
      }
      message= validCard(content)
    return(
        <div className="form">
            <input type="text" placeholder="Enter card number" onChange={(e) => {
            setContent(e.target.value);
          }} />
            
            <p>{message}</p>
        </div>
    )
}