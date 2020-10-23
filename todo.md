##       DEPENDENCIES      ##
    - [x] express
    - [x] body-parser
    - [] pg ??? I don't think we need this one
    - [???] axios
    - [???] nodemon
    - [x] react ???

 expre
##       PUBLIC/IMAGES      ##
    - [] add images
        - [] all same size
        - [] modify `server/modules/data.js`
            include:
            - [] 'id'
                - [] each a unique number
            - [] 'title'
            - [] 'description'
            - [] 'path for'


##       COMPONENTS       ##
    - [] use states and props
    - [] `App` - represents the overall application or site
    - [] - `GalleryList` - represents the gallery of images.
    - [] - `GalleryItem` - represents a single image in the gallery
        - [] ability to click the image to toggle between image and description
        - [] ability to like an image.


##       TASK LIST       ##
    - [] axios to 'GET' data from '/gallery'
        - [] store data in 'App.js
    - [] new component for 'GalleryList.js'
        - [] pass gallery data stored in 'App' via props
            - [] iterate list of gallery data
            - [] make GalleryItems
                - [] create new component called 'GalleryItems.js'
                    - [] pass individual gallery item via props
                        - [] update 'GalleryList' to use this component to display an image
                        - [] swap image with description on click
                            - [] Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
                        - [] display number of likes
                        - [] include like button
                            - [] when clicked, use axios to 'PUT' like count at '/gallery/like/:id'
                            - [] update gallery each click


##       STRETCH GOALS      ##