import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Icon name="Star" className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">ДОСААФ России</h4>
                <p className="text-sm text-white/80">г. Павлово</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Профессиональная подготовка водителей с 1951 года
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Программы</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/programs/category-a" className="hover:text-white transition-colors">
                  Категория A
                </Link>
              </li>
              <li>
                <Link to="/programs/category-b" className="hover:text-white transition-colors">
                  Категория B
                </Link>
              </li>
              <li>
                <Link to="/programs/category-c" className="hover:text-white transition-colors">
                  Категория C
                </Link>
              </li>
              <li>
                <Link to="/programs/category-d" className="hover:text-white transition-colors">
                  Категория D
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Информация</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/info" className="hover:text-white transition-colors">
                  Сведения об организации
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  О центре
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  Программы обучения
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Контакты</h5>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" />
                +7 (831) 712-34-56
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" />
                info@pavlovo-dosaaf.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" className="h-4 w-4" />
                г. Павлово, ул. Ленина, д. 100
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>© 2024 ДОСААФ России г. Павлово. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
