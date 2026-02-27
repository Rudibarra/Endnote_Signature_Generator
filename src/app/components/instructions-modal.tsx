import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { useLanguage } from "../i18n/language-context";

interface InstructionsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InstructionsModal({ open, onOpenChange }: InstructionsModalProps) {
  const { t } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col p-0">
        <div className="flex-shrink-0 p-6 pb-4">
          <DialogHeader>
            <DialogTitle>{t.instructions.title}</DialogTitle>
            <DialogDescription>
              {t.instructions.title}
            </DialogDescription>
          </DialogHeader>
        </div>

        <Tabs defaultValue="gmail" className="w-full flex flex-col flex-1 overflow-hidden">
          <div className="flex-shrink-0 px-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="gmail">{t.instructions.gmail.title}</TabsTrigger>
              <TabsTrigger value="outlook">Outlook</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-y-auto px-6">
            <TabsContent value="gmail" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">{t.instructions.gmail.title}</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>{t.instructions.gmail.step1}</li>
                    <li>{t.instructions.gmail.step2}</li>
                    <li>{t.instructions.gmail.step3}</li>
                    <li>{t.instructions.gmail.step4}</li>
                    <li>{t.instructions.gmail.step5}</li>
                  </ol>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="outlook" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">{t.instructions.outlookWeb.title}</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>{t.instructions.outlookWeb.step1}</li>
                    <li>{t.instructions.outlookWeb.step2}</li>
                    <li>{t.instructions.outlookWeb.step3}</li>
                    <li>{t.instructions.outlookWeb.step4}</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium mb-2">{t.instructions.outlook.title}</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>{t.instructions.outlook.step1}</li>
                    <li>{t.instructions.outlook.step2}</li>
                    <li>{t.instructions.outlook.step3}</li>
                    <li>{t.instructions.outlook.step4}</li>
                    <li>{t.instructions.outlook.step5}</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <div className="flex-shrink-0 p-6 pt-4">
          <DialogFooter>
            <Button type="button" onClick={() => onOpenChange(false)}>
              {t.instructions.close}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}