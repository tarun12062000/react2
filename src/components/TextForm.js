import React, {useState} from 'react'

export default function TextForm(props) {
    const handalonchange=(event)=>{
        //console.log('onchange')
        setText(event.target.value)
    }
    const handalupclick= ()=>{
        // console.log("Uppercase is clicked" +text);
        let newtext= text.toUpperCase();
        setText (newtext);
        props.showalert('Converted to uppercase','success')
    }
    const handalLoclick=()=>{
      let newtext= text.toLowerCase();
      setText (newtext);
      props.showalert('Converted to Lowercase','success')
    }
    const handalclear=()=>{
      let newtext=''
      setText (newtext)
      props.showalert('textarea is  clear','success')
    }
    const handalCopytext=()=>{
      var text=document.getElementById("mybox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showalert('Text copy to clipboard','success')
    }
     const handalextraspace=()=>{
      let newtext= text.split(/[ ]+/)
      setText(newtext.join(' '))
      props.showalert('Extra spaces removed from text','success')

     }
    const [text,setText] = useState('Enter text here');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      
        <h1>{props.heading}</h1>
        <div className="mb-3">
       <textarea className="form-control" value={text} id="mybox" style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}} rows="9" onChange={handalonchange}></textarea>
       </div>
       <button className='btn btn-primary my-3' onClick={handalupclick}>Convert To uppercase</button>
       <button className='btn btn-primary my-3 mx-3' onClick={handalLoclick}>Convert To lowercase</button>
       <button className='btn btn-primary my-3' onClick={handalclear}>clear</button>
       <button className='btn btn-primary my-3 mx-3' onClick={handalCopytext}>Copy Text</button>
       <button className='btn btn-primary my-3' onClick={handalextraspace}>Remove Extra Spaces</button>
       </div>
       
       <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
       <h1>Your Text summary</h1>
       <p>{text.split(' ').length} words and {text.length} characters</p>
       <p>{0.008 * text.split(' ').length} Minutes Read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:'Enter the text in box to see the priview'}</p>
       </div>
       </>
  )
}
