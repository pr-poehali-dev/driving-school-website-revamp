import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/' },
    {
      name: 'Программы обучения',
      href: '/programs',
      submenu: [
        { name: 'Категория B', href: '/programs/category-b' },
        { name: 'Категория A', href: '/programs/category-a' },
        { name: 'Категория C', href: '/programs/category-c' },
        { name: 'Категория D', href: '/programs/category-d' },
      ],
    },
    { name: 'О центре', href: '/about' },
    { name: 'Сведения об организации', href: '/info' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Icon name="Star" className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary">ДОСААФ России</h1>
            <p className="text-xs text-muted-foreground">г. Павлово</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      to={subitem.href}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contacts">Записаться</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
