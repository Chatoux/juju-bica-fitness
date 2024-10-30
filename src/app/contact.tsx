import Header from './components/Header';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-16 px-4 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full mt-1 p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}