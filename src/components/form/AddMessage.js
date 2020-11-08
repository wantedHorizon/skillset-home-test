import React from 'react';
const AddMessage = props => {
    return (
        <div className='AddMessage'>
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
export default AddMessage;