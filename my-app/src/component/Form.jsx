import { Fragment, useState } from 'react'




const Form = ({onsubmit}) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");
    const [ image , setImage] = useState(null) ;  
    const [ error , seError] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim() || !rating.trim()){
            seError('Both inputs are required');
            return;}

        seError("")
        console.log("submit ")
        const FeedbackForm={name, rating, comment,image}
        onsubmit(FeedbackForm)
    }

    return (
        <Fragment>

            <form className='form-feedback ' onSubmit={handleSubmit} >
                <label>Name (optional) </label><br/>
                <input value={name} placeholder='last and first name' onChange={(e) => setName(e.target.value)} />
                <label> Rating (1-5) <strong>Required</strong></label>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1 -Terrible </option>
                    <option value="2">2 -Poor</option>
                    <option value="3">3 -Average</option>
                    <option value="4">4 -Good</option>
                    <option value="5">5 -Excellent</option>
                </select><br/>
                <textarea id="message" name="message" rows="5" cols="30" placeholder="Type your message here..." value={comment} onChange={(e)=>setComment(e.target.value)}></textarea><br/>
                <input    type='file' onChange={(e)=>setImage(e.target.files[0])}/><br/>
                {error && <p style={{color:"red"}}> {error} </p>}
                <button type='submit' >send</button>
            </form>

        </Fragment>

    )
}

export default Form











