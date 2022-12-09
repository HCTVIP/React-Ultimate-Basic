import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeleteUser = (props) => {
    
    const {show, setShow, dataDelete} =props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = () => {
        alert('Are you sure you want to delete');
    };
    return (
        <>
        <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
        >
            <Modal.Header closeButton>
            <Modal.Title>Confirm delete the User?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure delete this user. email = <strong>{dataDelete && dataDelete.email ? dataDelete.email : ""}</strong></Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button 
                variant="primary" 
                onClick={() => handleSubmitDeleteUser()}
            >
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalDeleteUser;