import MasonryCard from './MasonryCard.jsx';
import useViewCategoryImagesByUser from "../../hooks/useViewCategoryImagesByUser";


const MasonryGrid = () => {
    const { data } = useViewCategoryImagesByUser({ fetchOnlyCurrentUser: true})
    return (

        <div className='h-full sticky'> {/*for some reason this centerd the MAsonry-div inside the 
        "Middle-div" */}
            <div style={styles.pin_container}>
                {data &&
			        data.map(image => (
                
                        <MasonryCard data={image} key={image.id} />
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
        margin: 0,
        padding: 0,
        width: '50vw',
        display: 'grid',
        //flex: 1, //från nya 
        gridTemplateColumns: 'repeat(auto-fill, 172px)', //put as many 172 px cards in one row that can fit into the container
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'grey',
        height: 'auto', //nya
    }
}

export default MasonryGrid
