sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'caplearning/test/integration/FirstJourney',
		'caplearning/test/integration/pages/CategoriesList',
		'caplearning/test/integration/pages/CategoriesObjectPage',
		'caplearning/test/integration/pages/CoursesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CategoriesList, CategoriesObjectPage, CoursesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('caplearning') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCategoriesList: CategoriesList,
					onTheCategoriesObjectPage: CategoriesObjectPage,
					onTheCoursesObjectPage: CoursesObjectPage
                }
            },
            opaJourney.run
        );
    }
);