import React from 'react'

const CanvasComponent = ({file}) => {
    return (
        <div>
            <img className="img-file" src={file.url} alt=""/>
        </div>
    )
}

export default CanvasComponent
