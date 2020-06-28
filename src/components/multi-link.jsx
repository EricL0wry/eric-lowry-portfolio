import React from 'react';

export default function MultiLink(props) {
  const linkIcons = props.links.map(linkIcon => {
    const { id, url, icon } = linkIcon;
    return (
      <div className="icon-link" key={id}>
        <a href={url} target="_blank" rel="noreferrer noopener"><i className={icon}></i></a>
      </div>
    );
  });

  return (
    <div className="multi-link d-flex">
      {linkIcons}
    </div>
  );
}
