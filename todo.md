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
    - [] use states and props
    - [] `App` - represents the overall application or site
    - [] - `GalleryList` - represents the gallery of images.
    - [] - `GalleryItem` - represents a single image in the gallery
        - [] ability to click the image to toggle between image and description
        - [] ability to like an image.


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
                        - [] swap image with description on click
                            - [] Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
                        - [] display number of likes
                        - [] include like button
                            - [] when clicked, use axios to 'PUT' like count at '/gallery/like/:id'
                            - [] update gallery each click


##       STRETCH GOALS      ##