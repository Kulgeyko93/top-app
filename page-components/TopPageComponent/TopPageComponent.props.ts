import { ProductModel } from "../../intarfaces/product.interface";
import { TopLevelCategory, TopPageModel } from "../../intarfaces/toppage.interface";

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}