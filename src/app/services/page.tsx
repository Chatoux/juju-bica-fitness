import Header from '../components/Header';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
        <ul className="list-disc text-lg text-gray-700 max-w-2xl mx-auto">
          <li className="mb-2">Personal Training</li>
          <li className="mb-2">Group Classes</li>
          <li className="mb-2">Nutrition Guidance</li>
          <li className="mb-2">Online Coaching</li>
        </ul>
      </div>
    </div>
  );
}