import { IoPlayBackOutline, IoPlayForwardOutline, IoPlayOutline, IoPlaySkipBackOutline, IoPlaySkipForwardOutline } from 'react-icons/io5';
import './player.scss'

function Play() {
    return (
        <>
            <div>
                <img src="/background/sound-wave.png" alt="" />
                {/* <div className='title'>{song.title}</div>
                <div className='duration-bar'>
                    <input type="range" min="0" max={duration} value={currentTime} onChange={handleTime}
                     />
                </div> */}
                <div className='play'>
                    <IoPlaySkipBackOutline size={30} />
                    <IoPlayBackOutline size={30} />
                    <IoPlayOutline size={80} />
                    <IoPlayForwardOutline size={30} />
                    <IoPlaySkipForwardOutline size={30} />
                </div>
            </div>
        </>
    );
}

export default Play;