import React, {useState} from 'react'

export default function About(props) {

let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
    border: '1px solid',
    borderColor: props.mode==='dark'?'white':'black'
}


    // const [myStyle,setMyStyle]=useState({
   //     color:'black',
   //     backgroundColor:'white'
   // })


    //const [btnText,setBtnText]=useState("Enable dark mode")
    //const toggleStyle=()=>{
    //    if(myStyle.color==='black')
    //    {
    //   setMyStyle({
    //      color:'white',
    //      backgroundColor:'black'
    //    })
    //     setBtnText("Enable light mode") 
    //    }
    //    else{
    //        setMyStyle({
    //            color:'black',
    //            backgroundColor:'white'
    //    })
    //    setBtnText("Enable dark mode") 
    //}
//}
  return (
    <div classNameName="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Text Formatting</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        The app allows users to format their text in different ways. This can include options like changing the font style, size, and color, applying bold, italic, or underline formatting, and adjusting alignment (left, center, right). It enables users to transform plain text into visually appealing and well-organized content.  </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Word Count and Character Count</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        This feature provides users with a quick and accurate way to count the number of words and characters in a given text. It is particularly useful for writers, students, or anyone working with text who needs to keep track of their word or character limits. The app may also offer additional statistics like average word length, sentence count, and paragraph count.   </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Text Manipulation and Transformation</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        This feature allows users to perform various operations on their text, such as case conversion (e.g., converting text to uppercase or lowercase), removing or extracting specific characters, finding and replacing words or phrases, adding or removing line breaks, and sorting text alphabetically or numerically. These manipulation options help users to modify and customize their text according to their needs.   </div>
        </div>
      </div>
  </div>
    </div>
  )
}
