type ListingCardProps = {
  title: string;
  price: string;
  category: string;
};

export default function ListingCard({
  title,
  price,
  category,
}: ListingCardProps) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">
        Category: {category}
      </p>

      <p className="mt-3 font-semibold text-blue-600">
        {price}
      </p>
    </div>
  );
}