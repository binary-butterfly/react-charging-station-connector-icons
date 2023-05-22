import React from 'react';

const SvgrMock = React.forwardRef(function SvgrMockInner(props, ref) {
    return <span ref={ref} {...props} />;
});

export const ReactComponent = SvgrMock;
export default SvgrMock;
