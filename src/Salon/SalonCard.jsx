import StarIcon from '@mui/icons-material/StarRate';
const SalonCard = () => {
  return (
    <div className="">
        <div className="w-56 md:w-80 rounded-md bg-slate-100">
            <img className="w-full h-[15rem] object-cover rounded-t-md" 
            src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"/>
            <div className="p-5 space-y-2">
                <h1>
                    Remarkable salon
                </h1>
                <div className='text-white text-sm p-1 bg-green-700 rounded-full w-14
                flex items-center justify-center gap-1'>
                    4.5 <StarIcon sx={{fontSize: "16px"}}/>
                </div>
                <p>
                    Professional haircut and...
                </p>
                <p>
                    adani hourse , mumbai
                </p>
            </div>
        </div>
    </div>
  )
}

export default SalonCard