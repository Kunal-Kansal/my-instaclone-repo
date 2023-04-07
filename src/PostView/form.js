import React from "react";
import {Link} from "react-router-dom";


export default function Form()
{
    return<div className='form-container'>
    <form action='/page-layout'>
      <input type="file" id="files" placeholder='No file chosen' accept=".jpg, .jpeg, .png"></input>
      <input type='text' placeholder='Author' className='special'></input> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <input type="text" placeholder='Location' className='special'></input><br/>
      <input type="text" placeholder="Description" id="description"></input><br/>
      <Link to="/page-layout"><button id='postButton' type='submit'>Post</button></Link>
        </form>
    </div>
}
