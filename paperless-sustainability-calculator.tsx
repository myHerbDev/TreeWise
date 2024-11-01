'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Leaf, Droplets, FileText, DollarSign } from 'lucide-react'
import Image from 'next/image'

export default function PaperlessSustainabilityCalculator() {
  const [monthlyTreesSaved, setMonthlyTreesSaved] = useState(10)

  // Sustainability metrics (example values, adjust as needed)
  const paperSavedPerTree = 8333 // sheets of paper saved per tree
  const carbonSavedPerTree = 1000 // kg of CO2 saved per tree per year
  const waterSavedPerTree = 75700 // liters of water saved per tree per year

  // Cost savings (example values, adjust as needed)
  const costSavingsPerTree = 100 // dollars saved per tree due to reduced paper usage and increased efficiency

  const paperSaved = monthlyTreesSaved * paperSavedPerTree
  const carbonSaved = (monthlyTreesSaved * carbonSavedPerTree) / 12 // monthly savings
  const waterSaved = (monthlyTreesSaved * waterSavedPerTree) / 12 // monthly savings
  const totalSavings = monthlyTreesSaved * costSavingsPerTree

  return (
    <Card className="w-full max-w-md mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center space-y-2">
       
        <CardTitle>myHerb Paperless Sustainability Savings Calculator</CardTitle>
        <CardDescription>See the impact of going paperless on the environment and your budget</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="trees-saved">Monthly Trees Saved by Going Paperless</Label>
          <Slider
            id="trees-saved"
            min={0}
            max={100}
            step={1}
            value={[monthlyTreesSaved]}
            onValueChange={(value) => setMonthlyTreesSaved(value[0])}
            aria-valuetext={`${monthlyTreesSaved} trees`}
          />
          <div className="text-sm text-muted-foreground text-center">{monthlyTreesSaved} trees</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SavingsCard
            icon={<FileText className="h-6 w-6 text-amber-500" />}
            title="Paper Saved"
            value={paperSaved.toLocaleString()}
            unit="sheets"
          />
          <SavingsCard
            icon={<Leaf className="h-6 w-6 text-green-500" />}
            title="Carbon Emissions Reduced"
            value={carbonSaved.toFixed(2)}
            unit="kg CO₂"
          />
          <SavingsCard
            icon={<Droplets className="h-6 w-6 text-blue-500" />}
            title="Water Saved"
            value={waterSaved.toFixed(2)}
            unit="liters"
          />
          <SavingsCard
            icon={<DollarSign className="h-6 w-6 text-green-600" />}
            title="Cost Savings"
            value={totalSavings.toFixed(2)}
            unit="USD"
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-2">
        <div className="text-lg font-semibold">Your Impact</div>
        <p className="text-sm text-muted-foreground">
          By going paperless with digital forms, e-signed invoices, and eco-friendly packaging, you're making a significant contribution to environmental sustainability and reducing operational costs!
        </p>
      </CardFooter>
    </Card>
  )
}

function SavingsCard({ icon, title, value, unit }) {
  return (
    <div className="bg-muted rounded-lg p-4 text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <h3 className="text-sm font-medium mb-1">{title}</h3>
      <p className="text-lg font-semibold">
        {value} <span className="text-sm font-normal">{unit}</span>
      </p>
    </div>
  )
}