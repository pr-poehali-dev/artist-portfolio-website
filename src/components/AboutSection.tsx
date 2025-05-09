
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div 
          className="col-span-1 opacity-0 transform -translate-x-10 animate-fadeInLeft"
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2670&auto=format&fit=crop"
              alt="Мария Иванова"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div 
          className="col-span-2 opacity-0 transform translate-y-10 animate-fadeInUp"
          style={{animationDelay: '200ms'}}
        >
          <div className="prose lg:prose-lg">
            <p className="text-lg leading-relaxed text-[#403E43]">
              Я Мария Иванова, художник с более чем 15-летним опытом создания интерьерных картин. Мое творчество началось с экспериментов с акварелью еще в детстве, а сегодня я работаю с различными материалами и техниками, чтобы создавать произведения, которые гармонично дополняют интерьеры.
            </p>
            <p className="text-lg leading-relaxed text-[#403E43]">
              В моих работах я стремлюсь передать особое настроение — спокойствие, умиротворение и гармонию. Вдохновение черпаю в природе, путешествиях и классическом искусстве. Каждая моя картина создается с мыслью о том пространстве, которое она будет украшать.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 
          className="font-playfair text-2xl md:text-3xl font-bold text-center text-[#1A1F2C] mb-10 opacity-0 animate-fadeInScroll"
          style={{animationDelay: '300ms'}}
        >
          Мой творческий путь
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            className="opacity-0 transform translate-y-10 animate-fadeInUp"
            style={{animationDelay: '400ms'}}
          >
            <Card className="p-6 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="font-playfair text-xl font-bold text-[#1A1F2C] mb-3">Образование</h4>
              <p className="text-[#403E43]">
                Окончила Художественную Академию им. Репина, специализация "Станковая живопись". Продолжила образование в Школе современного искусства в Париже.
              </p>
            </Card>
          </div>

          <div 
            className="opacity-0 transform translate-y-10 animate-fadeInUp"
            style={{animationDelay: '500ms'}}
          >
            <Card className="p-6 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="font-playfair text-xl font-bold text-[#1A1F2C] mb-3">Выставки</h4>
              <p className="text-[#403E43]">
                Мои работы были представлены на персональных выставках в Москве, Санкт-Петербурге и Милане. Постоянная участница ежегодного фестиваля "Интерьер и Искусство".
              </p>
            </Card>
          </div>

          <div 
            className="opacity-0 transform translate-y-10 animate-fadeInUp"
            style={{animationDelay: '600ms'}}
          >
            <Card className="p-6 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="font-playfair text-xl font-bold text-[#1A1F2C] mb-3">Философия</h4>
              <p className="text-[#403E43]">
                Верю, что искусство должно не только украшать пространство, но и создавать особую атмосферу, которая резонирует с душой обитателей дома и рассказывает их историю.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div 
        className="mt-16 bg-[#FDE1D3]/30 p-8 rounded-lg text-center opacity-0 animate-fadeInScroll"
        style={{animationDelay: '700ms'}}
      >
        <blockquote className="font-playfair text-xl italic text-[#1A1F2C]">
          "Каждая моя картина — это диалог между пространством, цветом и эмоцией. 
          Я создаю не просто изображение, а настроение, которое будет наполнять комнату каждый день."
        </blockquote>
        <p className="mt-4 text-[#403E43]">— Мария Иванова</p>
      </div>
    </div>
  );
};

export default AboutSection;
