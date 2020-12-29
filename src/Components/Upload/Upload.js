import React, {Fragment} from 'react';

export function Upload(){
    return(
        <Fragment>
            <form>
                <input type="file" name="image"></input>
                <button>Upload</button>
            </form>
        </Fragment>
    );
}