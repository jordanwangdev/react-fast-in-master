import React from 'react';

const Logs = ({ fill = '#000', width = '32px', height = '32px' }) => (
    <svg
        height={height}
        version='1.1'
        viewBox='0 0 18 18'
        width={width}
        xmlns='http://www.w3.org/2000/svg'
    >
        <title />
        <desc />
        <defs />
        <g
            fill='none'
            fillRule='evenodd'
            id='Page-1'
            stroke='none'
            strokeWidth='1'
        >
            <g
                fill={fill}
                id='Core'
                transform='translate(-549.000000, -129.000000)'
            >
                <g
                    id='drive-document'
                    transform='translate(549.000000, 129.000000)'
                >
                    <path
                        d='M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M14,6 L4,6 L4,4 L14,4 L14,6 L14,6 Z M14,10 L4,10 L4,8 L14,8 L14,10 L14,10 Z M11,14 L4,14 L4,12 L11,12 L11,14 L11,14 Z'
                        id='Shape'
                    />
                </g>
            </g>
        </g>
    </svg>
);

export default Logs;
