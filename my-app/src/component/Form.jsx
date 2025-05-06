import { Fragment, useState } from 'react'




const Form = ({onsubmit}) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");
    const [ image , setImage] = useState(null) ;  
    const [ error , setError] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()){
            setError('Both inputs are required');
            return;}

        setError("")
        onsubmit({ name, rating, comment, image })
        setName("")
        setRating(1)
        setComment("")
        setImage(null)
    }

    return (
        <Fragment>

            <form className='form-feedback ' onSubmit={handleSubmit} >
                {/* input name */}
                <label>Name (optional) </label><br/>
                <input value={name} placeholder='last and first name' onChange={(e) => setName(e.target.value)} />

                {/* rating options */}
                <label> Rating (1-5) <strong>Required</strong></label>
                <select
                 value={rating}
                 onChange={e => setRating(Number(e.target.value))} >
                 {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>
                    {n}{" "}
                    {["Terrible","Poor","Average","Good","Excellent"][n-1]}
                 </option> ))}
                </select><br/>

                {/* Comments textarea */}
                <textarea id="message" name="message" 
                rows="5" cols="30" 
                placeholder="Type your message here..." 
                value={comment} 
                onChange={(e)=>setComment(e.target.value)}/><br/>

                {/* image input file */}
                <input  
                  type='file'
                  onChange={(e)=>setImage(e.target.files[0])}/><br/>

                {/* Error  */}
                {error && <p style={{color:"red"}}> {error} </p>}

                {/* submit button */}
                <button type='submit' >SEND</button>
            </form>

        </Fragment>

    )
}

export default Form











