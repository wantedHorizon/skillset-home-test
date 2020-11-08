import React from 'react';
import { Comment as CommentSemanticUI } from 'semantic-ui-react'

const Comment = ({ autour = "TEST", msg = "no message provided", imgSrc="https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png" }) => {
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