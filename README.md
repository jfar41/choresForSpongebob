# Spongebob's Chores

### Using the fast real-time functionality of Google firebase I created a chore-list web application for my good friend Spongebob. From the web app one can upload chores, update the resolved status, and delete them. 
![Picture of WebApp](https://i.imgur.com/8vyR250.png)

# Key Takeaways:
* Google's Firebase follows the NoSQL database structure. Instead of creating tabular relations, Firebase creates data trees. In my project I have a top node called "chores" and everytime I upload a new one they get appended to this node as child nodes. The importance, description, and resolved status are attributes of the children.
* To display the real-time functionality without the user having to manually refresh use the Firebase SDK 'on' event listener with a callback function. This callback is called everytime there is a change to the Firebase database.
* Instead of thinking about hard coding a table I learned how to automatically generate needed cells and rows as chores are being created.


# Tech Used:
#### Javascript, HTML, CSS, Firebase

# Next steps:
### Create a real-time chat application with Firebase. I will eventually use what I learn to create a chat function for the Oneboard web application @ https://oneboard.live/

## Screenshots
![Picture alert that pops up when pressing 'Delete'](https://i.imgur.com/vbpagsO.png)

