import { Heading } from 'rebass';
import PropTypes from 'prop-types';

const BaseHeading = ({ children, ...rest }) => (
    <Heading {...rest}>{children}</Heading>
);

BaseHeading.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default BaseHeading;