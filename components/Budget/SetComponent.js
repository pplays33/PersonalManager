import './components.css'

export default function SetComponents({ valueDefault, onChange, onClick, }) {
    return (
        <>
            <label className='label'>
                <input
                    type='num'
                    className='input-sum'
                    value={ valueDefault }
                    onChange={ onChange }
                />
            </label>
            <button
                className='sumSave-button'
                onClick={ onClick }
            >
                set Sum
            </button>
        </>
    );
}