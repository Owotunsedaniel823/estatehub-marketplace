type ListingCardProps = {
  title: string;
  price: string;
  category: string;
  image: string;
};

export default function ListingCard({
  title,
  price,
  category,
  image,
}: ListingCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
          {category}
        </span>

        <h2 className="mt-4 text-xl font-bold">
          {title}
        </h2>

        <p className="mt-2 text-2xl font-bold text-blue-600">
          {price}
        </p>

        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}