import { useNavigate } from 'react-router-dom';

const Accommodations = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Accommodations</h1>
      <button
        onClick={() => navigate('/accommodations/view')}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
      >
        View Accommodation
      </button>
      <button
        onClick={() => navigate('/accommodations/cart')}
        className="bg-blue-500 text-white px-4 py-2 mt-4 ml-4 rounded hover:bg-blue-600"
      >
        Go to Cart
      </button>
      <button
        onClick={() => navigate('/accommodations/payment')}
        className="bg-blue-500 text-white px-4 py-2 mt-4 ml-4 rounded hover:bg-blue-600"
      >
        Make a Payment
      </button>
      <button
        onClick={() => navigate('/accommodations/rate-us')}
        className="bg-blue-500 text-white px-4 py-2 mt-4 ml-4 rounded hover:bg-blue-600"
      >
        Rate Us
      </button>
    </div>
  );
};

export default Accommodations;

