import { FirstLevelMenuItem } from "../intarfaces/menu.interface";
import { TopLevelCategory } from "../intarfaces/toppage.interface";
import Books from './../layout/Menu/icons/books.svg';
import Courses from './../layout/Menu/icons/courses.svg';
import Products from './../layout/Menu/icons/products.svg';
import Services from './../layout/Menu/icons/services.svg';

export const firstCategoryMenu :FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <Courses />, id: TopLevelCategory.Courses },
  { route: 'sercices', name: 'Сервисы', icon: <Services />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <Books />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <Products />, id: TopLevelCategory.Products },
];
