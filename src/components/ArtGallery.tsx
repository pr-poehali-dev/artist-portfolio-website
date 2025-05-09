
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ArtworkProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  dimensions: string;
  technique: string;
}

const artworks: ArtworkProps[] = [
  {
    id: 1,
    title: "Весенний сад",
    description: "Нежная композиция с цветущими пионами, вдохновленная французскими садами",
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2944&auto=format&fit=crop",
    dimensions: "60 × 80 см",
    technique: "Акрил, холст"
  },
  {
    id: 2,
    title: "Морской бриз",
    description: "Абстрактная композиция в голубых тонах, передающая свежесть морского воздуха",
    imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2565&auto=format&fit=crop",
    dimensions: "70 × 90 см",
    technique: "Масло, холст"
  },
  {
    id: 3,
    title: "Осенний вальс",
    description: "Теплые оттенки осени в абстрактной интерпретации природы",
    imageUrl: "https://images.unsplash.com/photo-1579541671172-43429ce17aca?q=80&w=2835&auto=format&fit=crop",
    dimensions: "50 × 70 см",
    technique: "Смешанная техника"
  },
  {
    id: 4,
    title: "Золотой закат",
    description: "Игра света и тени в вечернем небе, переданная через абстрактные формы",
    imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2835&auto=format&fit=crop",
    dimensions: "80 × 100 см",
    technique: "Акрил, холст"
  },
  {
    id: 5,
    title: "Тихая гавань",
    description: "Минималистичная композиция, создающая ощущение спокойствия и безмятежности",
    imageUrl: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=2940&auto=format&fit=crop",
    dimensions: "65 × 85 см",
    technique: "Масло, холст"
  },
  {
    id: 6,
    title: "Лавандовые поля",
    description: "Вдохновленная провансальскими пейзажами абстрактная композиция",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2858&auto=format&fit=crop",
    dimensions: "60 × 90 см",
    technique: "Акрил, текстурная паста"
  }
];

const ArtworkCard = ({ artwork }: { artwork: ArtworkProps }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="cursor-pointer opacity-0 transform translate-y-10 animate-fadeInUp"
          style={{animationDelay: `${artwork.id * 100}ms`}}
        >
          <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={artwork.imageUrl} 
                  alt={artwork.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-playfair text-xl font-medium">{artwork.title}</h3>
                  <p className="text-white/80 text-sm">{artwork.technique}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <img 
              src={artwork.imageUrl} 
              alt={artwork.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/3 p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-[#1A1F2C] mb-2">{artwork.title}</h2>
              <p className="text-[#403E43] mb-6">{artwork.description}</p>
              <div className="space-y-2 text-sm text-[#403E43]/80">
                <p><span className="font-medium">Техника:</span> {artwork.technique}</p>
                <p><span className="font-medium">Размеры:</span> {artwork.dimensions}</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm text-[#403E43]/70 italic">
                * Для получения информации о стоимости работы, пожалуйста, свяжитесь с художником.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ArtGallery = () => {
  const [filter, setFilter] = useState<string>('all');
  
  return (
    <div>
      <div className="mb-12 flex justify-center space-x-4">
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-[#D6BCFA] text-[#1A1F2C]' : 'bg-[#E5DEFF]/50 text-[#403E43]'}`}
          onClick={() => setFilter('all')}
        >
          Все работы
        </button>
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'abstract' ? 'bg-[#D6BCFA] text-[#1A1F2C]' : 'bg-[#E5DEFF]/50 text-[#403E43]'}`}
          onClick={() => setFilter('abstract')}
        >
          Абстрактные
        </button>
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'flowers' ? 'bg-[#D6BCFA] text-[#1A1F2C]' : 'bg-[#E5DEFF]/50 text-[#403E43]'}`}
          onClick={() => setFilter('flowers')}
        >
          Цветочные
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
