const parisImage = new URL('../../images/paris.jpg', import.meta.url);
const craterLakeImage = new URL('../../images/crater-lake.jpg', import.meta.url);
const newYorkImage = new URL('../../images/new-york.jpg', import.meta.url);
const saintPetersburgImage = new URL('../../images/saint-petersburg.jpg', import.meta.url);
const tokyoImage = new URL('../../images/tokyo.jpg', import.meta.url);
const vladivostokImage = new URL('../../images/vladivostok.jpg', import.meta.url);

const initialCards = [
    {
      name: 'Париж',
      link: parisImage
    },
    {
      name: 'Озеро Крейтер',
      link: craterLakeImage
    },
    {
      name: 'Нью-Йорк',
      link: newYorkImage
    },
    {
      name: 'Санкт-Петербург',
      link: saintPetersburgImage
    },
    {
      name: 'Токио',
      link: tokyoImage
    },
    {
      name: 'Владивосток',
      link: vladivostokImage
    }
];

export { initialCards };