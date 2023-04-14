import React from "react"
import {useState, useEffect} from "react"

export default function Form(){
    const [content, setContent] = useState("null");
    var message = "";

    function validCard(content){
        let cardNo = []
        for(let i=0; i<content.length; i++){
          cardNo.push(content[i])
        }
        console.log(cardNo)
        cardNo = cardNo.reverse()
        var sum =[]
        for(let y=0; y<cardNo.length; y++){
          
          if(y%2!=0){
            cardNo[y]  *= 2
          }
          sum += cardNo[y]
        }
       let add = 0
        for(let x=0; x<sum.length; x++){
            add += parseInt(sum[x])
        }
        if(add%10==0){
          message = "card is valid"
        }else{
         message = "card is invalid"
        }
        
        
      }

    return(
        <div>
            <input type="text" placeholder="Enter card number" onChange={(e) => {
            setContent(e.target.value);
          }} />
            <button onClick={validCard(content)}>Submit</button>
            <p>{message}</p>
        </div>
    )
}