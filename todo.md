##       DEPENDENCIES      ##
    - [x] express
    - [x] body-parser
    - [] pg ??? I don't think we need this one
    - [???] axios
    - [???] nodemon
    - [x] react ???

 expre
##       PUBLIC/IMAGES      ##
    - [x] add images
        - [x] all same size 100px by 100px?
        - [x] modify `server/modules/data.js`
            include:
            - [x] 'id'
                - [x] each a unique number
            - [] 'title'
            - [x] 'description'
            - [x] 'path for'


##       COMPONENTS       ##
    - [x] use states and props
    - [x] `App` - represents the overall application or site
    - [x] - `GalleryList` - represents the gallery of images.
    - [x] - `GalleryItem` - represents a single image in the gallery
        - [x] ability to click the image to toggle between image and description
        - [x] ability to like an image.


##       TASK LIST       ##
    - [x] axios to 'GET' data from '/gallery'
        - [x] store data in 'App.js
    - [x] new component for 'GalleryList.js'
        - [x] pass gallery data stored in 'App' via props
            - [x] iterate list of gallery data
            - [x] make GalleryItems
                - [x] create new component called 'GalleryItems.js'
                    - [x] pass individual gallery item via props
                        - [x] update 'GalleryList' to use this component to display an image
                        - [x] swap image with description on click
                            - [x] Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
                        - [x] display number of likes
                        - [x] include like button
                            - [x] when clicked, use axios to 'PUT' like count at '/gallery/like/:id'
                            - [x] update gallery each click


##       STRETCH GOALS      ##