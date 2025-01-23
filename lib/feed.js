const getM3k = () => ({
  id: Math.random(),
  category: 'The Best Gaming Mouse',
  product: {
    id: 'm3k',
    name: 'Zaunkoenig M3k',
    images: ['image1.avif'],
    link: 'https://zaunkoenig.co/m3k',
  },
  updated: '20240421',
});

const feed = [
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
  getM3k(),
];

// computer case, headphones, keyboard, phone, monitor, computer, video card

export default feed;
