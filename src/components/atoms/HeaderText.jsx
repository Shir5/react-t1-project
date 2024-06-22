import React from 'react';


function HeaderText({ text, level = 1, className = '' }) {
    const Tag = `h${level}`;

    return (
        <Tag className={className} aria-label={text}>
            {text}
        </Tag>
    );
}

export default HeaderText;