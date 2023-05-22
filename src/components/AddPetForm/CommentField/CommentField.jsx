import { CommentsLabel, CommentInput, ErrWrapper } from './CommentField.styled';
import PropTypes from 'prop-types';

export const CommentField = ({ errors, touched, category, emulTouch }) => {
  const isFieldInvalid =
    (errors.comments && touched.comments) ||
    (errors.comments && emulTouch.includes('comments'));
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
      {isFieldInvalid && <ErrWrapper>{errors.comments}</ErrWrapper>}
    </CommentsLabel>
  );
};

CommentField.propTypes = {
  emulTouch: PropTypes.arrayOf(PropTypes.string).isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};
