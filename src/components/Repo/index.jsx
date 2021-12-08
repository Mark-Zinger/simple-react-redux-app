import React from 'react';
import Paper from '@mui/material/Paper';

import './style.less';

export default function Repo({repo}) {

    const { name, stargazers_count, updated_at, html_url } = repo;

    return (
        <Paper className="repo" >
            <div className="repo__header">
                <div className="repo__header-name">{ name }</div>
                <div className="repo__header-stars"> stars: { stargazers_count }</div>
            </div>
            <div className="repo__last-commit">last commit: { updated_at }</div>
            <a href={ html_url } className="repo__link">GO TO</a>
        </Paper>
    )
}
