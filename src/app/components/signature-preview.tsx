import { SignatureData } from "../types/signature";
import svgPaths from "../../imports/svg-9hhq5369mi";

interface SignaturePreviewProps {
  data: SignatureData;
}

export function SignaturePreview({ data }: SignaturePreviewProps) {
  const hasData = data.fullName || data.jobTitle || data.company || data.email || data.phone;

  // Use dummy data if no real data is provided
  const displayData = hasData ? data : {
    fullName: "John Smith",
    jobTitle: "Marketing Director",
    company: "Acme Corporation",
    email: "john.smith@acme.com",
    phone: "+1 (555) 123-4567",
    website: "www.acme.com"
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      {/* Main Container */}
      <div className="flex gap-4 items-start">
        {/* Logo Placeholder - 150px x 150px */}
        <div className="shrink-0 size-[75px] bg-gray-200 rounded flex items-center justify-center overflow-hidden">
          {displayData.logoUrl ? (
            <img 
              src={displayData.logoUrl} 
              alt="Company Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.src = 'https://placehold.co/75x75';
              }}
            />
          ) : (
            <img 
              src="https://placehold.co/150x150" 
              alt="Logo Placeholder" 
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Name, Title, Company */}
          <div className="flex flex-col">
            {displayData.fullName && (
              <h2 className="font-bold text-[24px] leading-[32px] text-[#101828]">
                {displayData.fullName}
              </h2>
            )}
            {displayData.jobTitle && (
              <p className="text-[16px] leading-[24px] text-[#4a5565]">
                {displayData.jobTitle}
              </p>
            )}
            {displayData.company && (
              <p className="text-[16px] leading-[24px] text-[#1e2939] font-semibold">
                {displayData.company}
              </p>
            )}
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-1">
            {displayData.email && (
              <div className="flex items-center gap-2">
                {/* Email Icon */}
                <svg className="shrink-0 size-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d={svgPaths.p17070980}
                    stroke="#364153"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                  <path
                    d={svgPaths.p120c8200}
                    stroke="#364153"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                </svg>
                <a
                  href={`mailto:${displayData.email}`}
                  className="text-[14px] leading-[20px] text-[#364153] hover:underline"
                >
                  {displayData.email}
                </a>
              </div>
            )}

            {displayData.phone && (
              <div className="flex items-center gap-2">
                {/* Phone Icon */}
                <svg className="shrink-0 size-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d={svgPaths.p2a44c680}
                    stroke="#364153"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                </svg>
                <a
                  href={`tel:${displayData.phone}`}
                  className="text-[14px] leading-[20px] text-[#364153] hover:underline"
                >
                  {displayData.phone}
                </a>
              </div>
            )}

            {displayData.website && (
              <div className="flex items-center gap-2">
                {/* Website Icon */}
                <svg className="shrink-0 size-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d={svgPaths.p39ee6532}
                    stroke="#364153"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                  <path
                    d={svgPaths.p14d10c00}
                    stroke="#364153"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                  <path
                    d="M1.33333 8H14.6667"
                    stroke="#364153"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                </svg>
                <a
                  href={displayData.website.startsWith('http') ? displayData.website : `https://${displayData.website}`}
                  className="text-[14px] leading-[20px] text-[#364153] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {displayData.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-4 h-1 bg-[#1e2939] rounded-sm" />
    </div>
  );
}