import React from 'react';
import { Comment as CommentSemanticUI } from 'semantic-ui-react'

const Comment = ({ autour = "TEST", msg = "no message provided" ,imgSrc}) => {
    return (
        <CommentSemanticUI>
            <CommentSemanticUI.Avatar src={imgSrc} />
            <CommentSemanticUI.Content>
                <CommentSemanticUI.Author as='a'>{autour}</CommentSemanticUI.Author>

                <CommentSemanticUI.Text>{msg}</CommentSemanticUI.Text>

            </CommentSemanticUI.Content>
        </CommentSemanticUI>

    )
}
export default Comment;