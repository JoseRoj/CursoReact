/*const newMessage = {
    message: 'Hola Mundo',
    subtitle: 'Subtitulo'
}
const getResult = () => {
    return 'Hola Mundo'
}*/
import PropTypes from 'prop-types'
export const App = ({title, subTitle, name}) => {
    return  (
        <>
            <h1>{title}</h1>
            <p> {subTitle}</p>
            <p> {name}</p>
        </>
  )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
    name: PropTypes.string,
}

App.defaultProps = {
    title: 'Hola Mundo',
    subTitle: "No hay subtitulo",
    name: 'Trunks',
}