import React, { useState } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
const AddMessage = ({onSubmitCommentHandler}) => {
    const [newEmail, setNewEmail] = useState('');
    const [newMessage, setNewMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            msg: newMessage,
            autour: newEmail
        }
        const success = onSubmitCommentHandler(data);
        if(success){
            setNewEmail('');
            setNewMessage('');
            alert("message added thanks");
        }
        console.log("submited");
    }
    return (
        <div className='AddMessage' style={{textAlign:'right', backgroundColor: '#c9c9c9', padding: '20px'}}>
            <Form onSubmit={onSubmit}>
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    placeholder='Email'
                    value={newEmail}
                    onChange={(e, { value }) => setNewEmail(value)}
                />


                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    placeholder='Message'
                    value={newMessage}
                    onChange={(e, { value }) => setNewMessage(value)}
                />

                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='SUBMIT'
                    primary
                    type="submit"
                />
            </Form>
        </div>
    )
}
export default AddMessage;