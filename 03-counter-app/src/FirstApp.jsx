import PropTypes from 'prop-types';

// const newMessage = [1,2,3,4,5,6,7,8,9];
const newMessage = {
    message: 'Hola Mundo',
    title: 'Natalia',
};

const getResult = () => {
    return 4 + 4;
}

const getSum = (a, b) => {
    return a + b;
}

const FirstApp = ({
    title, 
    subtitle,
    name
}) => {   
    
    if(!title){
        throw new Error('El title no existe');
    }

    return (
        <>
            <code>{JSON.stringify(newMessage)}</code>
            {/* <h1>{ 1 + 1 }</h1> */}
            <h1>{getResult()}</h1>
            <h1>{getSum(2,3)}</h1>
            <h1>{title}</h1>
            <h1>{subtitle + 1}</h1>
            <h1>{name}</h1>
            {/* <p>Lorem, ipsum dolor.</p> */}
            {/** Para hacer comentarios*/}
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'Natalia'
}

export default FirstApp;