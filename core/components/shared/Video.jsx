import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({ src }) => {
    return (
        <div className='md:w-[800px] md:max-h-[500px] w-full aspect-video'>
            <ReactPlayer
                url={src}
                width='100%'
                height='100%'
                playing={true}
                controls={true}
            />
        </div>
    )
}

export default Video
