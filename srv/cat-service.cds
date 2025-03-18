using app.CAP_Learning as my from '../db/schema';

service CatalogService {
    @readonly entity Categories as projection on my.Categories;
    @readonly entity Courses as projection on my.Courses;
}
