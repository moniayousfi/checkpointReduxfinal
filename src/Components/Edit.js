import React from 'react'
import Modal from 'react-modal';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editTask} from '../Redux/Action/Action';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
Modal.setAppElement('#root')
const Edit = ({todo}) => {
    const[editdescription,setEditdescription]=useState(
      todo.description
    );
  const [modalIsOpen,setIsOpen] = React.useState(false);
 const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal(){
    setIsOpen(false);
  }
  const handleChangeEdit = (e) => { 
    e.preventDefault();
    setEditdescription(e.target.value);
    
  }
  const submitEdit=(e)=>{
   e.preventDefault();
   dispatch(editTask({id:todo.id,description:editdescription}));
   closeModal();
  }
    return (
      <div >
       <button onClick={openModal}><i class="fa fa-edit" aria-hidden="true"></i></button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
      
                <button onClick={closeModal}>close</button>
                <div>Edit Task</div>
                <form>
                  <input type="text" name ="description" value={editdescription}onChange={handleChangeEdit}/>
                   <button onClick={submitEdit}>save changes</button>
                </form>
              </Modal>
            </div>
    )
}

export default Edit
