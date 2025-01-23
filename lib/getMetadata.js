import feed from 'lib/feed';

export default function getMetadata(page, params) {
  const divider = ' || ';
  const name = 'future goods';
  let description = 'the best enduring goods';
  let title = name;
  const item = params && feed.find(({ id }) => id === params.id);

  switch (page) {
    case 'item':
      title = `${item.name}${divider}${name}`;
      break;
    case 'about':
      title = `about${divider}${name}`;
      break;
    case 'contact':
      title = `contact${divider}${name}`;
      break;
  }

  return { title, description };
}
