import { ErrorMessage } from 'formik';
import { CommentsLabel, CommentInput, ErrWrapper } from './CommentField.styled';

export const CommentField = ({ errors, touched }) => {
  const isFieldInvalid =
    errors.hasOwnProperty('comments') && touched.hasOwnProperty('comments');
  return (
    <CommentsLabel>
      Comments
      <CommentInput
        as="textarea"
        name="comments"
        placeholder="Type your comments here..."
        data-invalid={isFieldInvalid}
      />
      <ErrWrapper>
        <ErrorMessage name="comments" />
      </ErrWrapper>
    </CommentsLabel>
  );
};
