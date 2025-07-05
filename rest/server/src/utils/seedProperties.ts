import mongoose from 'mongoose';
import Property from '../models/Property';

const districts = [
  'Солнечный Берег',
  'Лесная Долина',
  'Озерный Квартал',
  'Технологический Парк',
  'Центр Нова Хейм',
  'Панорамный Хилл',
  'Эко-Ривьера',
];

const features = [
  'Панорамные окна',
  'Умный дом',
  'Терраса',
  'Парковка',
  'Вид на озеро',
  'Собственный сад',
  'Тёплый пол',
  'Система очистки воздуха',
  'Личный лифт',
  'Детская площадка',
  'Фитнес-зал',
  'Коворкинг',
];

const types = ['apartment', 'house', 'commercial'];

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const fakeImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1460518451285-97b6aa326961',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
];

const generateProperties = (count: number) => {
  const properties = [];
  for (let i = 0; i < count; i++) {
    const type = getRandom(types);
    const area = type === 'apartment' ? 40 + Math.floor(Math.random() * 80) : type === 'house' ? 120 + Math.floor(Math.random() * 180) : 60 + Math.floor(Math.random() * 200);
    const rooms = type === 'apartment' ? 1 + Math.floor(Math.random() * 4) : type === 'house' ? 3 + Math.floor(Math.random() * 5) : 1 + Math.floor(Math.random() * 6);
    const price = area * (type === 'apartment' ? 2500 : type === 'house' ? 1800 : 3000) + Math.floor(Math.random() * 10000);
    const district = getRandom(districts);
    const title = `${type === 'apartment' ? 'Квартира' : type === 'house' ? 'Дом' : 'Коммерция'} в районе ${district}`;
    const address = `${district}, ул. ${String.fromCharCode(1040 + Math.floor(Math.random() * 20))}-й дом, д. ${10 + Math.floor(Math.random() * 90)}`;
    const description = `Уникальный объект в районе ${district} с современными удобствами и премиальным ремонтом.`;
    const propertyFeatures = Array.from({ length: 3 + Math.floor(Math.random() * 3) }, () => getRandom(features));
    const images = Array.from({ length: 3 }, () => getRandom(fakeImages));
    properties.push({
      title,
      type,
      district,
      address,
      area,
      rooms,
      price,
      description,
      features: propertyFeatures,
      images,
      isActive: true,
      createdAt: new Date(),
    });
  }
  return properties;
};

export const seedProperties = async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/novaheim');
  await Property.deleteMany({});
  const fakeProps = generateProperties(18);
  await Property.insertMany(fakeProps);
  console.log('Fake properties seeded!');
  process.exit(0);
};

if (require.main === module) {
  seedProperties();
}
