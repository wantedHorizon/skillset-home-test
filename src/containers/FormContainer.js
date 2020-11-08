import React, { useState } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import AddMessage from '../components/form/AddMessage';
import Comments from './Comments';

const FormContainer = () => {

 


    return (
        <div className='FormContainer'>
            <AddMessage />
            <Comments />
        </div>
    )
}
export default FormContainer;