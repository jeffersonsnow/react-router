import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const Book = () => {
    const {id} = useParams()
    const obj = useOutletContext();
    return (
        <div>
            Book {id}{obj.hello}
            {/*Book {id}*/}
        </div>
    );
}

export default Book;
