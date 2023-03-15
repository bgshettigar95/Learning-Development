import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const Modal = (props) => {
    const { open, title, onClose } = props;
    const handleOnClose = () => {
        onClose();
    };

    return <Dialog onClose={handleOnClose} open={open}>
        <DialogTitle>{title}</DialogTitle>
        {props.children}
    </Dialog>

}


export default Modal;