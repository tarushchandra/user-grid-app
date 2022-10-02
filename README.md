Method used for solving this problem -

I've used 3 react components - Navbar, CardContainer, Card and used react functional components using hooks

App Component - 
Installed a dependency 'axios' which is used to fetch data from api and attached the whole promises syntax inside a function named 'handleClick' which is in turn sent as a prop to the Navbar Component, inside where the 'GetUser' button is present and the function 'handleClick' is listening for onClick Events.
then, I created 3 state variables using useState hook - areCardsRendered, users, loading.
areCardsRendered is responsible for directing the user to click the 'GetUsers' button and update the UI accordingly
users is initially an empty array, stores the user data when the promise made by the axios resolves using setUsers method.
loading is initially false, on triggering this function, it becomes true and on successfully storing the data into the users array, it becomes false which in turn will help to set the loading text for the time being API fetches the data
Now, in the JSX, there is a conditional expression which is responsible for updating the UI on the basis of values of the states.

CardContainer Component - 
This component contains the individual Cards which are rendering on the screen using map function applied to the users array along the loading text conditional expression. Card component is returned with props which in turn used to dynamically changed the content of the individual Card Component

Card Componenent - 
This Component is used for structuring the individual Card as they are and applying the relevant styles from the styles.css file.

Styles.css
Mostly all of the elements have className which are being used further being used in the styles.css to style the individual elements.
used CSS grid for card-container div.


Time taken by me to complete the assignment - 
I started at around 2pm on 1st October and I was able to complete it by 1:30 pm on 2nd October. 
