import React from 'react';

const PostAddForm = () => {
   return (
      <form className="buttom-panel d-flex">
         <input
         type="text"
         placeholder="О чем Вы думаете сейчас?"
         className="form-control new-post-label"
         />
         <button
         type="submit"
         className="btn-outline-secondary">
         Добавить</button> 
      </form>
   )
}

export default PostAddForm;