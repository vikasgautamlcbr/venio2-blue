import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface StorylaneDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const StorylaneDemoDialog = ({ open, onOpenChange }: StorylaneDemoDialogProps) => {
  const [showForm, setShowForm] = useState(true);
  const [showDemo, setShowDemo] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!open) {
      // Reset state when dialog closes
      setShowForm(true);
      setShowDemo(false);
      setName("");
      setEmail("");
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo access:", { name, email });
    setShowForm(false);
    setShowDemo(true);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  if (showDemo) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 overflow-hidden">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors border border-border shadow-lg"
            aria-label="Close demo"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-full h-full">
            <iframe
              loading="lazy"
              src="https://app.storylane.io/demo/pjaaebjnr9nb?embed=popup"
              allow="fullscreen"
              allowFullScreen
              className="w-full h-full border-0"
              style={{
                borderRadius: '10px',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">See Venio in Action</h2>
            <p className="text-muted-foreground">
              Enter your details to access our interactive platform demo
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="demo-name">Full Name *</Label>
              <Input
                id="demo-name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-email">Work Email *</Label>
              <Input
                id="demo-email"
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              View Interactive Demo
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
