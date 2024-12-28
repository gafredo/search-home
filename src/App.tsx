import { useState } from 'react';
import { Contact } from './components/Contact';
import { FeaturedProperties } from './components/FeaturedProperties';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { PropertyType } from './properties';
import { PropertyModal } from './components/PropertyModal';

function App() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyType | null>(
    null
  );

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className='min-h-screen w-full bg-gray-50'>
      <Home />

      <FeaturedProperties onSelected={setSelectedProperty} />

      <Contact />

      <Footer />

      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
