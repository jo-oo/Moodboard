
import UserProfile from '../user/UserProfile'
// break-words

const Notes = () => {

    return (
        <>
            {/* Container for Notes section */}
            {/* grid h-screen sticky top-0 IS needed for only the middle section to move / scroll */}
            <div className='md:grid hidden md:grid-rows-2 md:sticky md:top-0
            bg-[#efeff1] px-2 pt-12 justify-between flex justify-between '>
                {/* Notes*/}
                {/* overflow-y-scroll is setting content overflowing in height/vertically to view in scroll instead*/}
                <div className="max-h-[30rem]
                    p-2 md:p-3 bg-white
              border-[0.5px]  border-[#CFC9C1] rounded-sm break-words overflow-y-scroll overflow-x-hidden leading-4 md:leading-5 row-span-6">
                    In the future, you will be able to write notes to your moodboard here.
                </div>
                <UserProfile/>
            </div>
        </>
    )
}

export default Notes