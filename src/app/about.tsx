import Header from './components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Juju Bica Fitness</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At Juju Bica Fitness, our mission is to empower individuals to achieve their fitness and well-being goals. We offer personalized training and a supportive community to help you stay motivated and succeed.
        </p>
      </div>
    </div>
  );
}