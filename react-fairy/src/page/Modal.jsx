import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modal() {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <div id="modal">

                <div id="modalBox">

                    <div id="videoBox">
                        <iframe id="youtube" width="500" height="540" src="https://www.youtube.com/embed/-z24DhJ4pM0?controls=1&autoplay=0&loop=1&autohide=1&mute=1&playsinline=1&playlist=-z24DhJ4pM0" title="Hong Kong   2849" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <p id="modalText">Lorem ipsum dolor sit amet.</p>
                    <button id="modalClose">&times;</button>

                </div>

            </div>
        </>
    );
}

export default Modal;