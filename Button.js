import PropTypes from 'prop-types'


const Button = ({name ,color, onclick}) => {
    return (
        <button style={{backgroundColor:color}} className='btn' onClick={onclick}>{name}</button>
    )
}

Button.propTypes = {
    name : PropTypes.string,
    color : PropTypes.string,
    onclick : PropTypes.func
}

export default Button
