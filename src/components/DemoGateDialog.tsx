import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, Download } from "lucide-react";

interface DemoGateDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const DemoGateDialog = ({ isOpen, onClose, onSuccess }: DemoGateDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
      onClose();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold">
            Access Interactive Demo
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your details below to access the full interactive demo experience
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Work Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium">
                Company Name *
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20">
            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              By submitting this form, you agree to receive communications from Venio regarding our products and services.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 btn-primary group"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Access Demo"}
              {!isSubmitting && (
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface DownloadFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resourceTitle: string;
}

export const DownloadFormDialog = ({ open, onOpenChange, resourceTitle }: DownloadFormDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, resource: resourceTitle });
    // Simulate download
    alert(`Thank you! Your download of "${resourceTitle}" will begin shortly.`);
    onOpenChange(false);
    setName("");
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Download {resourceTitle}</DialogTitle>
          <DialogDescription>
            Please provide your information to access this resource.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="download-name">Full Name *</Label>
            <Input
              id="download-name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="download-email">Work Email *</Label>
            <Input
              id="download-email"
              type="email"
              placeholder="john@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
