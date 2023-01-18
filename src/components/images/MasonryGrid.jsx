import MasonryCard from './MasonryCard.jsx';

const MasonryGrid = () => {
    return (
   <div className='h-full sticky'> {/*for some reason this centerd the MAsonry-div inside the "Middle-div" */}
            <div style={styles.pin_container}>
                <MasonryCard size="small" />
                <MasonryCard size="medium" />
                <MasonryCard size="large" />
                <MasonryCard size="small" />
                <MasonryCard size="medium" />
                <MasonryCard size="large" />
                <MasonryCard size="small" />
                <MasonryCard size="medium" />
                <MasonryCard size="large" />
            </div>
    </div>

    )
}


const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '50vw',
      
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 172px)', //put as many 172 pxpx cards in one row that can fit into the container
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'grey'
    }
}

export default MasonryGrid

