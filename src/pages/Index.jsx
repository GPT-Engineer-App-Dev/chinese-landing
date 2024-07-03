import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scroll, Lantern, Building2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/great-wall.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Discover China</h1>
          <p className="text-2xl mt-4">A Journey Through the Middle Kingdom</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to China</h2>
        <p className="text-lg">
          China, with its rich history and vibrant culture, stands as one of the world's most fascinating countries. From ancient traditions to modern innovations, China offers a unique blend of the past and the present.
        </p>
      </section>

      {/* Key Highlights Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <Card>
          <CardHeader>
            <Scroll className="h-12 w-12 mx-auto" />
            <CardTitle className="text-center mt-4">History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">Explore China's ancient history, from the Great Wall to the Terracotta Army.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Lantern className="h-12 w-12 mx-auto" />
            <CardTitle className="text-center mt-4">Culture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">Discover the rich cultural heritage, including festivals, cuisine, and traditional arts.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Building2 className="h-12 w-12 mx-auto" />
            <CardTitle className="text-center mt-4">Modernity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">Experience the modern advancements and skyscrapers of China's bustling cities.</p>
          </CardContent>
        </Card>
      </section>

      {/* Tourist Attractions Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Famous Tourist Attractions</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img src="/images/great-wall.jpg" alt="Great Wall of China" className="w-full h-64 object-cover rounded-lg" />
              <p className="text-center mt-2">Great Wall of China</p>
            </CarouselItem>
            <CarouselItem>
              <img src="/images/forbidden-city.jpg" alt="Forbidden City" className="w-full h-64 object-cover rounded-lg" />
              <p className="text-center mt-2">Forbidden City</p>
            </CarouselItem>
            <CarouselItem>
              <img src="/images/terracotta-army.jpg" alt="Terracotta Army" className="w-full h-64 object-cover rounded-lg" />
              <p className="text-center mt-2">Terracotta Army</p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Cultural Insights Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Cultural Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Festivals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Learn about traditional Chinese festivals such as the Spring Festival and the Lantern Festival.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Cuisine</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Explore the diverse and delicious world of Chinese cuisine, from dim sum to Peking duck.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Traditional Arts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Discover the beauty of traditional Chinese arts, including calligraphy and painting.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-8 text-center">
        <p>Contact us at: info@discoverchina.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </div>
        <p className="mt-4">© 2023 Discover China. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;