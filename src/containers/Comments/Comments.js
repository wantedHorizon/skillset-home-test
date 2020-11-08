import React, { useEffect, useState } from 'react';
import Comment from '../../components/form/Comment';
import { Comment as CommentSemanticUI, Input } from 'semantic-ui-react';
const Comments = ({comments=[]}) => {

    const [displayComments, setDisplayComments] = useState([]);
    
    const [search, setSearch] = useState('');


    //search 

    useEffect(() => {
        if (search.length > 0) {

            const newComments = comments.filter(c => {
                return c.msg.toLowerCase().includes(search.toLowerCase()) || c.autour.toLowerCase().includes(search.toLowerCase());
            });

            setDisplayComments(newComments);
        } else {
            setDisplayComments(comments.slice());
        }
    }, [search, comments])
    return (
        <div className='Comments' style={{padding:'20px', background:'white'}}>
            <CommentSemanticUI.Group>
                <Input
                    icon='search' 
                    placeholder='Search...'
                    onChange={(e, { value }) => setSearch(value)}
                    value={search}
                    style={{width: '100%'}}
                />
                {displayComments.map(c => <Comment key={c.id} autour={c.autour} msg={c.msg} imgSrc={c.avatar} />)}

            </CommentSemanticUI.Group>

        </div>
    )
}
export default Comments;