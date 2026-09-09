const SalonDetail = () => {
  return (
    <div className="space-y-5 mb-20">
        <section className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
                <img className="w-full rounded-md h-[15rem] object-cover"
                    src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"
                />
            </div>
            <div className="col-span-1">
                <img className="w-full rounded-md h-[15rem] object-cover"
                    src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"
                />
            </div>
            <div className="col-span-1">
                <img className="w-full rounded-md h-[15rem] object-cover"
                    src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"
                />
            </div>
        </section>
        <section className="space-y-3">
            <h1 className="font-bold text-3xl">
                Remarkable Salon
            </h1>
            <p>
                Remarkable Bangkok Thailand.
            </p>
            <p>
                <strong>Timing :</strong> 10:00:00 To 18:30:00
            </p>
        </section>
    </div>
  )
}

export default SalonDetail