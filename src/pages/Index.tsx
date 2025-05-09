
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ArtGallery from '@/components/ArtGallery';
import AboutSection from '@/components/AboutSection';
import { Link } from 'react-router-dom';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      {/* Hero section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2145&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.9)',
            opacity: 0.7,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFFDF8] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="text-center opacity-0 animate-fadeIn"
            style={{animation: 'fadeIn 1s forwards'}}
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#1A1F2C] mb-6">
              Мария Иванова
            </h1>
            <p className="text-xl md:text-2xl text-[#403E43] mb-10 max-w-2xl mx-auto font-light">
              Интерьерные картины, которые оживляют пространство и наполняют его атмосферой гармонии
            </p>
            <div
              className="opacity-0 animate-fadeInDelay"
              style={{animation: 'fadeIn 0.5s 0.5s forwards'}}
            >
              <Button 
                className="bg-[#D6BCFA] hover:bg-[#9b87f5] text-[#1A1F2C] rounded-full px-8 py-6 text-lg"
                onClick={() => {
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Посмотреть работы <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="font-playfair text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-16 opacity-0 animate-fadeInScroll"
            style={{animationDelay: '100ms'}}
          >
            Галерея работ
          </h2>
          <ArtGallery />
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-20 bg-[#F2FCE2]/30">
        <div className="container mx-auto px-4">
          <h2 
            className="font-playfair text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-16 opacity-0 animate-fadeInScroll"
            style={{animationDelay: '100ms'}}
          >
            О художнике
          </h2>
          <AboutSection />
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="font-playfair text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-16 opacity-0 animate-fadeInScroll"
            style={{animationDelay: '100ms'}}
          >
            Связаться со мной
          </h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-lg mb-8 text-[#403E43]">
              Для заказа картины или с вопросами о моих работах, пожалуйста, свяжитесь со мной удобным способом:
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-[#E5DEFF] hover:bg-[#D6BCFA] text-[#1A1F2C]">
                Email: maria@artgallery.com
              </Button>
              <Button className="w-full bg-[#FDE1D3] hover:bg-[#FEC6A1] text-[#1A1F2C]">
                Instagram: @maria_art
              </Button>
              <Button className="w-full bg-[#F2FCE2] hover:bg-[#E5FAC6] text-[#1A1F2C]">
                Телефон: +7 (123) 456-78-90
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Мария Иванова • Все права защищены</p>
          <div className="flex justify-center space-x-4">
            <Link to="#" className="hover:text-[#D6BCFA] transition-colors">Главная</Link>
            <Link to="#gallery" className="hover:text-[#D6BCFA] transition-colors">Галерея</Link>
            <Link to="#about" className="hover:text-[#D6BCFA] transition-colors">О художнике</Link>
            <Link to="#contact" className="hover:text-[#D6BCFA] transition-colors">Контакты</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
