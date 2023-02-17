import React, { useEffect } from 'react';

const Alert = (props) => {
    const { name, closeAlert } = props;

    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, [name])

    return (
        <div id='toast-container'>
            <div className="toast">
                {name === 'clear' ? 'Спасибо за покупку' : `${name} "добавлен в корзину"`}
                {/* {name} добавлен в корзину */}</div>
        </div>
    );
};

//{name === 'clear' ? 'Спасибо за покупку' : { name } + "добавлен в корзину"}

export default Alert;