import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function News({ data }) {
  const defaultDesc =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ';

  return (
    <ul className="newsList">
      {data.map(({ id, title, description, link, imgURL }) => (
        <li className="newsItem" key={id}>
          <img src={imgURL} className="img" alt=" title" />
          <div className="cardContent">
            <h2 className="title">{title}</h2>

            <p className="descr">
              {description.includes('href') ? defaultDesc : description}
            </p>
            <a className="link" href={link} target="_blank" rel="noreferrer">
              <ArrowRightAltIcon />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default News;
