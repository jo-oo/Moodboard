import MasonryCard from './MasonryCard.jsx';


/*
***TODO:
map over card sizes to get an actual Masonry Grid
****
*/

const MasonryGrid = ({ setSelectedImageUrl, setSelectedImageId, data}) => {

    return (
        <div className='h-full sticky'> {/*this centers the Masonry-div inside the "Middle-div" */}
            <div style={styles.pin_container}>
                {  data &&
                    data.map(image => (
                        <MasonryCard 
                            data={image} 
                            key={image.id} 
                            setSelectedImageUrl={setSelectedImageUrl}
                            setSelectedImageId={setSelectedImageId}
                        />
                        
                            // <MasonryCard size="medium" data={image} key={image} />
                        //<MasonryCard size="large" data={image} key={image.url} /></>
                    ))
                } 
            </div>
        </div>
    )
}


// <Card size="small" />
// <Card size="medium" />
// <Card size="large" />

const styles = {
    pin_container: {
        margin: 5,
        padding: 0,
        width: '60vw',
        display: 'grid',
        flex: 1, //från nya 
        gridTemplateColumns: 'repeat(auto-fill, 200px)', //put as many 172 px cards in one row that can fit into the container. 250px is the recommended  value
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        height: 'auto', //nya
    }
}

export default MasonryGrid

