import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../actions/repos';
import Repo from '../Repo';

import './style.less';

function Main() {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.items);

    useEffect(() => {
        dispatch(getRepos());
    }, []);

    return (
        <div className='container'>
            {repos.map((repo) => (
                <Repo repo={repo} />
            ))}
        </div>
    );
}

export default Main;
