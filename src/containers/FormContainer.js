import React, { useState } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const FormContainer = () => {

    const [newEmail, setNewEmail] = useState('');
    const [newMessage, setNewMessage] = useState('');


    return (
        <div className='FormContainer'>
            <Form>
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    placeholder='Email'
                    value={newEmail}
                    onChange={(e, { value }) => setNewEmail(value)}
                // error={{
                //     content: 'Please enter a valid email address',
                //     pointing: 'below',
                // }}
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
export default FormContainer;