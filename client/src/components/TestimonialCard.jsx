export const TestimonialCard = ({ name, review, image }) => (
    <div className="bg-gray-100 shadow-md rounded-lg p-4 flex items-start w-full md:w-[45%] h-fit mb-4">
      {/* Reviewer Image */}
      <img
        src={image}
        alt={name}
        className="w-1/5 h-1/5 rounded-full object-cover mr-4"
      />
      {/* Reviewer Details */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{name}</h3>
        <hr className="border-t-2 border-accent my-2 w-full" />
        <p className="italic text-gray-600">“{review}”</p>
      </div>
    </div>
);