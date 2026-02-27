import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { SignatureForm } from "./components/signature-form";
import { SignaturePreview } from "./components/signature-preview";
import { InstructionsModal } from "./components/instructions-modal";
import { SignatureData } from "./types/signature";
import { generateSignatureHTML } from "./utils/generate-html";
import { Button } from "./components/ui/button";
import { Copy, Download, FileText, Check, Trash2, Languages } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./components/ui/alert-dialog";
import { useLanguage, LanguageProvider } from "./i18n/language-context";

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [isGenerated, setIsGenerated] = useState(false);
  const [htmlSignature, setHtmlSignature] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignatureData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      jobTitle: "",
      company: "",
      email: "",
      phone: "",
      website: "",
      logoUrl: "",
    },
  });

  const formData = watch();

  const onGenerate = handleSubmit((data) => {
    const html = generateSignatureHTML(data);
    setHtmlSignature(html);
    setIsGenerated(true);
    setShowInstructions(true);
    toast.success(t.toast.signatureGenerated);
  });

  const handleCopy = async () => {
    try {
      // Use modern Clipboard API to copy HTML with proper formatting
      // This ensures email clients can paste the signature correctly
      const type = "text/html";
      const blob = new Blob([htmlSignature], { type });
      const data = [new ClipboardItem({ [type]: blob })];
      
      await navigator.clipboard.write(data);

      setCopied(true);
      toast.success(t.toast.signatureCopied);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback to the old method if Clipboard API fails
      try {
        const el = document.createElement("div");
        el.innerHTML = htmlSignature;
        document.body.appendChild(el);

        const range = document.createRange();
        range.selectNodeContents(el);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);

        document.execCommand("copy");
        selection?.removeAllRanges();
        document.body.removeChild(el);

        setCopied(true);
        toast.success(t.toast.signatureCopied);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        toast.error(t.toast.copyError);
      }
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlSignature], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "email-signature.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(t.toast.signatureDownloaded);
  };

  const handleClear = () => {
    setShowClearConfirm(true);
  };

  const handleConfirmClear = () => {
    setHtmlSignature("");
    setIsGenerated(false);
    setShowInstructions(false);
    setShowClearConfirm(false);
    reset();
    toast.success(t.toast.signatureCleared);
    
    // Focus on first input field after clearing
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-gray-900">{t.header.title}</h1>
              <p className="text-sm text-gray-600 mt-1">
                {t.header.subtitle}
              </p>
            </div>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Languages className="size-4" />
              {language === 'en' ? 'Español' : 'English'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <SignatureForm register={register} errors={errors} firstInputRef={firstInputRef} />

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button
                onClick={onGenerate}
                disabled={!isValid}
                className="w-full"
                size="lg"
              >
                {t.form.generateButton}
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                {t.form.generateHelper}
              </p>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="mb-4 text-gray-900">{t.preview.title}</h3>
              <SignaturePreview data={formData} />
            </div>

            {/* Export Panel */}
            {isGenerated && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
                <div>
                  <h3 className="text-gray-900 mb-2">{t.export.title}</h3>
                  <p className="text-sm text-gray-600">
                    {t.export.subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleCopy}
                    className="flex-1"
                    variant={copied ? "default" : "default"}
                  >
                    {copied ? (
                      <>
                        <Check className="size-4 mr-2" />
                        {t.export.copied}
                      </>
                    ) : (
                      <>
                        <Copy className="size-4 mr-2" />
                        {t.export.copyHtml}
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="flex-1"
                  >
                    <Download className="size-4 mr-2" />
                    {t.export.downloadHtml}
                  </Button>
                </div>

                <Button
                  onClick={() => setShowInstructions(true)}
                  variant="outline"
                  className="w-full"
                >
                  <FileText className="size-4 mr-2" />
                  {t.export.viewInstructions}
                </Button>

                <Button
                  onClick={handleClear}
                  variant="secondary"
                  className="w-full"
                >
                  <Trash2 className="size-4 mr-2" />
                  {t.export.clearSignature}
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Instructions Modal */}
      <InstructionsModal
        open={showInstructions}
        onOpenChange={setShowInstructions}
      />
      
      {/* Toast notifications */}
      <Toaster />

      {/* Clear Confirmation Dialog */}
      <AlertDialog open={showClearConfirm} onOpenChange={setShowClearConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.clearDialog.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.clearDialog.description}
              <br />
              {t.clearDialog.cannotUndo}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.clearDialog.cancel}</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmClear}
            >
              {t.clearDialog.confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}