import React from 'react';

export default function MultiLink(props) {
  const { icon, url } = props.linkIcon;
  return (
    <a href={url} target="_blank" rel="noreferrer noopener"><i className={icon}></i></a>
  );
}
