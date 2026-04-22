import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileDown, ExternalLink } from "lucide-react";

interface CVDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CVDialog = ({ open, onOpenChange }: CVDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle className="text-2xl font-extrabold">My CV</DialogTitle>
        <DialogDescription className="text-muted-foreground">
          Download my full CV or open it in a new browser tab.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <a
          href="/CV_Muhammad_Shahzaib.pdf"
          download
          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-5 py-3 rounded hover:bg-primary/90 transition-colors"
        >
          <FileDown size={18} />
          Download
        </a>
        <a
          href="/CV_Muhammad_Shahzaib.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground font-bold text-sm uppercase tracking-wider px-5 py-3 rounded hover:bg-foreground hover:text-background transition-colors"
        >
          <ExternalLink size={18} />
          View in Browser
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

export default CVDialog;
