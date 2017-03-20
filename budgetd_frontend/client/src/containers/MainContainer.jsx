import React from 'react'

const Main = (props) => (
  <div className='main-container'>
    {props.children}
  </div>
)

const { element } = React.PropTypes
console.log(element);

Main.propTypes = {
  children: element.isRequired
}

export default Main
