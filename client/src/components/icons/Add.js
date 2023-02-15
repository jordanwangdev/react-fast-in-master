import React from 'react';

const Add = ({ fill = '#000', width = '32px', height = '32px' }) => (
    <svg
        height={height}
        viewBox='0 0 448 448'
        width={width}
        fill={fill}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0' />
    </svg>
);

export default Add;