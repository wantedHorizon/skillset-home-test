import React, { useEffect, useState } from 'react';
import Comment from '../components/form/Comment';
import { Comment as CommentSemanticUI, Input } from 'semantic-ui-react';
import commentsAPI from '../api/comments-api';
const Comments = props => {

    const [comments, setComments] = useState([]);
    const [displayComments, setDisplayComments] = useState([]);

    const [search, setSearch] = useState('');

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
    }, [])

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
        <div className='Comments'>
            <CommentSemanticUI.Group>
                <Input
                    icon='search' 
                    placeholder='Search...'
                    onChange={(e, { value }) => setSearch(value)}
                    value={search}
                />
                {displayComments.map(c => <Comment key={c.id} autour={c.autour} msg={c.msg} imgSrc={c.avatar} />)}

            </CommentSemanticUI.Group>

        </div>
    )
}
export default Comments;