---
id: edit_song
title: Editing a song
sidebar_label: Edit a song
---
To complete this exercise have a look at the following commands:

- ```cy.contains()```
- ```cy.parent() & cy.find()```
- ```cy.siblings()```

## Exercise:
Let's try to open the edit page for the song we've just added.

- Given that we know the song name, we should be able to locate the title on the page. To limit the results to a specific type of elements we can use the `contains`-function. Try to limit your search to `div`-elements where the `class`-attribute has the value `song-title`. 
- The `contains`-function will return the element that contains our song name. However, we want to select the button to open the song details. Figure out how to find the link to the details page of the correct song.
- Once we have the song details page open, click the edit button
- Update the details of the song and save your changes

### If you get stuck
Have a look at the structure of the page and the relation between the `song-title` element, the `a`-element and their parent-element.