import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SignatureData } from "../types/signature";
import { useLanguage } from "../i18n/language-context";

interface SignatureFormProps {
  register: UseFormRegister<SignatureData>;
  errors: FieldErrors<SignatureData>;
  firstInputRef?: React.RefObject<HTMLInputElement>;
}

export function SignatureForm({ register, errors, firstInputRef }: SignatureFormProps) {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-6">{t.form.title}</h2>
        <p className="text-sm text-gray-600 mb-6">
          {t.form.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">
            {t.form.fullName} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            {...register("fullName", { 
              required: t.form.validation.fullNameRequired,
              onChange: () => {
                // Ensure the first input gets the ref after mount
                if (firstInputRef && !firstInputRef.current) {
                  const input = document.getElementById('fullName') as HTMLInputElement;
                  if (input && firstInputRef) {
                    (firstInputRef as any).current = input;
                  }
                }
              }
            })}
            placeholder={t.form.placeholders.fullName}
            className={errors.fullName ? "border-red-500" : ""}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="jobTitle">
            {t.form.jobTitle} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="jobTitle"
            {...register("jobTitle", { required: t.form.validation.jobTitleRequired })}
            placeholder={t.form.placeholders.jobTitle}
            className={errors.jobTitle ? "border-red-500" : ""}
          />
          {errors.jobTitle && (
            <p className="text-sm text-red-500 mt-1">{errors.jobTitle.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="company">
            {t.form.company} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="company"
            {...register("company", { required: t.form.validation.companyRequired })}
            placeholder={t.form.placeholders.company}
            className={errors.company ? "border-red-500" : ""}
          />
          {errors.company && (
            <p className="text-sm text-red-500 mt-1">{errors.company.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">
            {t.form.email} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: t.form.validation.emailRequired,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t.form.validation.emailInvalid,
              },
            })}
            placeholder={t.form.placeholders.email}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">
            {t.form.phone} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone", { required: t.form.validation.phoneRequired })}
            placeholder={t.form.placeholders.phone}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="website">{t.form.website}</Label>
          <Input
            id="website"
            {...register("website")}
            placeholder={t.form.placeholders.website}
          />
          <p className="text-xs text-gray-500 mt-1">{t.form.websiteOptional}</p>
        </div>

        <div>
          <Label htmlFor="logoUrl">{t.form.logoUrl}</Label>
          <Input
            id="logoUrl"
            type="url"
            {...register("logoUrl", {
              pattern: {
                value: /^https?:\/\/.+/i,
                message: t.form.validation.logoUrlInvalid,
              },
            })}
            placeholder={t.form.placeholders.logoUrl}
            className={errors.logoUrl ? "border-red-500" : ""}
          />
          {errors.logoUrl && (
            <p className="text-sm text-red-500 mt-1">{errors.logoUrl.message}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            {t.form.logoUrlHelper}
          </p>
        </div>
      </div>
    </div>
  );
}