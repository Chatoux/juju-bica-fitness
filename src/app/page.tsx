import Header from './components/Header';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="relative h-[80vh]">
        <Image 
          src="/hero-gym.jpg"
          alt="A modern gym interior with people working out"
          layout="fill"
          objectFit="cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Juju Bica Fitness</h1>
          <p className="mt-4 text-xl">Transform Your Health and Fitness Goals</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 rounded hover:bg-blue-800">
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
}