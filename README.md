# EatMe

Native iOS app that helps users keep track of their food's expiration dates to reduce food waste.

This app was built in one week using React Native.

![](http://i.imgur.com/EYS73sK.gif)

### Contributors

[Sean Blundell](https://github.com/Simba14)
[Pete Wilkins](https://github.com/petewilkins)
[Jessica Rodriguez](https://github.com/j-rods)
[Magnus Holm](https://github.com/mghlm)

### Technologies used

[React Native](https://facebook.github.io/react-native/)

Main language used to built the app.

[Jest](https://facebook.github.io/jest/)

Testing framework

[Realm](https://realm.io/)

Used to set up local databases to store information about food items

[UPC Database API](https://www.upcdatabase.com/)

API used for looking up food items based on Barcode information

[Food2Fork API](http://food2fork.com/about/api)

API used for looking up recipes based on user's current food items

### Acknowledgements

[Stephen Grider](https://www.udemy.com/user/sgslo/) from Udmey. This project wouldn't have been possible without you :)

### Known Issues

- API keys are not hidden, and calls are made directly from the app and not at a backend server.

- We have no unit tests

### Future Additions

- Android version


### User stories for MVP:

```
As a user
So that I can keep track of my food items
I want to be able to add an item to a new list
```
```
As a user
So I know when my food expire
I want to be able to specify a date when adding an item
```
```
As a user
So that I can check which food items I currently have
I want to be able to view a list of items
```
```
As a user
So that I can see what items expire first
I want to be able to view them sorted after date
```
```
As a user
So that I don’t accidentally eat expired food
I want items that has reached the expiration date to be highlighted
```
```
As a user
So that I can keep my list updated
I want to be able to delete an item
```
