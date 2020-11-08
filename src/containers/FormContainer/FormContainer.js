import React, { useEffect, useState } from 'react';
import AddMessage from '../../components/form/AddMessage';
import Comments from '../Comments/Comments';
import commentsAPI from '../../api/comments-api';
import './FormContainer.css';
import Loading from '../../components/Loading/Loaing';
const FormContainer = () => {

    const [msgCount,setMsgCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);


    //get comments
    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await commentsAPI.get('all');
                setComments(data.data);

            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [msgCount])

    const onSubmitCommentHandler = async(data) => {
        
        try{
            setLoading(true);
            const response = await commentsAPI.post('all',data);
            if( Number(response.status) !== 201){
                throw new Error("Server Error");
            }
            setMsgCount(msgCount+1);
            return true;
        }catch(e){
            console.log(e);
            setLoading(false);
            return false;
        }
    }
    if(loading){
        return <Loading />;

    }
    return (
        <div className='FormContainer' >
            <AddMessage onSubmitCommentHandler={onSubmitCommentHandler}/>
            <Comments comments={comments}/>
        </div>
    )
}
export default FormContainer;