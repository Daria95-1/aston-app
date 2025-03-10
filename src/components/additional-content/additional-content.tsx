type AdditionalContentProps = {
  title: string;
  description?: string;
  image: string;
  actionText?: string;
  actionLink?: string;
}

export const AdditionalContent: React.FC<AdditionalContentProps> = ({
  title,
  description,
  image
}) => {
  return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <img src={image} alt="Additional content" className="max-w-xs mb-6" />
          <h2 className="text-2xl font-semibold text-[#2B8AFF]">{title}</h2>
          {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
  )
};
