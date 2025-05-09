
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-span-1"
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2670&auto=format&fit=crop"
              alt="Мария Иванова"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-2"
        >
          <div className="prose lg:prose-lg">
            <p className="text-lg leading-relaxed text-[#403E43]">
              Я Мария Иванова, художник с более чем 15-летним опытом создания интерьерных картин. Мое творчество началось с экспериментов с акварелью еще в детстве, а сегодня я работаю с различными материалами и техниками, чтобы создавать произведения, которые гармонично дополняют интерьеры.
            </p>
            <p className="text-lg leading-relaxed text-[#403E43]">
              В моих работах я стремлюсь передать особое настроение — спокойствие, умиротворение и гармонию. Вдохновение черпаю в природе, путешествиях и классическом искусстве. Каждая моя картина создается с мыслью о том пространстве, которое она будет украшать.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-playfair text-2xl md:text-3xl font-bold text-center text-[#1A1F2C] mb-10"
        >
          Мой творческий путь
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="font-playfair text-xl font-bold text-[#1A1F2C] mb-3">Образование</h4>
              <p className="text-[#403E43]">
                Окончила Художественную Академию им. Репина, специализация "Станковая живопись". Продолжила образование в Школе современного искусства в Париже.
              </p>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="font-playfair text-xl font-bold text-[#1A1F2C] mb-3">Выставки</h4>
              <p className="text-[#403E43]">
                Мои работы были представлены на персональных выставках в Москве, Санкт-Петербурге и Милане. Постоянная участница ежегодного фестиваля "Интерьер и Искусство".
              </p>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="font-playfair text-xl font-bold text-[#1A1F2C] mb-3">Философия</h4>
              <p className="text-[#403E43]">
                Верю, что искусство должно не только украшать пространство, но и создавать особую атмосферу, которая резонирует с душой обитателей дома и рассказывает их историю.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 bg-[#FDE1D3]/30 p-8 rounded-lg text-center"
      >
        <blockquote className="font-playfair text-xl italic text-[#1A1F2C]">
          "Каждая моя картина — это диалог между пространством, цветом и эмоцией. 
          Я создаю не просто изображение, а настроение, которое будет наполнять комнату каждый день."
        </blockquote>
        <p className="mt-4 text-[#403E43]">— Мария Иванова</p>
      </motion.div>
    </div>
  );
};

export default AboutSection;
