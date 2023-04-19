const MasonryCard = ( {data, setSelectedImageUrl, setSelectedImageId}) => {

    return (
    <div 

        style={{
            ...styles.card,
            ...styles['medium']
            }}>

                <img src={data.url}  
                        onClick={() => {
                        setSelectedImageUrl(data.url)
                        setSelectedImageId(data.id)
                        }
                        } //passing in the value of the image we want to show
                    style={{
                ...styles.mainPic,            
                }}/>                 
        </div>
    )
}

/* lägg till img-wrap på styles card
*/ 
const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '10px',
        backgroundColor: 'lightgrey',
        //position: 'relative', //nya 
        overflow: 'hidden',
    },
    mainPic: {
        //nya allt detta
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    //this sets the height of the cards, 26 rows etc.
    small: {
        gridRowEnd: 'span 26',
    },
    medium: {
        gridRowEnd: 'span 33',
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default MasonryCard