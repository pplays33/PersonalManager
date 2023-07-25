import './components.css'

export default function Task({id, titel, checked, onClick}) {
    return (
        <div className='item-main'>
            <label className= 'label'>
                <input
                    type="checkbox"
                    className= 'inputTaskCheckbox'
                    checked = {checked}
                    onClick={() => onClick(id)}
                />
                <h3 className= 'inputTaskTitle'> {titel} dadawdadaaifhuafh ahao hoaw uw afaodsjfajlflajdfjall  asdaf w wwa </h3>
            </label>
            <button
                onClick={() => { }}
                aria-label="Edit"
                className='inputTaskEdit'
                placeholder='edit'
            > edit </button>
            <button
                onClick={() => {
                    // if (confirm("Are you sure?")) {}
                }}
                aria-label="Remove"
                className='inputTaskRemove'
                placeholder='remove'
            > remove </button>
        </div>
    );
}