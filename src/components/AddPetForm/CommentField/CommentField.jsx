import { ErrorMessage } from 'formik';
import { CommentsLabel, CommentInput, ErrWrapper } from './CommentField.styled';
import PropTypes from 'prop-types';

export const CommentField = ({ errors, touched, category }) => {
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
        data-category={category}
      />
      <ErrWrapper>
        <ErrorMessage name="comments" />
      </ErrWrapper>
    </CommentsLabel>
  );
};

CommentField.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};
