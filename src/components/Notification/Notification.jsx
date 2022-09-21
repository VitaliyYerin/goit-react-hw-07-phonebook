import PropTypes from 'prop-types';
import { BsEmojiSmile } from 'react-icons/bs';
import { Message } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <Message>
      {message}
      <BsEmojiSmile size={30} />
    </Message>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
