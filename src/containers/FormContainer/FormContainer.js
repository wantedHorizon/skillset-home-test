import React, { useEffect, useState } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import AddMessage from '../../components/form/AddMessage';
import Comments from '../Comments/Comments';
import commentsAPI from '../../api/comments-api';
import './FormContainer.css';
const FormContainer = () => {

    const [msgCount,setMsgCount] = useState(0);
    const [comments, setComments] = useState([]);
    //get comments
    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await commentsAPI.get('all');
                setComments(data.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [msgCount])

    const onSubmitCommentHandler = async(data) => {
        
        try{
            const response = await commentsAPI.post('all',data);
            if( Number(response.status) !== 201){
                throw new Error("Server Error");
            }
            setMsgCount(msgCount+1);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }
    return (
        <div className='FormContainer' >
            <AddMessage onSubmitCommentHandler={onSubmitCommentHandler}/>
            <Comments comments={comments}/>
        </div>
    )
}
export default FormContainer;