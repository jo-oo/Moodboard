

const MasonryCard = ( {data}) => {
   // console.log(props)
    return (
    <div style={{
            ...styles.card,
            ...styles['medium']
            }}>
                <img src={data.url}  
                    style={{
                ...styles.mainPic,
               
            
                }}/>
        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'lightgrey',
        position: 'relative', //nya 
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