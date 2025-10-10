import './hamburger.css';

export default function Hamburger({ toggle }) {

    return (
        <div className='hamburger' onClick={toggle}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    );
} 