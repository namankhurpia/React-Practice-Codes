import {useState} from 'react'; 
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
    const [modalisOpen, setModalIsOpen] = useState(false);

    

    function deleteHandler(){
        console.log("clicked delete on: "+ props.text);
        setModalIsOpen(true);

    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return (<div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            <button className="btn" onClick={deleteHandler} >Delete</button>
        </div>
        {modalisOpen ? <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler} /> : null}
        {modalisOpen ? <Backdrop onClick={closeModalHandler} /> : null}
        
    </div>);
}

export default Todo