"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function BookingModal() {
  return (
    <Dialog>
        <DialogTrigger className="mt-6 w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition">
            Book Artist
        </DialogTrigger>

      <DialogContent className="rounded-[30px] border-none bg-[#f7f3ee]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold">
            Book Artist
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-5 mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white"
          />

          <input
            type="text"
            placeholder="Event Location"
            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white"
          />

          <input
            type="date"
            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white"
          />

          <input
            type="time"
            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white"
          />

          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white"
          />

          <textarea
            placeholder="Additional Details"
            rows={4}
            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white"
          />

          <button className="w-full bg-black text-white py-4 rounded-full">
            Submit Booking Request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}