import * as React from 'react';

const pasChildren = (Component) => (props) => <Component>{props.children}</Component>;

export default pasChildren;
