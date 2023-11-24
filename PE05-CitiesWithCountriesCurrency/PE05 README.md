# Input

The program relies on two arrays, 'cities' and 'countries', initialized in the component's state. These arrays serve as containers for city and country data, respectively. The 'addCity' and 'addCountry' methods take user inputs and update their respective arrays.

# Process

The program utilizes the React Navigation library to create a bottom tab navigator with four screens: 'Cities', 'AddCity', 'Countries', and 'AddCountry'. Each screen is associated with specific initial parameters, ensuring that the necessary data (cities or countries array and corresponding add methods) is available to the components.

The 'render' method establishes a 'NavigationContainer' and a 'Tab.Navigator' to organize the screens. It also passes down the necessary parameters to each screen, facilitating data flow between them.

# Output

The output is a React Native application with a user interface organized into four screens. Users can view cities and countries, add new cities and countries, and seamlessly navigate between these functionalities. The bottom tab navigation provides an intuitive user experience, and the program maintaines state through the 'cities' and 'countries' arrays, ensuring data consistency across screens.


This program effectively follows the input-process-output model by taking user inputs to add cities and countries (input), processing these inputs through navigation and state management (process), and presenting the organized and updated data on the screens (output).