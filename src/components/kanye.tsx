import React from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from '../store/hooks';
import {
    getKanyeQuote,
    selectKanye,
} from '../store/slice/kanyeSlice';

const Kanye:React.FC = () => {
    const dispatch = useAppDispatch()
    const {
        data,
        pending,
        error,
    } = useAppSelector(selectKanye);

    return (
        <div>
            <h2>Generate random Kanye West quote</h2>
            {pending && <p>Loading...</p>}
            {data && <p>{data.quote}</p>}
            {error && <p>Oops, something went wrong</p>}
            <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
                Generate Kanye Quote
            </button>
        </div>
    );
};

export default Kanye;
