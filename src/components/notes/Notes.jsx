
import UserProfile from '../user/UserProfile'
// break-words

const Notes = () => {

    return (
        <>
            {/* Container for Notes section */}
            {/* grid h-screen sticky top-0 IS needed for only the middle section to move / scroll */}
            <div className='grid grid-cols-1 h-screen sticky top-0
            bg-[#efeff1] px-3 py-12'>

          
                    {/* Notes*/}
                    {/* overflow-y-scroll is setting content overflowing in height/vertically to view in scroll instead*/}
                    <div className="max-h-screen
                    p-5 bg-white
              border-[0.5px]  border-[#CFC9C1] rounded-sm break-words overflow-y-scroll">
                    Här kan du som användare skriva lite anteckningar till din kategori, alltså till den moddboard su är inne på :-)
                    Här kan du som användare skriva lite anteckningar till din kategori, alltså till den moddboard su är inne på :-)
                    .-.-.-.- h
                    kjkjkj
                    Här kan du som användare skriva lite anteckningar till din kategori, alltså till den moddboard su är inne på :-)
                    Här kan du som användare skriva lite anteckningar till din kategori, alltså till den moddboard su är inne på :-)
                    Här kan du som användare skriva lite anteckningar till din kategori, alltså till den moddboard su är inne på :-)



                    
                    </div>
                    <UserProfile />
           
            </div>
        </>
    )
}

export default Notes