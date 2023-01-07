import { Counter } from '../features/counter/Counter';
import { HomeAppBar } from '../features/home-app-bar/HomeAppBar';
export const HomePage = () => {
  return (
    <>
      <HomeAppBar />
      <Counter />
    </>
  );
};
