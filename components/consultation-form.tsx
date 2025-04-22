"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Hidden email recipient - not visible in the DOM
const CONTACT_EMAIL = "noman.saleem.4@gmail.com"

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real application, you would send the form data to your server
    // or use a service like EmailJS or FormSpree
    // The form would be sent to CONTACT_EMAIL without exposing it in the HTML

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-6 bg-green-50 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
        <p className="text-green-600">
          Your consultation request has been submitted. We'll contact you within 24 hours to schedule your free
          consultation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input id="first-name" name="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input id="last-name" name="last-name" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest</Label>
        <Select name="service">
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ai">Artificial Intelligence</SelectItem>
            <SelectItem value="ml">Machine Learning</SelectItem>
            <SelectItem value="ds">Data Science</SelectItem>
            <SelectItem value="de">Data Engineering</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please describe your project or requirements"
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </Button>
      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to be contacted about our services. Your information will never be shared
        with third parties.
      </p>
    </form>
  )
}
