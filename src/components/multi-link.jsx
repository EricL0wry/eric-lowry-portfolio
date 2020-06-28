import React from 'react';

export default function MultiLink(props) {
  // const { icon, url } = props.linkIcon;
  // return (
  //   <a href={url} target="_blank" rel="noreferrer noopener"><i className={icon}></i></a>
  // );

  const linkIcons = props.links.map(linkIcon => {
    const { id, url, icon } = linkIcon;
    return <a href={url} target="_blank" rel="noreferrer noopener" key={id}><i className={icon}></i></a>;
  });

  return linkIcons;
}
