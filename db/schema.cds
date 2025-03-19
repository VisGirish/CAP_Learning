namespace app.CAP_Learning;
using { Language, managed  } from '@sap/cds/common';


type String50 : String(51);
type String10 : String(10);

entity Categories{
    key id: UUID;
     name: String50;
     description: String(100);
     Courses :Association to many Courses on Courses.category = $self;
}

entity Courses : managed{
    key category : Association to Categories;
    key course_id : UUID;
        course_name : String50;
        price : String10;
        Language: Language
}