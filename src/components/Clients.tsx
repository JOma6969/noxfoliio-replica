const Clients = () => {
  return (
    <div className="text-white px-4 text-[22px]">
      <h2 className="mt-30 text-center">
        I've <span className="text-[#c6ff00]">1253+ Global Clients</span> & lots
        of Project Complete
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-10 space-y-12 justify-items-center">
        {[...Array(10)].map((_, i) => (
          <img
            key={i}
            src={`/client-logo${i + 1}.webp`}
            className="opacity-[0.2] hover:opacity-[1] transition-opacity duration-700 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
