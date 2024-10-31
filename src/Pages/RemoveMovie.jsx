import TextInput from '../Components/Inputs/TextInput/TextInput';
import useRemoveMovie from '../Hooks/useRemoveMovie';

const RemoveMovie = () => {
    const {findMovie, id, setId} = useRemoveMovie();

    return (
    <div>
        <form onSubmit={findMovie}>
            <label htmlFor="id">movieId: </label>
            <TextInput value={id} setValue={setId} />
            <button>Search</button>
        </form>
    </div>
    )
}

export default RemoveMovie