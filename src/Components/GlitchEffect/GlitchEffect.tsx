import React from 'react';
import glitch from './Glitch.module.scss';

interface Props {
    children: React.ReactNode;
}

const GlitchText: React.FC<Props> = ({children}) => {
    return (
        <div className={glitch.effect}>
            <span aria-hidden={true}>{children}</span>
            {children}
            <span aria-hidden={true}>{children}</span>
        </div>
    );
}

export default GlitchText;
